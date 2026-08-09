# jtraskas.io

A personal blog built with Next.js and Tailwind CSS, published to
[GitHub Pages](https://jtraskas.github.io/jtraskas.io/) via GitHub Actions.

## Make it yours

All personal details — name, headline, bio, About page text, and social
links — live in one file: [`src/lib/siteConfig.js`](src/lib/siteConfig.js).
Edit that file and the whole site updates.

You'll also want to replace the placeholder images:

- `src/images/avatar.png` — the small round photo in the header (square, ~512px)
- `src/images/portrait.png` — the photo on the About page (square, ~800px)

Keep the same filenames (or update the imports in `src/components/Header.jsx`
and `src/pages/about.jsx`).

## Writing articles

Each article is a folder under `src/pages/articles/` containing an
`index.mdx` file. The `hello-world` article is a working example with
instructions inside — copy its folder, rename it, and start writing.

## Local development

Project scripts are run with [uv](https://docs.astral.sh/uv/) (no Python setup
needed — uv provisions it automatically). Node.js must be installed.

```bash
uv run init           # install npm dependencies
uv run start          # start the dev server on http://localhost:3000
uv run start --port 4000
uv run clean          # remove build artifacts (.next, out, coverage, public/rss)
uv run clean --all    # also remove node_modules
```

The long form `uv run scripts/<name>.py` also works.

## Deployment

Every push to `master` builds the static export and publishes it to GitHub
Pages at https://jtraskas.github.io/jtraskas.io/.

One-time setup for a new GitHub repository:

1. Create a repository named `jtraskas.io` under the `jtraskas` account and
   push this project to its `master` branch.
2. In the repository, go to Settings → Pages and set **Source** to
   **GitHub Actions**.

Because the site is served from a project subpath, the workflow builds with
`NEXT_PUBLIC_BASE_PATH=/jtraskas.io`. To move the site to a custom domain
later, drop that variable from `.github/workflows/ci.yml`, set
`NEXT_PUBLIC_SITE_URL` to the new origin, and add the domain under
Settings → Pages.
