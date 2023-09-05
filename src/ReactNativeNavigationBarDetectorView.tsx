import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ReactNativeNavigationBarDetectorViewProps } from './ReactNativeNavigationBarDetector.types';

const NativeView: React.ComponentType<ReactNativeNavigationBarDetectorViewProps> =
  requireNativeViewManager('ReactNativeNavigationBarDetector');

export default function ReactNativeNavigationBarDetectorView(props: ReactNativeNavigationBarDetectorViewProps) {
  return <NativeView {...props} />;
}
