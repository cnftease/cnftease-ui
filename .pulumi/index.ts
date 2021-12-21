// Copyright 2016-2019, Pulumi Corporation.  All rights reserved.

import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";
import * as functions from './functions';
import {Config} from "@pulumi/pulumi";

const stackConfig = new Config("cnftease-main-app")

export const CONFIG = {
    targetDomain: stackConfig.require('targetDomain')
}

const storageBucketInfo = functions.setupStorageBuckets({
    targetDomain: CONFIG.targetDomain
});

const hostedDomainInfo = functions.setupHostedDomain({
    targetDomain: CONFIG.targetDomain
});

const cdn = functions.setupCdn({
    hostedDomainInfo,
    storageBucketInfo,
})

export const contentBucketUri = pulumi.interpolate`s3://${storageBucketInfo.contentBucket.bucket}`;
export const contentBucketWebsiteEndpoint = storageBucketInfo.contentBucket.websiteEndpoint;
export const cloudFrontDomain = cdn.domainName;
export const targetDomainEndpoint = `https://${CONFIG.targetDomain}/`;
