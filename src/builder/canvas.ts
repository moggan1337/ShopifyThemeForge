import { ThemeComponent, ThemeComponentData } from './component.js';

export class Canvas {
  private components: ThemeComponent[] = [];

  addComponent(component: ThemeComponent): void {
    this.components.push(component);
  }

  removeComponent(id: string): void {
    this.components = this.components.filter(c => c.id !== id);
  }

  getComponents(): ThemeComponent[] {
    return this.components;
  }

  getComponent(id: string): ThemeComponent | undefined {
    return this.components.find(c => c.id === id);
  }

  reorderComponents(fromIndex: number, toIndex: number): void {
    const [component] = this.components.splice(fromIndex, 1);
    this.components.splice(toIndex, 0, component);
  }

  toString(): string {
    if (this.components.length === 0) {
      return '  (empty canvas)\n';
    }

    return this.components.map((comp, i) => {
      return `  ${i + 1}. ${comp.name} (${comp.type})`;
    }).join('\n') + '\n';
  }

  toJSON(): { components: ThemeComponentData[] } {
    return {
      components: this.components.map(c => c.toJSON()),
    };
  }

  static fromJSON(data: { components: ThemeComponentData[] }): Canvas {
    const canvas = new Canvas();
    for (const comp of data.components) {
      canvas.addComponent(new ThemeComponent(comp));
    }
    return canvas;
  }
}
