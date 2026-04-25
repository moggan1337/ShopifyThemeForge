import { Canvas } from './builder/canvas.js';
export declare class Forge {
    private canvas;
    private themePath;
    constructor();
    initTheme(name: string): Promise<void>;
    addComponent(typeStr: string): Promise<void>;
    preview(): Promise<void>;
    getCanvas(): Canvas;
    getThemePath(): string;
}
