# nexus-app

A modern React starter with responsive layout, dark mode, protected routes, code splitting, and reusable components.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 8** (build tool + dev server)
- **Tailwind CSS v4** (styling)
- **React Router v7** (routing + code splitting)
- **Zustand** (state management with localStorage persistence)
- **React Hook Form + Zod** (form validation)
- **react-helmet-async** (SEO meta tags)

## Features

- Responsive layout (mobile, tablet, desktop)
- Dark mode with localStorage persistence
- Hamburger mobile menu with backdrop overlay
- Code-split lazy-loaded pages (`React.lazy` + `Suspense`)
- Protected route with demo authentication
- Todo/Task management (add, edit, delete, complete)
- Contact form with Zod validation
- 404 page for unmatched routes
- Keyboard-accessible focus states on all interactive elements

## Getting Started

### Prerequisites

- Node.js 18+
- npm, pnpm, or yarn

### Install & Run

```bash
# Clone the repo
git clone git@github.com:NajibHossain49/nexus-app.git
cd nexus-app

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build

```bash
npm run build
```

Output goes to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `VITE_AUTH_PASSWORD` | `admin` | Password for the demo Dashboard protected route |

## Deploy to Vercel

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Vite — no configuration needed
4. Set environment variable `VITE_AUTH_PASSWORD` in the Vercel dashboard (Settings > Environment Variables)
5. Deploy

Or via CLI:

```bash
npm i -g vercel
vercel
```

## Deploy to Netlify

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [app.netlify.com](https://app.netlify.com) and import the repository
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variable `VITE_AUTH_PASSWORD` in Site settings > Environment variables
6. Deploy

Or add a `netlify.toml` to the project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Project Structure

```
src/
├── components/
│   ├── ui/               # Reusable UI primitives
│   │   ├── Button.tsx     # Button with 4 variants, 3 sizes
│   │   ├── Card.tsx       # Hover-animated card
│   │   ├── PageLoader.tsx # Spinner for lazy-load transitions
│   │   └── SectionTitle.tsx
│   ├── DarkModeToggle.tsx # Sun/moon toggle with localStorage
│   ├── Layout.tsx         # App shell: header, nav, footer
│   ├── ProtectedRoute.tsx # Auth gate for protected pages
│   └── TodoList.tsx       # Full CRUD todo component
├── pages/
│   ├── Home.tsx           # Hero + Features + CTA
│   ├── About.tsx          # Mission/Stack cards
│   ├── Contact.tsx        # Validated contact form
│   ├── Dashboard.tsx      # Stats + Todo management
│   └── NotFound.tsx       # 404 page
├── schemas/
│   └── contactSchema.ts   # Zod validation schema
├── store/
│   └── todoStore.ts       # Zustand store with persistence
├── App.tsx                # Router + lazy-loaded routes
├── App.css                # Supplementary Tailwind styles
├── index.css              # Tailwind import + base resets
└── main.tsx               # App bootstrap
```

## License

MIT
