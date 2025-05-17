import { Component as WebComponent } from 'xinjs';
import { IconSpec, SVGIconMap } from './icon-types';
export declare const defineIcon: (name: string, icon: IconSpec | string) => void;
export declare const svg2DataUrl: (svg: SVGElement, fill?: string, stroke?: string, strokeWidth?: number | string) => string;
export declare const icons: SVGIconMap;
export declare class SvgIcon extends WebComponent {
    icon: string;
    size: number;
    color: string;
    stroke: string;
    strokeWidth: number;
    constructor();
    render(): void;
}
export declare const svgIcon: any;
