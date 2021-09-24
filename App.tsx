import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import { StyleSheet } from "react-native";
import { GlobalStateProvider } from "./src/state/ProviderCompose";
import { RootSiblingParent } from "react-native-root-siblings";
import Navigation from "./src/navigation";

export default function App() {
  return (
    <RootSiblingParent>
      <GlobalStateProvider>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </GlobalStateProvider>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
