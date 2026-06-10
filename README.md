# Tomás Rinaldi — Freelance landing page

Bilingual (EN/ES) landing page for freelance software work: websites, automations,
internal tools and maintenance for small and growing businesses.

Static site, no build step. Just open `index.html` or serve the folder.

## Structure

- `index.html` — entry point
- `styles.css` — styles (Bold direction)
- `app.js` — page render, EN/ES toggle, contact form
- `assets/` — images and favicons

## Local preview

```bash
python3 -m http.server 8765
# open http://localhost:8765
```

## Editing contact details

Edit the `CONFIG` object at the top of `app.js` (WhatsApp number and email).
