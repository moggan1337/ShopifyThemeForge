# ShopifyThemeForge

<p align="center">
  <img src="https://img.shields.io/badge/Shopify-Themes-95BF47?style=for-the-badge&logo=shopify&logoColor=white" alt="Shopify">
  <img src="https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/AI-Powered-FF6B6B?style=for-the-badge&logo=openai&logoColor=white" alt="AI">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
</p>

> 🎨 **Visual Theme Builder** — Drag-and-drop Shopify theme editor with AI-powered layout suggestions, live preview, and one-click export to production-ready Liquid code.

## About

ShopifyThemeForge is a modern visual theme builder that makes Shopify theme development accessible to everyone. Whether you're a designer who wants to prototype quickly or a developer who wants to speed up theme creation, ThemeForge provides an intuitive drag-and-drop interface to build beautiful Shopify themes without writing Liquid code manually. It exports production-ready Liquid code with AI-powered layout suggestions and direct Shopify sync.

## ✨ Features

### Visual Builder
- 🎯 **Drag-and-Drop Interface** — Intuitive section and element placement
- 📐 **12-Column Grid System** — Flexible, responsive layout grid
- 🎨 **Style Editor** — Visual editors for colors, typography, and spacing
- 📱 **Responsive Preview** — Real-time desktop, tablet, and mobile views
- 🔄 **Undo/Redo** — Full history with keyboard shortcuts (Cmd/Ctrl+Z)
- 📝 **Template Library** — Start from professionally designed templates

### AI Features
- 🤖 **Layout Suggestions** — AI recommends optimal layouts based on content type
- 🎨 **Color Palettes** — Auto-generated harmonious color schemes
- ✍️ **Copywriting** — AI generates product descriptions, headings, CTAs
- 🖼️ **Image Suggestions** — AI suggests relevant stock images from Unsplash
- 📊 **Conversion Tips** — AI highlights opportunities to improve conversions

### Export & Integration
- 📤 **Liquid Export** — One-click export to production-ready Liquid templates
- 📁 **ZIP Download** — Download as Shopify-installable theme .zip file
- 🔗 **GitHub Sync** — Push directly to GitHub repositories
- 📦 **Theme Kit** — Integration with Shopify Theme Kit for CLI deployment
- 🔄 **Hot Reload** — Local development with live updates
- 🎨 **CSS Export** — Export custom CSS for further customization

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           ShopifyThemeForge                             │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │                      React Frontend                                │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────────────┐  │  │
│  │  │  Canvas  │  │ Toolbar  │  │Inspector │  │    Layers      │  │  │
│  │  │  Editor  │  │  Panel   │  │  Panel   │  │    Panel       │  │  │
│  │  │          │  │          │  │          │  │                │  │  │
│  │  │ Drop Zone│  │Component │  │ Style    │  │   Component    │  │  │
│  │  │ + Grid   │  │ Library  │  │ Props    │  │   Tree         │  │  │
│  │  └──────────┘  └──────────┘  └──────────┘  └────────────────┘  │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                    │                                     │
│  ┌─────────────────────────────────┴─────────────────────────────────┐  │
│  │                   State Management (Zustand)                      │  │
│  │  • Page Structure & Component Tree                                │  │
│  │  • Styling State & Theme Variables                                │  │
│  │  • History (Undo/Redo Stack)                                     │  │
│  │  • Selection State                                                │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                    │                                     │
│  ┌─────────────────────────────────┴─────────────────────────────────┐  │
│  │                        Service Layer                              │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐  │  │
│  │  │   Theme     │  │   Liquid    │  │       AI Service        │  │  │
│  │  │   Exporter │  │   Compiler  │  │ (Layout, Colors, Copy)  │  │  │
│  │  └─────────────┘  └─────────────┘  └─────────────────────────┘  │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐  │  │
│  │  │   GitHub    │  │   Shopify   │  │      Template          │  │  │
│  │  │   Service   │  │   Deploy    │  │      Library           │  │  │
│  │  └─────────────┘  └─────────────┘  └─────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                    │                                     │
│  ┌─────────────────────────────────┴─────────────────────────────────┐  │
│  │                         Output Layer                              │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────────────┐  │  │
│  │  │  Liquid  │  │  Theme   │  │  GitHub  │  │   Shopify      │  │  │
│  │  │   Code   │  │   ZIP    │  │   Push   │  │    Deploy      │  │  │
│  │  └──────────┘  └──────────┘  └──────────┘  └────────────────┘  │  │
│  └───────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/moggan1337/ShopifyThemeForge.git
cd ShopifyThemeForge

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start the development server
npm run dev

