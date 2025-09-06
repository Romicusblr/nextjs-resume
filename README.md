# Next.js Resume for mastyka.dev

This project is a personal resume website deployed at [mastyka.dev](https://mastyka.dev). 

## Acknowledgments

This project is a fork of [nextjs-resume](https://github.com/colinhemphill/nextjs-resume) by [Colin Hemphill](https://github.com/colinhemphill). Special thanks to Colin for creating this excellent resume template and making it available to the community.

## Features

- Built with Next.js and Tailwind CSS
- Deployed using SST on AWS
- Customizable color schemes
- Responsive design
- PDF generation
- Private information access via secure link
- Dynamic OG images

## Technology

- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Contentlayer](https://www.contentlayer.dev/)
- [React-pdf](https://react-pdf.org/)
- [Radix UI Colors](https://www.radix-ui.com/colors)
- [SST](https://sst.dev/) for AWS deployment

## Deploy with SST

Minimal steps to deploy this app with SST to AWS.

- Install dependencies and SST (if not already):

```bash
npm i
npx sst@latest --help # optional: installs/updates SST CLI locally if needed
```

- Deploy to the default (dev) stage:

```bash
npx sst deploy
```

- Deploy to production:

```bash
npx sst deploy --stage production
```

Notes:
- SST uses the `dev` stage by default when `--stage` is not provided.
- The AWS profile used by SST is configured in `sst.config.ts` (the `aws.profile` value).
- To avoid accidental removal of production resources, the config protects and retains resources for `production`.

## License

This project follows the original license of the nextjs-resume template. See the [LICENSE](/LICENSE.md) file for details.
