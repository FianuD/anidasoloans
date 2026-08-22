# Anidaso Loans

Official website for **Anidaso Loans Ltd**, built as a static site styled with [Tailwind CSS](https://tailwindcss.com/) and deployed on [Netlify](https://www.netlify.com/).

## Tech Stack

- **HTML** — single-page static site (`index.html`)
- **Tailwind CSS** — utility-first styling, compiled from `input.css` into `output.css`
- **Netlify** — hosting and deployment

## Project Structure

```
anidasoloans/
├── assets/              # Images, video, and audio assets
├── index.html            # Main site page
├── input.css              # Tailwind source styles
├── tailwind.config.js     # Tailwind configuration
├── package.json            # Project scripts and dependencies
├── netlify.toml             # Netlify build and header configuration
└── .gitignore
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm installed locally

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/FianuD/anidasoloans.git
cd anidasoloans
npm install
```

### Build

Compile the Tailwind CSS into `output.css`:

```bash
npm run build
```

This runs:

```bash
tailwindcss -i ./input.css -o ./output.css --minify
```

### Preview Locally

Since this is a static site, you can open `index.html` directly in a browser after building the CSS, or serve the folder with any static file server, for example:

```bash
npx serve .
```

## Deployment

The site is configured for deployment on Netlify via `netlify.toml`:

- **Build command:** `npm run build`
- **Publish directory:** `.` (project root)
- Assets in the `/assets` folder are served with long-term caching (`Cache-Control: public, max-age=31536000, immutable`) for optimal performance.

Pushing to the `main` branch will trigger a new build and deploy if connected to Netlify.

## License

© Anidaso Loans Ltd. All rights reserved.
