package expo.modules.navigationbardetector

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ReactNativeNavigationBarDetectorModule : Module() {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  override fun definition() = ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ReactNativeNavigationBarDetector')` in JavaScript.
    Name("ReactNativeNavigationBarDetector")

    fun getAndroidNavBarInteractionModeInteger(): Int {
      val resources = appContext.reactContext?.resources
      val resourceId = resources?.getIdentifier("config_navBarInteractionMode", "integer", "android")
      if (resources != null ) {
        if (resourceId != null) {
          return if (resourceId > 0) {
            resources.getInteger(resourceId)
          } else {
            0
          }
        }
      }
      return 0
    }

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("getNavigationBarTypeInteger") {
      getAndroidNavBarInteractionModeInteger()
    }
  }
}
