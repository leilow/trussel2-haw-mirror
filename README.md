# trussel2-haw-mirror

Static-friendly mirror viewer for the Trussel Hawaiian Dictionary site.

## Environment

Set the mirror base URL (where the raw HTML mirror is hosted):

```bash
MIRROR_BASE_URL=https://your-mirror.example.com
```

Copy `.env.example` to `.env.local` for local development.

## Development

```bash
npm install
npm run dev
```

## Notes

- The mirror HTML is fetched at runtime from `MIRROR_BASE_URL`.
- Search is disabled in the static mirror.
