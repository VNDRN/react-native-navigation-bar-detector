import { Platform } from "react-native";
import ReactNativeNavigationbarDetectorModule from "./ReactNativeNavigationBarDetectorModule";
import { NavigationBarType } from "./ReactNativeNavigationBarDetector.types";
export * from "./ReactNativeNavigationBarDetector.types";

const getAndroidNavigationBarTypeForInteger = (integer: number): NavigationBarType => {
  switch (integer) {
    case 0:
      return "threeButton";
    case 1:
      return "twoButton";
    case 2:
      return "gesture";
    default:
      return "threeButton";
  }
};

export function getNavigationBarType() {
  if (Platform.OS === "android") {
    const integer = ReactNativeNavigationbarDetectorModule.getNavigationBarTypeInteger();
    return getAndroidNavigationBarTypeForInteger(integer);
  }
  //TODO: add support for iOS
  return "ios not yet supported";
}
