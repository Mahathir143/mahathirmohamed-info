# Mahathir Mohamed — Portfolio

A modular React + Vite portfolio. Plain CSS (no Tailwind) with CSS variables
driving a dark / light / system theme. No paid services required anywhere below.

## Project structure

```
portfolio-app/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                 entry point — rarely touched
    ├── App.jsx                  composes layout + sections
    ├── index.css                global styles + theme CSS variables
    │
    ├── assets/                  images (swap in your own photo — see assets/README.md)
    │   └── avatar-placeholder.svg
    │
    ├── context/
    │   └── ThemeContext.jsx     dark / light / system theme provider
    │
    ├── hooks/
    │   ├── useTheme is exported from ThemeContext.jsx
    │   ├── useTypewriter.js     powers the animated role title in the hero
    │   └── useReveal.js         scroll-in-view fade animation
    │
    ├── data/
    │   └── portfolioData.js     ← ALL your content lives here (name, roles, projects, etc.)
    │
    ├── layout/
    │   ├── Header.jsx / .css    nav bar + theme toggle
    │   └── Footer.jsx / .css
    │
    └── components/
        ├── Hero.jsx / .css         name, photo, animated role title
        ├── StatsStrip.jsx / .css
        ├── About.jsx / .css
        ├── Skills.jsx / .css
        ├── Experience.jsx / .css   "route" timeline
        ├── Projects.jsx / .css
        ├── Education.jsx / .css
        ├── Contact.jsx / .css
        ├── ThemeToggle.jsx / .css
        └── shared/
            ├── SectionLabel.jsx / .css
            ├── Tag.jsx / .css
            └── Reveal.jsx
```

Every component pairs a `.jsx` file with its own `.css` file — styling for
one component never leaks into another.

## Edit your content

Open `src/data/portfolioData.js`. That's the only file you need to touch to
update your name, roles, stats, skills, experience, projects, or education.

### Resume download, GitHub, LinkedIn, Email

- **Resume**: your actual resume is already included as `public/resume.pdf`.
  The "Download resume" button in the Contact section, and the header's
  download link, both point at `/resume.pdf`. Replace that file with an
  updated export any time — the link doesn't need to change.
- **GitHub / LinkedIn**: open `src/data/portfolioData.js` and edit the
  `socials` object:
  ```js
  export const socials = {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
  };
  ```
- **Email**: comes from `profile.email` in the same file.

All four (Email, GitHub, LinkedIn, Download resume) render via
`src/components/shared/SocialLinks.jsx` — as compact icons in the header,
and as labelled buttons in the Contact section. Add a new one (e.g.
Twitter/X) by adding an entry to the `iconLinks` array in that file.

To change the typing animation, edit the `roles` array in that file:
```js
roles: [
  ".NET Full Stack Developer",
  ".NET Developer",
  "Web Application Developer",
  "React.js Developer",
  "SQL Server Developer",
  "API Developer",
],
```

To add your photo instead of the placeholder monogram, see `src/assets/README.md`.

## Run it locally

```bash
npm install
npm run dev
```
Opens at `http://localhost:5173`.

## Deploy for free

### Vercel (recommended)
1. Push this folder to a GitHub repo.
2. https://vercel.com → "Add New Project" → import the repo → Deploy.
   Vercel auto-detects Vite.

### Netlify
1. Push to GitHub.
2. https://app.netlify.com → "Add new site" → import the repo.
   Build command: `npm run build` · Publish directory: `dist`

### Netlify (no Git — drag and drop)
```bash
npm run build
```
Drag the resulting `dist` folder onto https://app.netlify.com/drop.

### GitHub Pages
```bash
npm run build
# push the contents of dist/ to a gh-pages branch
```
