# Bakes of Hope Foundation

Small static demo site with a top navigation bar and a left sidebar navigation.

Open `index.html` in a browser or serve the directory locally:

```bash
# from project root
python3 -m http.server 8000
# then open http://localhost:8000
```

Backend (contact form)

1. Copy `.env.example` to `.env` and fill SMTP settings.

```bash
cp .env.example .env
```

2. Install and run the backend (requires Node.js):

```bash
npm install
npm start
# backend will listen on $PORT (default 3000)
```

The contact form will POST to `/api/contact` on the same origin. For local testing, run the static site (e.g. `python3 -m http.server 8000`) and run the backend on port 8000 proxy or open the site through the backend origin.
# charity
