# Dragi Linktree Social Media

A mobile-first app download hub for Dragi's social profiles. Static HTML, CSS and JavaScript; no build, runtime dependencies, analytics or third-party font requests.

## Local preview

```sh
python3 -m http.server 4174 --bind 127.0.0.1
```

Open <http://127.0.0.1:4174/>. Explicit language previews: `?lan=en`, `?lan=uk`, `?lan=de`, `?lan=es`.

## Languages

Priority: valid `?lan=` → saved manual selection → first supported browser language → English. Regional locales (including `uk-UA`, `de-AT` and `es-MX`) resolve to their base language. Unavailable browser storage does not prevent rendering or switching languages. A manual selection updates the query string without changing unrelated query parameters or the current fragment.

The language changes all functional copy, metadata, accessible names, store locale parameters and the Dragi Progress destination:

| Language | Progress |
| --- | --- |
| English | https://progress.dragi.app/en/ |
| Українська | https://progress.dragi.app/uk/ |
| Deutsch | https://progress.dragi.app/de/ |
| Español | https://progress.dragi.app/es/ |

Social handles remain in their original language. Without JavaScript, the complete English page and all links remain usable.

## Editing

- `index.html`: semantic structure, English fallback, links and inline icons.
- `style.css`: responsive design, animated gradient, hover/press effects and reduced-motion support.
- `app.js`: translations, locale selection and small pointer interactions.
- `assets/`: locally hosted Dragi brand assets and Manrope variable font (SIL Open Font License; see `FONT-LICENSE.txt`). Dragi mascot sourced from https://progress.dragi.app/assets/mascot.png; app icon reused from the existing Dragi link hub.

Store links are ordinary anchors in the same tab so mobile store handoff and in-app browsers can use their native navigation. The ripple never intercepts or delays navigation. Social and Progress links open a separate tab with `noopener noreferrer`. Animations stop for `prefers-reduced-motion: reduce`. No device-based redirection hides either store.

## Content and motion

The main message follows Dragi’s positioning: story episodes, mentor explanations and practice help learners understand how language works and build their own sentences. Dragi Progress introduces the founder’s personal goal of Spanish from zero to B2 in one year using Dragi and AI, with an invitation to create a challenge at the visitor’s own goal and pace.

The design uses a restrained purple-to-orange gradient, a compact brand mark and clear typography. Store buttons enter in sequence on page load; wrapper animations keep the entrance independent of hover tilt and touch feedback. A touch press adds a highlight, ripple and shallow depression without delaying navigation. Social and Progress links reveal once when scrolled into view. Unsupported JavaScript/IntersectionObserver and reduced-motion preferences leave every link visible.

## GitHub Pages

Repository: https://github.com/dragi-app/dragi-linktree-social-media

Open **Settings → Pages → Deploy from a branch → main → / (root)**. All asset URLs are relative, so the project path works without a custom domain. `.nojekyll` prevents unnecessary Jekyll processing.

Expected Pages URL: https://dragi-app.github.io/dragi-linktree-social-media/

There is intentionally no `CNAME`; this repository does not take over the existing `links.dragi.app` domain. If a different deployment URL is chosen, update the absolute `og:image` URL in `index.html`.
