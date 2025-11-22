# Shankar Jha - Personal Website

A stunning, modern personal website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, minimal design with bold creative elements
- 📱 Fully responsive across all devices
- ⚡ Fast and optimized with Next.js 14
- 🎭 Smooth animations and transitions
- 🖼️ Image gallery with lightbox functionality
- 📝 Blog section (placeholder structure)
- 🔗 Social media integration
- ✨ Unique design elements and geometric patterns

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy!

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── AboutSection.tsx
│   ├── BlogSection.tsx
│   ├── ImageGallery.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── SocialLinks.tsx
├── lib/
│   └── utils.ts         # Utility functions
└── public/
    └── images/          # Image assets
```

## Customization

- Replace placeholder images in `components/ImageGallery.tsx`
- Update personal information in `components/AboutSection.tsx`
- Add blog posts in the blog section
- Customize colors in `tailwind.config.ts` and `app/globals.css`

## License

MIT
