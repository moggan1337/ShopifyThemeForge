import { ThemeComponent, ThemeComponentData } from './component.js';
export declare class Canvas {
    private components;
    addComponent(component: ThemeComponent): void;
    removeComponent(id: string): void;
    getComponents(): ThemeComponent[];
    getComponent(id: string): ThemeComponent | undefined;
    reorderComponents(fromIndex: number, toIndex: number): void;
    toString(): string;
    toJSON(): {
        components: ThemeComponentData[];
    };
    static fromJSON(data: {
        components: ThemeComponentData[];
    }): Canvas;
}
