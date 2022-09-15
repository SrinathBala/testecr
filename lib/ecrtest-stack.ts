import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ecr from 'aws-cdk-lib/aws-ecr';

import {DockerImageAsset} from 'aws-cdk-lib/aws-ecr-assets'
import * as path from 'path'

export class EcrtestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const repository = new ecr.Repository(this, 'Repository',{
      repositoryName: 'testrepo',
      imageScanOnPush : true
    });

    const imageAsset = new DockerImageAsset(this, 'ImageAsset', {
      directory: path.join(__dirname, '../docker')
  })
  }
}
