import { Bucket } from '@pulumi/aws/s3/bucket';
import * as helpers from './helpers'
export interface SetupBucketArgs {
    targetDomain: string,
}

export interface StorageBucketInfo {
    targetDomain: string,
    contentBucket: Bucket,
    logsBucket: Bucket,
}

export function setupStorageBuckets(args: SetupBucketArgs): StorageBucketInfo {
    const contentBucket = new Bucket("contentBucket",
        {
            bucket: args.targetDomain,
            acl: "public-read",
            policy: helpers.publicReadPolicyForBucket(args.targetDomain),
            website: {
                indexDocument: "index.html",
                errorDocument: "index.html",
            },
            forceDestroy: true,
        }
    );

    const logsBucket = new Bucket("requestLogs",
        {
            bucket: `${args.targetDomain}-logs`,
            acl: "private",
            forceDestroy: true,
        }
    );

    const output: StorageBucketInfo = {
        contentBucket,
        logsBucket,
        targetDomain: args.targetDomain,
    }

    return output
}
