# Portfolio (React + Vite + TypeScript)

A single-page portfolio website built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion.

## Prerequisites
- Node.js 18+ (you have Node 23 which is fine)
- npm (bundled with Node)

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
   - Open the printed Local URL (e.g., http://localhost:5173)
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview the production build:
   ```bash
   npm run preview
   ```

## Customize Your Portfolio
- Personal details and links: `src/data/personal.json`
  - For avatar, place the image in `public/` (e.g. `public/avatar.jpg`) and set `"avatar": "/avatar.jpg"`.
- Experience: `src/data/experience.json`
- Education: `src/data/education.json`
- Projects: `src/data/projects.json`
- Certifications: `src/data/certifications.json`

## Styling
- Tailwind config: `tailwind.config.js` (class-based dark mode enabled)
- Base styles/utilities: `src/index.css` (glass effect, gradient accents, animations)
- Font: Space Grotesk (configured in `index.html`)

## Features
- Single-page layout with scroll navigation and scrollspy
- Dark theme with glossy glass UI and accent gradients
- JSON-driven sections (experience, education, projects, certifications)
- Subtle animations and staggered reveals (Framer Motion)
- Hover elevation effects on cards; back-to-top button

## Troubleshooting
- If your editor shows "Unknown at rule @tailwind":
  - Ensure `postcss.config.js` includes Tailwind and Autoprefixer
  - Set VS Code `files.associations` for `*.css` to `postcss` and ignore unknown at-rules in CSS/SCSS settings

## License
This project is for personal portfolio use. Update and reuse as you like.
