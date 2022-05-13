import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import RootNavigator from "./src/navigation";
import HomeTabs from "./src/navigation";

import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
      {/* <HomeTabs /> */}
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
