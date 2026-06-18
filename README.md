# Pauline's Chinese Herb Soup Guide

A free, shareable website with common Chinese herbs for soup-brewing —
benefits, risks, and family recipes.

This is a small React website. It costs nothing to host and you don't
need any coding experience to put it online — just follow one of the
options below.

---

## Easiest option: Vercel (free, ~5 minutes, no coding needed)

1. Go to https://vercel.com and sign up (free) — you can sign up with
   your email or a Google/GitHub account.
2. Once logged in, click **"Add New... -> Project"**.
3. Choose **"Deploy without Git"** / look for an option to **upload a
   folder** (Vercel calls this "drag and drop" deploy — you'll see a
   box you can drop a folder or zip into).
4. Drag in this entire project folder (or the zip file, unzipped).
5. Vercel automatically detects it's a Vite project. Leave the default
   settings and click **Deploy**.
6. In under a minute, you'll get a live link like:
   `https://paulines-herb-soup-guide.vercel.app`
7. Share that link with friends and family. Done!

If Vercel asks you to connect a GitHub account instead of plain
upload, see the "Netlify" option below, which has a very easy
drag-and-drop flow.

---

## Alternative: Netlify (free, drag-and-drop, no coding needed)

Netlify has a particularly simple option for people without a GitHub
account:

1. Go to https://app.netlify.com/drop
2. You'll need to "build" the site first on your own computer (one-time
   setup) — see the **"Building it yourself"** section below to
   generate a `dist` folder.
3. Drag that `dist` folder onto the Netlify Drop page.
4. You'll instantly get a live link to share.

---

## Building it yourself (only needed for the Netlify Drop method)

This requires Node.js installed on your computer (free from
https://nodejs.org — choose the LTS version).

1. Unzip this project folder.
2. Open a terminal/command prompt inside the folder.
3. Run:
   ```
   npm install
   npm run build
   ```
4. This creates a `dist` folder — that's your finished website, ready
   to drag into Netlify Drop, or upload anywhere that hosts static
   files (even a basic web host).

---

## Want a custom domain instead of the generated link?

The free `*.vercel.app` or `*.netlify.app` link works perfectly for
sharing with friends and family — no extra cost.

If later you'd like something like `paulinesherbs.com`, that requires
buying a domain name (typically US$10-15/year from a registrar like
Namecheap or Cloudflare) and pointing it at your free Vercel/Netlify
site. The hosting itself stays free either way.

---

## Updating the content later

All the herb and recipe content lives in `src/App.jsx` near the top
of the file, in two lists called `herbs` and `recipes`. You can edit
text directly there (e.g. add a new herb, tweak a recipe) and
redeploy by repeating the same upload step.

---

## Disclaimer

This guide is for general wellness reference only and is not a
substitute for professional medical or TCM advice.
