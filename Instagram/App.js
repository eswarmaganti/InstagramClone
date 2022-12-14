import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar as NativeStatusBar,
} from "react-native";
import Navigator from "./src/navigation";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? NativeStatusBar.currentHeight : 0,
  },
});