# Open http://localhost:3000 in your browser
```

## 🚀 Quick Start

```bash
# 1. Open http://localhost:3000 in your browser

# 2. Start a new theme or select a template:
#    - Minimal Storefront
#    - Fashion Boutique
#    - Electronics Store
#    - Furniture Showroom
#    - Blank Canvas

# 3. Drag sections from the left panel onto the canvas

# 4. Customize styles in the Inspector panel

# 5. Export when done:
npm run export:zip          # Download as ZIP
npm run export:github       # Push to GitHub
npm run deploy:shopify       # Deploy directly to Shopify
```

## 🎯 Usage Guide

### Adding Sections

Drag these section types from the left panel onto the canvas:

| Section | Description |
|---------|-------------|
| **Header** | Logo, navigation, search, cart icon |
| **Hero Banner** | Large image/video with headline and CTA |
| **Product Grid** | Grid of product cards |
| **Featured Collection** | Curated product collection |
| **Testimonials** | Customer reviews carousel |
| **FAQ** | Accordion-style questions |
| **Newsletter** | Email signup form |
| **Footer** | Links, social icons, copyright |
| **Custom HTML** | Embed custom HTML/Liquid |

### Editing Styles

Select any element and use the Inspector panel to edit:

- **Typography** — Font family, size, weight, line-height, letter-spacing
- **Colors** — Background, text, borders, shadows
- **Spacing** — Margin, padding, gap
- **Effects** — Box shadows, border radius, transitions
- **Layout** — Width, max-width, alignment, position

### AI Layout Suggestions

```bash
# Select a section and click "AI Suggestions"

# The AI will analyze your content and suggest:
# - Optimal image sizes and aspect ratios
# - Color contrast improvements for accessibility
# - Typography hierarchy improvements
# - Conversion-optimized section ordering
# - A/B testing recommendations
```

## 📁 Project Structure

```
shopify-theme-forge/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Main editor page
│   │   ├── layout.tsx            # Root layout
│   │   └── globals.css           # Global styles
│   ├── components/
│   │   ├── canvas/
│   │   │   ├── Canvas.tsx        # Main canvas editor
│   │   │   ├── Grid.tsx          # 12-column grid overlay
│   │   │   ├── SelectionBox.tsx  # Selection handles
│   │   │   └── DropZone.tsx     # Drop target indicator
│   │   ├── panels/
│   │   │   ├── Toolbar.tsx      # Top toolbar
│   │   │   ├── Inspector.tsx     # Style editor panel
│   │   │   ├── Layers.tsx        # Component tree view
│   │   │   └── Components.tsx    # Draggable component library
│   │   ├── elements/
│   │   │   ├── Section.tsx      # Section wrapper
│   │   │   ├── Block.tsx        # Content block
│   │   │   └── ...
│   │   └── shared/
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       └── ColorPicker.tsx
│   ├── lib/
│   │   ├── liquid/
│   │   │   ├── compiler.ts       # Liquid code generation
│   │   │   ├── templates/        # Liquid template snippets
│   │   │   └── schema.ts         # Section schema builder
│   │   ├── ai/
│   │   │   ├── suggestions.ts    # AI layout suggestions
│   │   │   ├── colors.ts         # AI color palette generation
│   │   │   └── copy.ts           # AI copywriting
│   │   └── export/
│   │       ├── zip.ts            # ZIP file generation
│   │       ├── github.ts         # GitHub integration
│   │       └── shopify.ts        # Shopify deploy
│   ├── stores/
│   │   ├── editorStore.ts        # Zustand store for editor state
│   │   └── historyStore.ts       # Undo/redo history
│   └── types/
│       ├── editor.ts             # Editor type definitions
│       └── theme.ts              # Theme/component types
├── public/
│   └── templates/                # Starter templates
│       ├── minimal.json
│       ├── fashion.json
│       └── electronics.json
├── styles/
│   └── globals.css
└── package.json
```

## 🎨 Theme Templates

### Minimal Storefront
- Clean, product-focused design
- Maximum whitespace utilization
- Quick add-to-cart buttons
- Instagram feed integration
- Perfect for: Small brands, artisans, boutique stores

### Fashion Boutique
- Editorial magazine-style layout
- Large hero photography
- Lookbook sections
- Size guide integration
- Perfect for: Clothing, accessories, luxury brands

### Electronics Store
- Grid-heavy layout for product comparison
- Spec tables and comparison charts
- Quick spec badges
- Warranty information prominently displayed
- Perfect for: Consumer electronics, gadgets, tech accessories

### Furniture Showroom
- Large imagery showcase
- Room scene layouts
- AR preview integration
- Delivery estimator
- Perfect for: Furniture, home decor, interior design

## 📤 Export Options

### Download as ZIP

```bash
# Export as Shopify-installable theme
npm run export:zip

