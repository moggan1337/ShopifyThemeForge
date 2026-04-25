import { Canvas } from './builder/canvas.js';
import { ThemeComponent } from './builder/component.js';
import { ComponentType } from './types.js';
import chalk from 'chalk';
import fs from 'fs/promises';
import path from 'path';

const COMPONENT_DEFINITIONS: Record<ComponentType, { name: string; description: string }> = {
  header: { name: 'Header', description: 'Site header with logo and navigation' },
  footer: { name: 'Footer', description: 'Site footer with links and copyright' },
  hero: { name: 'Hero Section', description: 'Large banner with image and CTA' },
  'product-grid': { name: 'Product Grid', description: 'Grid displaying multiple products' },
  'product-card': { name: 'Product Card', description: 'Individual product display card' },
  banner: { name: 'Banner', description: 'Promotional banner or announcement' },
  cta: { name: 'Call to Action', description: 'CTA button or section' },
  testimonial: { name: 'Testimonial', description: 'Customer testimonial quote' },
  faq: { name: 'FAQ', description: 'Frequently asked questions accordion' },
  custom: { name: 'Custom', description: 'Custom HTML/Liquid section' },
};

export class Forge {
  private canvas: Canvas;
  private themePath: string;

  constructor() {
    this.canvas = new Canvas();
    this.themePath = './theme';
  }

  async initTheme(name: string): Promise<void> {
    this.themePath = path.join(process.cwd(), name);
    
    const dirs = [
      'sections',
      'snippets',
      'layouts',
      'assets',
      'config',
      'locales',
    ];

    for (const dir of dirs) {
      await fs.mkdir(path.join(this.themePath, dir), { recursive: true });
    }

    const themeJson = {
      name: name,
      version: '1.0.0',
      settings: [],
      sections: [],
      preset: {
        name: 'Default',
        settings: {},
      },
    };

    await fs.writeFile(
      path.join(this.themePath, 'theme.json'),
      JSON.stringify(themeJson, null, 2)
    );

    await fs.writeFile(
      path.join(this.themePath, 'config', 'settings_data.json'),
      JSON.stringify({ current: {} }, null, 2)
    );

    console.log(chalk.green(`✓ Created theme structure at ${this.themePath}`));
  }

  async addComponent(typeStr: string): Promise<void> {
    const type = typeStr as ComponentType;
    
    if (!COMPONENT_DEFINITIONS[type]) {
      console.log(chalk.red(`Unknown component type: ${typeStr}`));
      console.log(chalk.yellow('Available types:'));
      for (const [key, def] of Object.entries(COMPONENT_DEFINITIONS)) {
        console.log(`  ${chalk.cyan(key)} - ${def.description}`);
      }
      return;
    }

    const component = new ThemeComponent({
      id: `comp_${Date.now()}`,
      type,
      name: COMPONENT_DEFINITIONS[type].name,
      props: {},
      styles: {},
    });

    this.canvas.addComponent(component);
    console.log(chalk.green(`✓ Added ${component.name} to canvas`));
  }

  async preview(): Promise<void> {
    console.log(chalk.blue('\n📝 Canvas Preview:\n'));
    console.log(this.canvas.toString());
  }

  getCanvas(): Canvas {
    return this.canvas;
  }

  getThemePath(): string {
    return this.themePath;
  }
}
