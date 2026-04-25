import { ComponentType, PropSchema } from '../types.js';

export interface ThemeComponentData {
  id: string;
  type: ComponentType;
  name: string;
  props: Record<string, unknown>;
  children?: ThemeComponentData[];
  styles?: Record<string, string>;
}

export class ThemeComponent {
  id: string;
  type: ComponentType;
  name: string;
  props: Record<string, unknown>;
  children: ThemeComponent[] = [];
  styles: Record<string, string>;

  constructor(data: ThemeComponentData) {
    this.id = data.id || `comp_${Date.now()}`;
    this.type = data.type;
    this.name = data.name;
    this.props = data.props || {};
    this.children = (data.children || []).map(c => new ThemeComponent(c));
    this.styles = data.styles || {};
  }

  addChild(child: ThemeComponent): void {
    this.children.push(child);
  }

  removeChild(id: string): void {
    this.children = this.children.filter(c => c.id !== id);
  }

  setProp(key: string, value: unknown): void {
    this.props[key] = value;
  }

  setStyle(key: string, value: string): void {
    this.styles[key] = value;
  }

  toJSON(): ThemeComponentData {
    return {
      id: this.id,
      type: this.type,
      name: this.name,
      props: this.props,
      children: this.children.map(c => c.toJSON()),
      styles: this.styles,
    };
  }

  static getSchema(type: ComponentType): PropSchema[] {
    const schemas: Record<ComponentType, PropSchema[]> = {
      header: [
        { name: 'logo', type: 'image', label: 'Logo' },
        { name: 'menu', type: 'richtext', label: 'Navigation Menu' },
        { name: 'sticky', type: 'boolean', label: 'Sticky Header', default: false },
      ],
      footer: [
        { name: 'copyright', type: 'string', label: 'Copyright Text' },
        { name: 'show_social', type: 'boolean', label: 'Show Social Links', default: true },
      ],
      hero: [
        { name: 'title', type: 'string', label: 'Title' },
        { name: 'subtitle', type: 'string', label: 'Subtitle' },
        { name: 'image', type: 'image', label: 'Background Image' },
        { name: 'cta_text', type: 'string', label: 'CTA Button Text' },
        { name: 'cta_link', type: 'string', label: 'CTA Button Link' },
      ],
      'product-grid': [
        { name: 'title', type: 'string', label: 'Section Title' },
        { name: 'products_count', type: 'number', label: 'Number of Products', default: 8 },
        { name: 'columns', type: 'select', label: 'Columns', options: [
          { label: '2', value: '2' },
          { label: '3', value: '3' },
          { label: '4', value: '4' },
        ], default: '4' },
      ],
      'product-card': [
        { name: 'show_rating', type: 'boolean', label: 'Show Rating', default: true },
        { name: 'show_quick_view', type: 'boolean', label: 'Show Quick View', default: true },
      ],
      banner: [
        { name: 'text', type: 'string', label: 'Banner Text' },
        { name: 'link', type: 'string', label: 'Banner Link' },
        { name: 'style', type: 'select', label: 'Style', options: [
          { label: 'Announcement', value: 'announcement' },
          { label: 'Promotion', value: 'promotion' },
        ], default: 'announcement' },
      ],
      cta: [
        { name: 'title', type: 'string', label: 'Title' },
        { name: 'button_text', type: 'string', label: 'Button Text' },
        { name: 'button_link', type: 'string', label: 'Button Link' },
      ],
      testimonial: [
        { name: 'quote', type: 'richtext', label: 'Quote' },
        { name: 'author', type: 'string', label: 'Author Name' },
        { name: 'company', type: 'string', label: 'Company' },
      ],
      faq: [
        { name: 'title', type: 'string', label: 'Title' },
      ],
      custom: [
        { name: 'custom_html', type: 'richtext', label: 'Custom HTML/Liquid' },
      ],
    };

    return schemas[type] || [];
  }
}
