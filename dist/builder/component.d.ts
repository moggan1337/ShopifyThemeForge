import { ComponentType, PropSchema } from '../types.js';
export interface ThemeComponentData {
    id: string;
    type: ComponentType;
    name: string;
    props: Record<string, unknown>;
    children?: ThemeComponentData[];
    styles?: Record<string, string>;
}
export declare class ThemeComponent {
    id: string;
    type: ComponentType;
    name: string;
    props: Record<string, unknown>;
    children: ThemeComponent[];
    styles: Record<string, string>;
    constructor(data: ThemeComponentData);
    addChild(child: ThemeComponent): void;
    removeChild(id: string): void;
    setProp(key: string, value: unknown): void;
    setStyle(key: string, value: string): void;
    toJSON(): ThemeComponentData;
    static getSchema(type: ComponentType): PropSchema[];
}
