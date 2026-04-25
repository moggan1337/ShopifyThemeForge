export declare class LiquidExporter {
    export(outputDir: string): Promise<void>;
    private exportLayout;
    private exportSection;
    private generateSectionLiquid;
    private generateSectionContent;
    private exportSnippets;
}
