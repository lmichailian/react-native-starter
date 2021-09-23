import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import { StyleSheet } from "react-native";
import LoginPage from "./src/pages/LoginPage";
import { dimen } from "./src/utils";
import ResetPage from "./src/pages/ResetPage";
import RegisterPage from "./src/pages/RegisterPage";

const Stack = createNativeStackNavigator();

export default function App() {
  const isSigned = false;
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: isSigned }}>
          {isSigned ? null : (
            <>
              <Stack.Screen name="Login" component={LoginPage} />
              <Stack.Screen name="Reset" component={ResetPage} />
              <Stack.Screen name="Join" component={RegisterPage} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
