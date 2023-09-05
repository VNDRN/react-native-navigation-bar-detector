# react-native-navigation-bar-detector

A React Native module that detects which navigation-bar is used on android.
This way, it is possible to detect if gestures, two buttons or three buttons are used.

> At the moment, this module only works on Android. If you want to use this module on iOS (for example to check whether a button or a gesture bar is used), please create an issue.

## Installation

### Add the package to your npm dependencies

```bash
npm install react-native-navigation-bar-detector
```

### Configure for iOS

Run `npx pod-install` after installing the npm package.

### Configure for Android

No additional steps needed

## API documentation

The API is very simple to use, as there is only one method to call.

### getNavigationBarType()

This is a function to get the type of navigation bar being used. It's currently only compatible with Android devices. iOS compatibility is planned in the near future.

#### Import

```ts
import { getNavigationBarType } from "path/to/ReactNativeNavigationBarDetectorModule"
```

#### Usage

```ts
const navBarType = getNavigationBarType();
```

#### Return Value

__Type:__ NavigationBarType
This function will return one of four potential strings:

- _"threeButton"_: Indicates the navigation bar with three buttons.
- _"twoButton"_: Indicates the navigation bar with two buttons.
- _"gesture"_: Indicates that gesture navigation is being used.
- _"ios not yet supported"_: If the device is not an Android, the function will return .

## Contributing

Contributions are very welcome! Please do so by opening an issue or creating a Pull Request.
