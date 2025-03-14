import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class PipelineCiCdWrapperStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    console.log(process.env.RES_ACCOUNT_AWS_PROFILE)

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'PipelineCiCdWrapperQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
