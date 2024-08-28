import type { InitOptions } from './types';
type IInitOptions = Omit<InitOptions, 'checkVersionUpdate'>;
export declare const init: (options: IInitOptions) => Promise<void>;
export {};
