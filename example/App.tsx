import { StyleSheet, Text, View } from 'react-native';

import * as ReactNativeNavigationBarDetector from 'react-native-navigation-bar-detector';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ReactNativeNavigationBarDetector.getNavigationBarType()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
