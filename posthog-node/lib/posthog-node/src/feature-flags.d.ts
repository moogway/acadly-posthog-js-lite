/// <reference types="node" />
import { FeatureFlagCondition, PostHogFeatureFlag } from './types';
import { PostHogFetchOptions, PostHogFetchResponse } from 'posthog-core/src';
declare class ClientError extends Error {
    constructor(message: string);
}
declare class InconclusiveMatchError extends Error {
    constructor(message: string);
}
declare type FeatureFlagsPollerOptions = {
    personalApiKey: string;
    projectApiKey: string;
    host: string;
    pollingInterval: number;
    timeout?: number;
    fetch?: (url: string, options: PostHogFetchOptions) => Promise<PostHogFetchResponse>;
};
declare class FeatureFlagsPoller {
    pollingInterval: number;
    personalApiKey: string;
    projectApiKey: string;
    featureFlags: Array<PostHogFeatureFlag>;
    groupTypeMapping: Record<string, string>;
    loadedSuccessfullyOnce: boolean;
    timeout?: number;
    host: FeatureFlagsPollerOptions['host'];
    poller?: NodeJS.Timeout;
    fetch: (url: string, options: PostHogFetchOptions) => Promise<PostHogFetchResponse>;
    constructor({ pollingInterval, personalApiKey, projectApiKey, timeout, host, ...options }: FeatureFlagsPollerOptions);
    getFeatureFlag(key: string, distinctId: string, groups?: Record<string, string>, personProperties?: Record<string, string>, groupProperties?: Record<string, Record<string, string>>): Promise<string | boolean | undefined>;
    getAllFlags(distinctId: string, groups?: Record<string, string>, personProperties?: Record<string, string>, groupProperties?: Record<string, Record<string, string>>): Promise<{
        response: Record<string, string | boolean>;
        fallbackToDecide: boolean;
    }>;
    computeFlagLocally(flag: PostHogFeatureFlag, distinctId: string, groups?: Record<string, string>, personProperties?: Record<string, string>, groupProperties?: Record<string, Record<string, string>>): string | boolean;
    matchFeatureFlagProperties(flag: PostHogFeatureFlag, distinctId: string, properties: Record<string, string>): string | boolean;
    isConditionMatch(flag: PostHogFeatureFlag, distinctId: string, condition: FeatureFlagCondition, properties: Record<string, string>): boolean;
    getMatchingVariant(flag: PostHogFeatureFlag, distinctId: string): string | boolean | undefined;
    variantLookupTable(flag: PostHogFeatureFlag): {
        valueMin: number;
        valueMax: number;
        key: string;
    }[];
    loadFeatureFlags(forceReload?: boolean): Promise<void>;
    _loadFeatureFlags(): Promise<void>;
    _requestFeatureFlagDefinitions(): Promise<PostHogFetchResponse>;
    stopPoller(): void;
}
declare function matchProperty(property: FeatureFlagCondition['properties'][number], propertyValues: Record<string, any>): boolean;
export { FeatureFlagsPoller, matchProperty, InconclusiveMatchError, ClientError };