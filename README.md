# trussel2-haw-mirror

Static-friendly mirror viewer for the Trussel Hawaiian Dictionary site.

## Environment

Set the mirror base URL (where the raw HTML mirror is hosted):

```bash
MIRROR_BASE_URL=https://www.heaniani.com
```

Copy `.env.example` to `.env.local` for local development.

## Development

```bash
npm install
npm run dev
```

## Cloudflare R2 + Custom Domain

To connect the mirror:

1. Upload the contents of `/Users/leimomi/site-mirror/raw/trussel2/trussel2.com/HAW` to the R2 bucket `trussel2-haw-mirror` (bucket root).
2. In Cloudflare R2, enable **Public Access** for the bucket.
3. Add the custom domain `www.heaniani.com` to the bucket.
4. Set `MIRROR_BASE_URL=https://www.heaniani.com` in:
   - `.env.local` (for local dev)
   - Cloudflare Pages environment variables (for deploy)

## Notes

- The mirror HTML is fetched at runtime from `MIRROR_BASE_URL`.
- Search is disabled in the static mirror.
