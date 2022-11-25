import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { PostHog, PostHogOptions } from './posthog-rn';
import { PostHogAutocaptureOptions } from './types';
export interface PostHogProviderProps {
    children: React.ReactNode;
    options?: PostHogOptions;
    apiKey?: string;
    client?: PostHog;
    autocapture?: boolean | PostHogAutocaptureOptions;
    style?: StyleProp<ViewStyle>;
}
export declare const PostHogProvider: ({ children, client, options, apiKey, autocapture, style, }: PostHogProviderProps) => JSX.Element | null;
