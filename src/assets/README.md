# Assets

`avatar-placeholder.svg` is a stand-in monogram so the hero section has
something to render. To use your own photo:

1. Drop your photo into this folder, e.g. `profile.jpg`.
2. In `src/components/Hero.jsx`, change:
   ```js
   import avatar from "../assets/avatar-placeholder.svg";
   ```
   to:
   ```js
   import avatar from "../assets/profile.jpg";
   ```
3. Save — Vite picks it up instantly in dev mode.

A square image (at least 480×480px) works best since it's cropped to a
square in the hero.
