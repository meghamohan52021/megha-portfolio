# Megha Portfolio

A soft, aesthetic and professional project portfolio built with React + Vite.

## Features

- Recruiter-friendly one-page layout
- Soft summer / anime journal inspired design
- Responsive design for desktop and mobile
- Smooth transitions using Framer Motion
- Project cards generated from one data file
- Easy GitHub Pages deployment

## How to run locally

```bash
npm install
npm run dev
```

Then open the local URL shown in your terminal.

## How to add a new project

Open:

```text
src/data/projects.js
```

Add another project object:

```js
{
  title: 'Project Name',
  subtitle: 'Short project type',
  description: 'One or two sentence explanation.',
  tech: ['React', 'Node.js', 'AWS'],
  github: 'https://github.com/your-username/project-name',
  demo: 'https://your-demo-link.com',
  featured: true,
}
```

## How to edit skills

Open:

```text
src/data/skills.js
```

Edit the skill groups and tags.

## How to add your resume

Put your resume PDF inside the `public` folder and rename it:

```text
resume.pdf
```

The Resume button will then work automatically.

## GitHub Pages deployment

1. Create a GitHub repository.
2. Push this project to the repository.
3. Install packages:

```bash
npm install
```

4. Open `package.json` and add this line near the top:

```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME",
```

5. Deploy:

```bash
npm run build
npm run deploy
```

6. In GitHub, go to **Settings > Pages** and make sure the deployed branch is selected.

## Important edits before publishing

- Replace the LinkedIn link in `Navbar.jsx` and `Contact.jsx`
- Replace GitHub links if needed
- Add your real resume PDF in `public/resume.pdf`
- Add your best projects in `src/data/projects.js`
