#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { Forge } from './forge.js';
import { LiquidExporter } from './export/liquid-exporter.js';

const program = new Command();

program
  .name('theme-forge')
  .description('Visual Shopify theme builder with drag-drop and Liquid export')
  .version('1.0.0');

program
  .command('init')
  .description('Initialize a new theme project')
  .argument('<name>', 'Theme name')
  .action(async (name: string) => {
    console.log(chalk.bold(`\n🚀 Initializing theme: ${name}\n`));
    const forge = new Forge();
    await forge.initTheme(name);
    console.log(chalk.green(`✓ Theme ${name} initialized!`));
  });

program
  .command('add')
  .description('Add a component to the canvas')
  .argument('<type>', 'Component type (header, footer, hero, product-grid, etc.)')
  .action(async (type: string) => {
    const forge = new Forge();
    await forge.addComponent(type);
  });

program
  .command('export')
  .description('Export theme to Liquid templates')
  .option('-o, --output <dir>', 'Output directory', './theme')
  .action(async (options: { output: string }) => {
    console.log(chalk.bold('\n📦 Exporting to Liquid templates...\n'));
    const exporter = new LiquidExporter();
    await exporter.export(options.output);
    console.log(chalk.green(`✓ Theme exported to ${options.output}`));
  });

program
  .command('preview')
  .description('Preview theme as HTML')
  .action(async () => {
    console.log(chalk.bold('\n👁️  Starting preview server...\n'));
    const forge = new Forge();
    await forge.preview();
  });

program.parse();
