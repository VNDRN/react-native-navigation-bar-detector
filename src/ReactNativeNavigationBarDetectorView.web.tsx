import * as React from 'react';

import { ReactNativeNavigationBarDetectorViewProps } from './ReactNativeNavigationBarDetector.types';

export default function ReactNativeNavigationBarDetectorView(props: ReactNativeNavigationBarDetectorViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
