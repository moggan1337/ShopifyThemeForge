# ShopifyThemeForge

<p align="center">
  <img src="https://img.shields.io/badge/Shopify-Themes-95BF47?style=for-the-badge&logo=shopify&logoColor=white" alt="Shopify">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
</p>

> 🎨 **Visual Theme Builder** - Drag-and-drop Shopify theme editor with AI-powered layout suggestions, live preview, and one-click export to Liquid code.

## ✨ Features

### Visual Builder
- 🎯 **Drag-and-Drop** - Intuitive section/element placement
- 📐 **Grid System** - Flexible 12-column responsive grid
- 🎨 **Style Editor** - Colors, typography, spacing visual editors
- 📱 **Responsive Preview** - Desktop, tablet, mobile preview
- 🔄 **Undo/Redo** - Full history with keyboard shortcuts

### AI Features
- 🤖 **Layout Suggestions** - AI recommends layouts based on content type
- 🎨 **Color Palettes** - Auto-generated harmonious palettes
- ✍️ **Copywriting** - AI generates product descriptions, headings
- 🖼️ **Image Suggestions** - AI suggests stock images from Unsplash
- 📊 **Conversion Tips** - AI highlights improvement opportunities

### Export & Integration
- 📤 **Liquid Export** - One-click export to production-ready Liquid
- 📁 **Zip Download** - Download as installable theme .zip
- 🔗 **Git Sync** - Push directly to GitHub repository
- 📦 **Theme Kit** - Integration with Shopify Theme Kit
- 🔄 **Hot Reload** - Local development with live updates

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      ShopifyThemeForge                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                    React Frontend                         │   │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────┐ │   │
│  │  │  Canvas  │ │ Toolbar  │ │ Inspector│ │   Layers     │ │   │
│  │  │  Editor  │ │  Panel   │ │  Panel   │ │   Panel      │ │   │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────────┘ │   │
│  └──────────────────────────────────────────────────────────┘   │
│                             │                                    │
│  ┌──────────────────────────┴──────────────────────────────────┐ │
│  │                   State Management (Zustand)                 │ │
│  │  - Page Structure                                            │ │
│  │  - Component Tree                                            │ │
│  │  - Styling State                                             │ │
│  │  - History (Undo/Redo)                                       │ │
│  └──────────────────────────────────────────────────────────────┘ │
│                             │                                    │
│  ┌──────────────────────────┴──────────────────────────────────┐ │
│  │                    Service Layer                             │ │
│  │  ┌────────────┐ ┌────────────┐ ┌────────────────────────┐ │ │
│  │  │ Theme      │ │  Liquid    │ │   AI Service            │ │ │
│  │  │ Exporter   │ │  Compiler  │ │   (Layout, Colors)      │ │ │
│  │  └────────────┘ └────────────┘ └────────────────────────┘ │ │
│  └──────────────────────────────────────────────────────────────┘ │
│                             │                                    │
│  ┌──────────────────────────┴──────────────────────────────────┐ │
│  │                    Output Layer                               │ │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────────┐ │ │
│  │  │  Liquid  │ │  Theme   │ │  GitHub  │ │  Shopify Store   │ │ │
│  │  │   Code   │ │   Zip    │ │  Push    │ │   Deploy         │ │ │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────────────┘ │ │
│  └──────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
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
```

## 🚀 Quick Start

```bash
# 1. Open http://localhost:3000 in your browser

# 2. Start a new theme or use a template
npm run create-theme

# 3. Select template:
#    - Minimal Storefront
#    - Fashion Boutique
#    - Electronics Store
#    - Furniture Showroom
#    - Blank Canvas

