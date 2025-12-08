# International Business System (IBS) Website

A modern, responsive website for International Business System - Exporters of Fresh Fruits, Vegetables & Rice, established in 1995 in Quetta, Pakistan.

## Features

- **Modern Design**: Clean, professional design with brand colors (Red #D80000, White, and Green accents)
- **Responsive Layout**: Fully responsive design that works on all devices
- **Next.js 14+**: Built with Next.js App Router for optimal performance
- **Tailwind CSS**: Styled with Tailwind CSS for fast development and customization
- **SEO Optimized**: Proper metadata and SEO tags for better search engine visibility

## Pages

1. **Home** (`/`) - Hero section, company intro, key stats, and featured products
2. **About Us** (`/about`) - Company overview, vision, mission, core values, and leadership
3. **Products** (`/products`) - Detailed information about Kinnow, Potatoes, and Rice
4. **Operations** (`/operations`) - Supply chain workflow, infrastructure, and certifications
5. **Contact** (`/contact`) - Contact information and inquiry form

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Color Scheme

- **Primary (Brand Red)**: `#D80000` - Used for CTAs, navigation highlights, and key headings
- **Secondary (White)**: `#FFFFFF` - Background color
- **Text (Charcoal Grey)**: `#333333` - Main text color
- **Accent (Fresh Green)**: `#2E7D32` - Used for success messages and agriculture-related icons

## Project Structure

```
├── app/
│   ├── about/          # About Us page
│   ├── contact/        # Contact page
│   ├── operations/     # Operations page
│   ├── products/       # Products page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Footer component
└── public/             # Static assets (add images here)
```

## Customization

### Adding Images

Place product images and other assets in the `public/` directory and reference them using Next.js Image component:

```tsx
import Image from "next/image";
<Image src="/your-image.jpg" alt="Description" width={800} height={600} />
```

### Google Maps Integration

To add Google Maps to the contact page:

1. Get a Google Maps API key
2. Install `@react-google-maps/api` package
3. Update the contact page with the map component

## Future Enhancements

- Add Russian language support for Central Asian markets
- Integrate Google Maps API for location display
- Add image gallery for products
- Implement blog/news section
- Add testimonials section
- Integrate contact form with email service

## License

© 2025 International Business System. All rights reserved.
