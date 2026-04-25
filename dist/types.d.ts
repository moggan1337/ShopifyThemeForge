export interface ThemeConfig {
    name: string;
    version: string;
    author: string;
    components: Component[];
}
export interface Component {
    id: string;
    type: ComponentType;
    name: string;
    props: Record<string, unknown>;
    children?: Component[];
    styles?: Record<string, string>;
}
export type ComponentType = 'header' | 'footer' | 'hero' | 'product-grid' | 'product-card' | 'banner' | 'cta' | 'testimonial' | 'faq' | 'custom';
export interface ComponentDefinition {
    type: ComponentType;
    name: string;
    description: string;
    defaultProps: Record<string, unknown>;
    schema: PropSchema[];
}
export interface PropSchema {
    name: string;
    type: 'string' | 'number' | 'boolean' | 'select' | 'image' | 'richtext';
    label: string;
    default?: unknown;
    options?: {
        label: string;
        value: string;
    }[];
}
export interface LiquidTemplate {
    name: string;
    content: string;
    type: 'section' | 'snippet' | 'layout' | 'asset';
}
