# EDUC2060 Honeysuckle Commerce Learning Lab

A static GitHub Pages-compatible website for an EDUC2060 tutorial presentation and Stage 5 Commerce learning portal.

## Files

- `index.html` — main page with Student and Teacher portals
- `styles.css` — visual design and responsive layout
- `script.js` — interactivity for tabs, FAQ, quiz and progress tracking

## Local preview

From the project folder:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## GitHub Pages deployment

Because this is a static site, it can be served directly from the repository root or the `docs` folder.

Recommended quick setup:

1. Push this folder to a GitHub repository.
2. In GitHub, open Settings → Pages.
3. Select the branch to publish (for example `main`) and the root folder.
4. Save and wait for the site to build.

This site does not require a build step, making it compatible with standard GitHub Pages hosting.
