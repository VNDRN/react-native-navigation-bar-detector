import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ReactNativeNavigationBarDetector.web.ts
// and on native platforms to ReactNativeNavigationBarDetector.ts
import ReactNativeNavigationBarDetectorModule from './ReactNativeNavigationBarDetectorModule';
import ReactNativeNavigationBarDetectorView from './ReactNativeNavigationBarDetectorView';
import { ChangeEventPayload, ReactNativeNavigationBarDetectorViewProps } from './ReactNativeNavigationBarDetector.types';

// Get the native constant value.
export const PI = ReactNativeNavigationBarDetectorModule.PI;

export function hello(): string {
  return ReactNativeNavigationBarDetectorModule.hello();
}

export async function setValueAsync(value: string) {
  return await ReactNativeNavigationBarDetectorModule.setValueAsync(value);
}

const emitter = new EventEmitter(ReactNativeNavigationBarDetectorModule ?? NativeModulesProxy.ReactNativeNavigationBarDetector);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ReactNativeNavigationBarDetectorView, ReactNativeNavigationBarDetectorViewProps, ChangeEventPayload };
