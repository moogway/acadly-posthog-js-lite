import { PostHogOptions } from './types';
export declare type PostHogStorage = {
    getItem: (key: string) => string | null | undefined;
    setItem: (key: string, value: string) => void;
    removeItem: (key: string) => void;
    clear: () => void;
    getAllKeys: () => readonly string[];
};
export declare const cookieStore: PostHogStorage;
export declare const _localStore: PostHogStorage;
export declare const _sessionStore: PostHogStorage;
export declare const localStore: PostHogStorage | undefined;
export declare const sessionStorage: PostHogStorage | undefined;
export declare const getStorage: (type: PostHogOptions['persistence']) => PostHogStorage;