# Download location: exports/theme-{timestamp}.zip
```

**ZIP Structure:**
```
theme/
├── layout/
│   ├── theme.liquid
│   └── password.liquid
├── templates/
│   ├── index.json
│   ├── product.json
│   └── collection.json
├── sections/
│   ├── header.liquid
│   ├── featured-collection.liquid
│   └── ...
├── snippets/
│   ├── product-card.liquid
│   └── ...
├── assets/
│   ├── base.css
│   └── theme.js
└── config/
    └── settings_schema.json
```

### Push to GitHub

```bash
# Configure GitHub credentials
export GITHUB_TOKEN=ghp_xxxxx

# Push to repository
npm run export:github -- --repo owner/repo --branch main

# Or use interactive mode
npm run export:github
```

### Deploy to Shopify

```bash
# Configure Shopify store
export SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
export SHOPIFY_ACCESS_TOKEN=shpat_xxxxx

# Deploy directly to Shopify
npm run deploy:shopify

# Preview before deploying
npm run deploy:shopify -- --preview
```

## 🤖 AI Features

### Layout Intelligence

```typescript
import { ai } from '@/lib/ai/suggestions';

// Analyze content and suggest optimal layout
const suggestions = await ai.analyzeLayout({
  content: ['hero-image', 'product-grid', 'testimonials'],
  industry: 'fashion',
  conversionGoal: 'purchase',
  targetAudience: 'women 25-35'
});

// Returns:
// {
//   sections: [
//     { type: 'hero', order: 1, imageSize: '1920x800' },
//     { type: 'product-grid', order: 2, columns: 4 },
//     { type: 'testimonials', order: 3, style: 'carousel' }
//   ],
//   recommendations: [
//     'Add trust badges below hero',
//     'Use sticky add-to-cart on mobile'
//   ]
// }
```

### Color Harmony

```typescript
import { ai } from '@/lib/ai/colors';

// Generate harmonious color palette
const palette = await ai.generatePalette({
  baseColor: '#3B82F6',
  mood: 'professional, trustworthy, modern',
  industry: 'fashion'
});

// Returns:
// {
//   primary: '#3B82F6',
//   secondary: '#1E40AF',
//   accent: '#F59E0B',
//   background: '#FFFFFF',
//   text: '#1F2937',
//   muted: '#9CA3AF'
// }
```

### Copywriting

```typescript
import { ai } from '@/lib/ai/copy';

// Generate product page copy
const copy = await ai.generateCopy({
  type: 'product-hero',
  product: {
    name: 'Wireless Noise-Canceling Headphones',
    features: ['ANC', '30hr battery', 'premium audio'],
    price: 299
  },
  tone: 'bold, innovative, premium'
});

// Returns:
// {
//   headline: 'Experience Sound Like Never Before',
//   subheadline: 'Industry-leading noise cancellation meets 30 hours of freedom',
//   cta: 'Shop Now',
//   description: '...'
// }
```

## 🔧 Configuration

### Environment Variables

```env
# AI Service (OpenAI or Anthropic)
OPENAI_API_KEY=sk-xxxxx
# or
ANTHROPIC_API_KEY=sk-ant-xxxxx
# or use MiniMax
MINIMAX_API_KEY=sk-xxxxx

# Shopify (optional, for direct deploy)
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_ACCESS_TOKEN=shpat_xxxxx

# GitHub (optional, for Git export)
GITHUB_TOKEN=ghp_xxxxx

# Theme Kit (optional, for CLI deploy)
THEME_KIT_PASSWORD=xxxxx
THEME_KIT_THEME_ID=xxxxx
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e

# Visual regression tests
npm run test:visual

# Run specific test
npm test -- components/canvas/Canvas.test.tsx
```

## 📚 Documentation

- [Getting Started](docs/getting-started.md)
- [Component Library](docs/components.md)
- [Liquid Reference](docs/liquid.md)
- [AI Features](docs/ai-features.md)
- [Deployment](docs/deployment.md)
- [API Reference](docs/api.md)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/YOUR_USERNAME/ShopifyThemeForge.git`
3. **Create** a feature branch: `git checkout -b feature/amazing`
4. **Install** dependencies: `npm install`
5. **Start** dev server: `npm run dev`
6. **Make** your changes
7. **Test** your changes: `npm test`
8. **Commit** and push
9. **Open** a Pull Request

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

Copyright (c) 2024 moggan1337

---

<p align="center">
  Built with ❤️ for Shopify theme developers
</p>
