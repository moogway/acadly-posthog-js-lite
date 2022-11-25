import { PostHogFetchOptions, PostHogFetchResponse, PostHogAutocaptureElement, PostHogDecideResponse, PosthogCoreOptions, PostHogEventProperties, PostHogPersistedProperty } from './types';
import { RetriableOptions } from './utils';
export * as utils from './utils';
import { LZString } from './lz-string';
import { SimpleEventEmitter } from './eventemitter';
export declare abstract class PostHogCore {
    private apiKey;
    host: string;
    private flushAt;
    private flushInterval;
    private requestTimeout;
    private captureMode;
    private sendFeatureFlagEvent;
    private flagCallReported;
    private removeDebugCallback?;
    protected _events: SimpleEventEmitter;
    protected _flushTimer?: any;
    protected _decideResponsePromise?: Promise<PostHogDecideResponse>;
    protected _retryOptions: RetriableOptions;
    protected _sessionExpirationTimeSeconds: number;
    abstract fetch(url: string, options: PostHogFetchOptions): Promise<PostHogFetchResponse>;
    abstract getLibraryId(): string;
    abstract getLibraryVersion(): string;
    abstract getCustomUserAgent(): string | void;
    abstract getPersistedProperty<T>(key: PostHogPersistedProperty): T | undefined;
    abstract setPersistedProperty<T>(key: PostHogPersistedProperty, value: T | null): void;
    private _optoutOverride;
    constructor(apiKey: string, options?: PosthogCoreOptions);
    protected getCommonEventProperties(): any;
    protected setupBootstrap(options?: Partial<PosthogCoreOptions>): void;
    private get props();
    private set props(value);
    private clearProps;
    private _props;
    get optedOut(): boolean;
    optIn(): void;
    optOut(): void;
    on(event: string, cb: (...args: any[]) => void): () => void;
    reset(propertiesToKeep?: PostHogPersistedProperty[]): void;
    debug(enabled?: boolean): void;
    private buildPayload;
    getSessionId(): string | undefined;
    resetSessionId(): void;
    getAnonymousId(): string;
    getDistinctId(): string;
    register(properties: {
        [key: string]: any;
    }): void;
    unregister(property: string): void;
    /***
     *** TRACKING
     ***/
    identify(distinctId?: string, properties?: PostHogEventProperties): this;
    capture(event: string, properties?: {
        [key: string]: any;
    }, forceSendFeatureFlags?: boolean): this;
    alias(alias: string): this;
    autocapture(eventType: string, elements: PostHogAutocaptureElement[], properties?: PostHogEventProperties): this;
    /***
     *** GROUPS
     ***/
    groups(groups: {
        [type: string]: string | number;
    }): this;
    group(groupType: string, groupKey: string | number, groupProperties?: PostHogEventProperties): this;
    groupIdentify(groupType: string, groupKey: string | number, groupProperties?: PostHogEventProperties): this;
    /***
     * PROPERTIES
     ***/
    personProperties(properties: {
        [type: string]: string;
    }): this;
    groupProperties(properties: {
        [type: string]: Record<string, string>;
    }): this;
    /***
     *** FEATURE FLAGS
     ***/
    private decideAsync;
    private _decideAsync;
    private setKnownFeatureFlags;
    getFeatureFlag(key: string): boolean | string | undefined;
    getFeatureFlags(): PostHogDecideResponse['featureFlags'] | undefined;
    isFeatureEnabled(key: string): boolean | undefined;
    reloadFeatureFlagsAsync(sendAnonDistinctId?: boolean): Promise<PostHogDecideResponse['featureFlags']>;
    onFeatureFlags(cb: (flags: PostHogDecideResponse['featureFlags']) => void): () => void;
    onFeatureFlag(key: string, cb: (value: string | boolean) => void): () => void;
    overrideFeatureFlag(flags: PostHogDecideResponse['featureFlags'] | null): void;
    _sendFeatureFlags(event: string, properties?: {
        [key: string]: any;
    }): void;
    /***
     *** QUEUEING AND FLUSHING
     ***/
    private enqueue;
    flushAsync(): Promise<any>;
    flush(callback?: (err?: any, data?: any) => void): void;
    private fetchWithRetry;
    shutdownAsync(): Promise<void>;
    shutdown(): void;
}
export * from './types';
export { LZString };