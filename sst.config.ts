// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  async app(input) {
    // Load local env file dynamically to avoid top-level imports (SST requirement)
    const dotenv = await import('dotenv');
    dotenv.config({ path: './.env.sst',  });

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
            tags: {
              Project: 'nextjs-resume',
              ManagedBy: 'sst',
              Environment: input?.stage || 'dev',
            },
          },
        },
        cloudflare: {
          apiToken: process.env.CLOUDFLARE_API_TOKEN,
          version: '6.8.0',
        },
      },
    };
  },
  async run() {
    new sst.aws.Nextjs('MyWeb', {
      buildCommand: 'pnpm run build:opennext',
      domain: {
        dns: sst.cloudflare.dns(),
        name: 'mastyka.dev',
        redirects: ['www.mastyka.dev'],
      },
    });
  },
});
