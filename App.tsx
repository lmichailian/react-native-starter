import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import { StyleSheet } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import ResetScreen from "./src/screens/ResetScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import { GlobalStateProvider } from "./src/state/ProviderCompose";

const Stack = createNativeStackNavigator();

export default function App() {
  const isSigned = false;
  return (
    <GlobalStateProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: isSigned }}>
            {isSigned ? null : (
              <>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Reset" component={ResetScreen} />
                <Stack.Screen name="Join" component={RegisterScreen} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GlobalStateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
