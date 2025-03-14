import * as cdk from 'aws-cdk-lib';
import { PipelineBlueprint } from '@cdklabs/cdk-cicd-wrapper';

const app = new cdk.App();

/**
 * To enable the `Stage.PROD` stage in your pipeline you have to explicitly add it into the `.defineStages()` hook as below.
 * In our case we have DEV, INT and PROD so we add all of them explicitly as we assume you have them all in your project.
 * Attention: Any stage not included in the defineStages() function will be excluded from the pipeline.
 * This is done for safety reasons, to not export accidentally `PROD` env vars and have it deployed into the wrong account.
 */
PipelineBlueprint.builder().synth(app);