# SSQS Website Notes

This project contains the public website for the SSQS lab.

## Project

- Site name: `SSQS`
- Full name: `Solid-State Quantum Storage Laboratory`
- Framework: `Next.js`
- Live URL: `http://111.230.186.141`

## Main Content Files

- Site content data: `app/site-data.ts`
- Global styles: `app/globals.css`
- Home page: `app/page.tsx`
- Research page: `app/research/page.tsx`
- Research team page: `app/research-team/page.tsx`
- Faculty profile pages: `app/research-team/[slug]/page.tsx`

## Assets

- Faculty portraits: `public/assets/faculty`
- Lab images: `public/assets/lab`
- Paper figures: `public/assets/papers`
- Email reference file: `gmail.txt`

## Local Development

```bash
npm install
npm run dev
```

Open the local site at the URL shown by Next.js after the dev server starts.

## Build Check

```bash
npm run build
```

## Update Content

Most content changes happen in `app/site-data.ts`.

Typical updates:

- Edit faculty bios, directions, papers, and source links
- Edit student information, cohorts, schools, and emails
- Add alumni entries when they are ready
- Replace or add images under `public/assets`

## Deploy Workflow

Push to GitHub:

```bash
git push origin main
```

Deploy to the production server:

```bash
git push production main
```

The production remote triggers the server-side deployment hook and updates the live site.
