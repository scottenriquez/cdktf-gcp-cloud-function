import { Construct } from 'constructs';
import { App, TerraformStack } from 'cdktf';
import { GoogleProvider, CloudfunctionsFunction, StorageBucket, StorageBucketObject } from '@cdktf/provider-google';

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);
    new GoogleProvider(this, 'Google', {
      region: 'us-central1',
      zone: 'us-central1-c',
      project: process.env.GCP_PROJECT_ID,
    });
    const storageBucket = new StorageBucket(this, 'ArtifactBucket', {
      name: 'cloud-function-build-artifacts'
    });
    const buildArtifactStorageObject = new StorageBucketObject(this, 'CloudFunctionsBuildArtifact', {
      name: 'CloudFunctions.zip',
      bucket: storageBucket.name,
      source: '../../../../function-code/CloudFunctions.zip'
    });
    new CloudfunctionsFunction(this, 'Function', {
      name: 'CloudFunction',
      description: 'My first GCP Cloud Function',
      entryPoint: 'helloHttp',
      runtime: 'nodejs16',
      sourceArchiveBucket: storageBucket.name,
      sourceArchiveObject: buildArtifactStorageObject.name,
      triggerHttp: true
    });
  }
}

const app = new App();
new MyStack(app, 'cloud-function');
app.synth();
