# GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages with full i18n support.

## Setup

1. **Enable GitHub Pages** in your repository:
   - Go to Settings → Pages
   - Source: "GitHub Actions"

2. **Push to main branch** - The site will automatically deploy

## Local Development

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Deployment

The site automatically deploys when you push to the `main` branch.

- **Build**: GitHub Actions builds the site using Bun and Astro
- **Deploy**: Automatically deployed to `https://bryxosmmm.github.io/readme.me`
- **Languages**: 
  - English: `/en/`
  - Russian: `/ru/`
  - Root redirects to `/en/`

## URL Structure

- **Root**: `/` → Redirects to `/en/`
- **English**: `/en/` (default language)
- **Russian**: `/ru/`
- **Language switcher**: Toggles between `/en/` and `/ru/`

## Configuration

- **Base path**: `/readme.me` (configured in `astro.config.mjs`)
- **Output**: Static site generation
- **Framework**: Astro with i18n support
- **Routing**: All locales are prefixed for consistent GitHub Pages deployment

## Troubleshooting

- Check GitHub Actions tab for build logs
- Ensure repository has Pages permissions enabled
- Verify `main` branch is the default branch
- Confirm i18n routing is working with prefixed locales
