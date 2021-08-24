import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import LoginPage from "./src/pages/LoginPage";
import RegisterPage from "./src/pages/RegisterPage";
import ResetPage from "./src/pages/ResetPage";
import { dimen } from "./src/utils";

export default function App(test: string) {
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
