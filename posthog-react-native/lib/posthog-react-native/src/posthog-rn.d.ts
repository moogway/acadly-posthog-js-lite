import { PostHogCore, PosthogCoreOptions, PostHogFetchOptions, PostHogFetchResponse, PostHogPersistedProperty } from '../../posthog-core/src';
import { SemiAsyncStorage } from './storage';
import { PostHogCustomAppProperties, PostHogCustomAsyncStorage } from './types';
export declare type PostHogOptions = PosthogCoreOptions & {
    persistence?: 'memory' | 'file';
    customAppProperties?: PostHogCustomAppProperties;
    customAsyncStorage?: PostHogCustomAsyncStorage;
};
export declare class PostHog extends PostHogCore {
    private _persistence;
    private _memoryStorage;
    private _semiAsyncStorage;
    private _appProperties;
    /** Await this method to ensure that all state has been loaded from the async provider */
    static initAsync(apiKey: string, options?: PostHogOptions): Promise<PostHog>;
    constructor(apiKey: string, options?: PostHogOptions, storage?: SemiAsyncStorage);
    getPersistedProperty<T>(key: PostHogPersistedProperty): T | undefined;
    setPersistedProperty<T>(key: PostHogPersistedProperty, value: T | null): void;
    fetch(url: string, options: PostHogFetchOptions): Promise<PostHogFetchResponse>;
    getLibraryId(): string;
    getLibraryVersion(): string;
    getCustomUserAgent(): void;
    getCommonEventProperties(): any;
    screen(name: string, properties?: any): this;
}
