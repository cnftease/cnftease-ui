// Copyright 2016-2019, Pulumi Corporation.  All rights reserved.

import * as aws from "@pulumi/aws";
import * as functions from '.';
import { HostedDomainInfo } from "./setupHostedDomain";
import { StorageBucketInfo } from "./setupStorageBuckets";

export interface SetupCdnArgs {
    storageBucketInfo: StorageBucketInfo,
    hostedDomainInfo: HostedDomainInfo,
    defaultTTL?: number,
    maxTTL?: number,
}

export function setupCdn(args: SetupCdnArgs): aws.cloudfront.Distribution {
    const tenMinutes = 60 * 10
    const defaultTTL = args.defaultTTL || tenMinutes
    const maxTTL = args.maxTTL || tenMinutes
    const distributionAliases = [args.storageBucketInfo.targetDomain]

    // distributionArgs configures the CloudFront distribution. Relevant documentation:
    // https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html
    // https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html
    const distributionArgs: aws.cloudfront.DistributionArgs = {
        enabled: true,
        // Alternate aliases the CloudFront distribution can be reached at, in addition to https://xxxx.cloudfront.net.
        // Required if you want to access the distribution via targetDomain as well.
        aliases: distributionAliases,

        // We only specify one origin for this distribution, the S3 content bucket.
        origins: [
            {
                originId: args.storageBucketInfo.contentBucket.arn,
                domainName: args.storageBucketInfo.contentBucket.websiteEndpoint,
                customOriginConfig: {
                    // Amazon S3 doesn't support HTTPS connections when using an S3 bucket configured as a website endpoint.
                    // https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginProtocolPolicy
                    originProtocolPolicy: "http-only",
                    httpPort: 80,
                    httpsPort: 443,
                    originSslProtocols: ["TLSv1.2"],
                },
            },
        ],

        defaultRootObject: "index.html",

        // A CloudFront distribution can configure different cache behaviors based on the request path.
        // Here we just specify a single, default cache behavior which is just read-only requests to S3.
        defaultCacheBehavior: {
            targetOriginId: args.storageBucketInfo.contentBucket.arn,

            viewerProtocolPolicy: "redirect-to-https",
            allowedMethods: ["GET", "HEAD", "OPTIONS"],
            cachedMethods: ["GET", "HEAD", "OPTIONS"],

            forwardedValues: {
                cookies: { forward: "none" },
                queryString: false,
            },

            minTtl: 0,
            defaultTtl: defaultTTL,
            maxTtl: maxTTL,
        },

        // "All" is the most broad distribution, and also the most expensive.
        // "100" is the least broad, and also the least expensive.
        priceClass: "PriceClass_100",

        // You can customize error responses. When CloudFront receives an error from the origin (e.g. S3 or some other
        // web service) it can return a different error code, and return the response for a different resource.
        customErrorResponses: [
            { errorCode: 404, responseCode: 404, responsePagePath: "/index.html" },
        ],

        restrictions: {
            geoRestriction: {
                restrictionType: "none",
            },
        },

        viewerCertificate: {
            acmCertificateArn: args.hostedDomainInfo.certificate.arn,  // Per AWS, ACM certificate must be in the us-east-1 region.
            sslSupportMethod: "sni-only",
        },

        loggingConfig: {
            bucket: args.storageBucketInfo.logsBucket.bucketDomainName,
            includeCookies: false,
            prefix: `${args.storageBucketInfo.targetDomain}/`,
        },
    };

    const cdn = new aws.cloudfront.Distribution("cdn", distributionArgs);

    const aRecord = functions.helpers.createAliasRecord(args.storageBucketInfo.targetDomain, cdn);
    return cdn;
}