# 4. Start building!
```

## 🎯 Usage Guide

### Adding Sections

```bash
# Drag sections from the left panel:
# - Header
# - Hero Banner
# - Product Grid
# - Featured Collection
# - Testimonials
# - Footer
# - Custom HTML
```

### Editing Styles

```bash
# Select any element and edit in the Inspector panel:
# - Typography (font, size, weight, line-height)
# - Colors (background, text, borders)
# - Spacing (margin, padding)
# - Effects (shadows, transitions)
# - Layout (width, alignment, position)
```

### AI Layout Suggestions

```bash
# Select a section and click "AI Suggestions"
# The AI will suggest:
# - Optimal image sizes
# - Color contrast improvements
# - Typography hierarchy
# - Conversion-optimized layouts
```

## 📁 Project Structure

```
shopify-theme-forge/
├── src/
│   ├── app/                    # Next.js app
│   │   ├── page.tsx           # Main editor page
│   │   └── ...
│   ├── components/
│   │   ├── canvas/             # Main canvas editor
│   │   │   ├── Canvas.tsx
│   │   │   ├── Grid.tsx
│   │   │   └── SelectionBox.tsx
│   │   ├── panels/             # Side panels
│   │   │   ├── Toolbar.tsx
│   │   │   ├── Inspector.tsx
│   │   │   ├── Layers.tsx
│   │   │   └── Components.tsx
│   │   ├── elements/           # Draggable elements
│   │   │   ├── Section.tsx
│   │   │   ├── Block.tsx
│   │   │   └── ...
│   │   └── shared/             # Shared components
│   ├── lib/
│   │   ├── liquid/             # Liquid code generation
│   │   ├── ai/                 # AI service integration
│   │   └── export/             # Export utilities
│   ├── stores/
│   │   └── editorStore.ts     # Zustand store
│   └── types/
│       └── index.ts           # TypeScript types
├── public/
│   └── templates/             # Starter templates
└── styles/
    └── globals.css
```

## 🎨 Theme Templates

### Minimal Storefront
- Clean, product-focused design
- Maximum whitespace
- Quick add-to-cart
- Instagram feed integration

### Fashion Boutique
- Editorial layout
- Lookbook style
- Model photography emphasis
- Size guide integration

### Electronics Store
- Grid-heavy layout
- Spec comparison tables
- Quick specs display
- Warranty badges

### Furniture Showroom
- Large imagery
- Room scene layouts
- AR preview integration
- Delivery estimator

## 📤 Export Options

### Download as ZIP

```bash
# Export as Shopify-installable theme
npm run export:zip

# Download location: exports/theme-{timestamp}.zip
```

### Push to GitHub

```bash
# Configure GitHub in settings
npm run export:github -- --repo owner/repo --branch main

# Or use interactive mode
npm run export:github
```

### Deploy to Shopify

```bash
# Connect your store in settings
npm run deploy:shopify -- --store your-store.myshopify.com

# Deploys directly to Shopify theme editor
```

## 🤖 AI Features

### Layout Intelligence

```typescript
// AI analyzes your content and suggests optimal layouts
const suggestions = await ai.analyzeLayout({
  content: ['hero-image', 'product-grid', 'testimonials'],
  industry: 'fashion',
  conversionGoal: 'purchase'
});
// Returns optimized section order and spacing
```

### Color Harmony

```typescript
// Generate harmonious color palettes
const palette = await ai.generatePalette({
  baseColor: '#3B82F6',
  mood: 'professional, trustworthy'
});
// Returns complete theme color scheme
```

### Copywriting

```typescript
// Generate product descriptions, headlines, CTAs
const copy = await ai.generateCopy({
  type: 'product-hero',
  product: 'Wireless Headphones',
  tone: 'bold, innovative'
});
```

## 🔧 Configuration

### Environment Variables

```env
# AI Service (OpenAI or Anthropic)
OPENAI_API_KEY=sk-xxxxx
# or
ANTHROPIC_API_KEY=sk-ant-xxxxx

# Shopify (optional, for direct deploy)
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_ACCESS_TOKEN=shpat_xxxxx

# GitHub (optional, for Git export)
GITHUB_TOKEN=ghp_xxxxx
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
```

## 📚 Documentation

- [Getting Started](docs/getting-started.md)
- [Component Library](docs/components.md)
- [Liquid Reference](docs/liquid.md)
- [AI Features](docs/ai-features.md)
- [Deployment](docs/deployment.md)
- [API Reference](docs/api.md)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing`)
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

<p align="center">
  Built with ❤️ for Shopify theme developers
</p>
