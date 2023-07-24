export function scriptTag(src: string, existingSymbolName?: string): Promise<any>;
export function styleSheet(href: string): Promise<void>;
export const bodymovinPlayer: import("xinjs").ElementCreator<HTMLElement>;
export const codeEditor: import("xinjs").ElementCreator<HTMLElement>;
type TrackerCallback = (dx: number, dy: number, event: any) => true | undefined;
export const trackDrag: (event: any, callback: TrackerCallback, cursor?: string) => void;
export const dataTable: import("xinjs").ElementCreator<HTMLElement>;
export const filterBuilder: import("xinjs").ElementCreator<HTMLElement>;
export const mapBox: import("xinjs").ElementCreator<HTMLElement>;
export const markdownViewer: import("xinjs").ElementCreator<HTMLElement>;
export const sideNav: import("xinjs").ElementCreator<HTMLElement>;
export const sizeBreak: import("xinjs").ElementCreator<HTMLElement>;
export const tabSelector: import("xinjs").ElementCreator<HTMLElement>;

//# sourceMappingURL=types.d.ts.map
