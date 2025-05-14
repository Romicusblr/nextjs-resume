// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'nextjs-resume',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      protect: ['production'].includes(input?.stage),
      home: 'aws',
      providers: {
        aws: {
          profile: 'rm_aws',
          region: 'us-east-1',
          defaultTags: {
            tags: { Project: 'nextjs-resume', ManagedBy: 'sst' },
          },
        },
      },
    };
  },
  async run() {
    new sst.aws.Nextjs('MyWeb', {
      buildCommand: 'npm run build:opennext',
      domain: {
        name: 'mastyka.dev',
        redirects: ['www.mastyka.dev'],
      },
    });
  },
});
