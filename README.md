# jtraskas.io

A personal blog built with Next.js and Tailwind CSS, published to
[GitHub Pages](https://traskas-consulting.com/) via GitHub Actions.

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
Pages at https://traskas-consulting.com/.

One-time setup for a new GitHub repository:

1. Create a repository named `jtraskas.io` under the `dtraskas` account and
   push this project to its `master` branch.
2. In the repository, go to Settings → Pages and set **Source** to
   **GitHub Actions**.
3. Under Settings → Pages → Custom domain, enter `traskas-consulting.com`,
   and at the domain registrar point the apex domain at GitHub Pages
   (A records to GitHub's Pages IPs, or an ALIAS/ANAME record to
   `dtraskas.github.io`). Enable **Enforce HTTPS** once the DNS check passes.

The site is served from the domain root, so the workflow leaves
`NEXT_PUBLIC_BASE_PATH` unset and sets `NEXT_PUBLIC_SITE_URL` to
`https://traskas-consulting.com`.
