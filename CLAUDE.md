# ShopifyThemeForge - Development Guide

## Project Overview

**ShopifyThemeForge** is a visual theme builder for Shopify themes. It provides a CLI interface to create themes, add components via drag-drop concept (CLI-based), and export them as Liquid templates ready for Shopify.

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Runtime** | Node.js 20+, TypeScript 5.6 |
| **CLI** | Commander.js |
| **Package Manager** | npm |

## Project Structure

```
ShopifyThemeForge/
├── src/
│   ├── cli.ts              # CLI entry point
│   ├── index.ts             # Module exports
│   ├── forge.ts             # Main Forge class
│   ├── types.ts             # TypeScript interfaces
│   ├── builder/
│   │   ├── canvas.ts        # Component canvas
│   │   └── component.ts     # Component class
│   └── export/
│       └── liquid-exporter.ts # Liquid template export
├── package.json
├── tsconfig.json
├── CLAUDE.md
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 20+

### Installation

```bash
npm install
npm run build
npm link
```

### Commands

```bash
# Initialize a new theme
theme-forge init my-theme

# Add components
theme-forge add header
theme-forge add hero
theme-forge add product-grid

# Export to Liquid
theme-forge export -o ./my-theme

# Preview canvas
theme-forge preview
```

## Component Types

- `header` - Site header with logo and navigation
- `footer` - Site footer with links and copyright
- `hero` - Large banner with image and CTA
- `product-grid` - Grid displaying multiple products
- `product-card` - Individual product display card
- `banner` - Promotional banner or announcement
- `cta` - Call to action button or section
- `testimonial` - Customer testimonial quote
- `faq` - Frequently asked questions accordion
- `custom` - Custom HTML/Liquid section

## Architecture

### Forge Class

The main orchestrator class that manages the theme building process.

### Canvas Class

Manages the collection of components on the canvas.

### Component Class

Represents individual theme components with props and styles.

### LiquidExporter

Exports the canvas to Shopify Liquid template files.

## LLM Integration

This project uses MiniMax API for AI-powered suggestions:

- **Model**: MiniMax-M2.7
- Could be extended to auto-generate component props and Liquid code
