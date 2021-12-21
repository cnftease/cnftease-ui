
import * as aws from "@pulumi/aws";
import * as functions from '../functions';

export interface SetupHostedDomainArgs {
    targetDomain: string,
    certificateValidationTTL?: number,
}

export interface HostedDomainInfo {
    certificate: aws.acm.Certificate,
}

export function setupHostedDomain(args: SetupHostedDomainArgs): HostedDomainInfo {
    const tenMinutes = 60 * 10
    const certificateValidationTTL = args.certificateValidationTTL || tenMinutes
    const targetDomain = args.targetDomain;

    const eastRegion = new aws.Provider("east", {
        profile: aws.config.profile,
        region: "us-east-1", // Per AWS, ACM certificate must be in the us-east-1 region.
    });

    // if config.includeWWW include required subjectAlternativeNames to support the www subdomain
    const certificateConfig: aws.acm.CertificateArgs = {
        domainName: args.targetDomain,
        validationMethod: "DNS",
        subjectAlternativeNames: [],
    };

    const certificate = new aws.acm.Certificate("certificate", certificateConfig, { provider: eastRegion });

    const domainParts = functions.helpers.getDomainAndSubdomain(targetDomain);
    const hostedZoneId = aws.route53.getZone({ name: domainParts.parentDomain }, { async: true }).then(zone => zone.zoneId);

    /**
     *  Create a DNS record to prove that we _own_ the domain we're requesting a certificate for.
     *  See https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html for more info.
     */
    const certificateValidationDomain = new aws.route53.Record(`${targetDomain}-validation`, {
        name: certificate.domainValidationOptions[0].resourceRecordName,
        zoneId: hostedZoneId,
        type: certificate.domainValidationOptions[0].resourceRecordType,
        records: [certificate.domainValidationOptions[0].resourceRecordValue],
        ttl: certificateValidationTTL,
    });


    // if config.includeWWW include the validation record for the www subdomain
    const validationRecordFqdns = [certificateValidationDomain.fqdn]

    /**
     * This is a _special_ resource that waits for ACM to complete validation via the DNS record
     * checking for a status of "ISSUED" on the certificate itself. No actual resources are
     * created (or updated or deleted).
     *
     * See https://www.terraform.io/docs/providers/aws/r/acm_certificate_validation.html for slightly more detail
     * and https://github.com/terraform-providers/terraform-provider-aws/blob/master/aws/resource_aws_acm_certificate_validation.go
     * for the actual implementation.
     */
    const certificateValidation = new aws.acm.CertificateValidation("certificateValidation", {
        certificateArn: certificate.arn,
        validationRecordFqdns: validationRecordFqdns,
    }, { provider: eastRegion });

    const certificateArn = certificateValidation.certificateArn;

    return {
        certificate
    }
}
