import { ThemeComponent } from './component.js';
export class Canvas {
    components = [];
    addComponent(component) {
        this.components.push(component);
    }
    removeComponent(id) {
        this.components = this.components.filter(c => c.id !== id);
    }
    getComponents() {
        return this.components;
    }
    getComponent(id) {
        return this.components.find(c => c.id === id);
    }
    reorderComponents(fromIndex, toIndex) {
        const [component] = this.components.splice(fromIndex, 1);
        this.components.splice(toIndex, 0, component);
    }
    toString() {
        if (this.components.length === 0) {
            return '  (empty canvas)\n';
        }
        return this.components.map((comp, i) => {
            return `  ${i + 1}. ${comp.name} (${comp.type})`;
        }).join('\n') + '\n';
    }
    toJSON() {
        return {
            components: this.components.map(c => c.toJSON()),
        };
    }
    static fromJSON(data) {
        const canvas = new Canvas();
        for (const comp of data.components) {
            canvas.addComponent(new ThemeComponent(comp));
        }
        return canvas;
    }
}
//# sourceMappingURL=canvas.js.map