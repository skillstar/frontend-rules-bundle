import type { InitOptions, ScanOptions } from './types';
type IInitOptions = Omit<InitOptions, 'checkVersionUpdate'>;
export declare const init: (options: IInitOptions) => Promise<void>;
export declare const scan: (options: ScanOptions) => Promise<import("./types").ScanReport>;
export {};
