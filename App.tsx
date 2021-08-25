import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import LoginPage from "./src/pages/LoginPage";
import { dimen } from "./src/utils";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <LoginPage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: dimen.baseUnit * 2,
    backgroundColor: "#fff",
  },
});
