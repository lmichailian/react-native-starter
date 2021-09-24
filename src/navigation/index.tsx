import React from "react";
import LoginScreen from "../screens/LoginScreen";
import ResetScreen from "../screens/ResetScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

function Navigation() {
  const isSigned = false;
  return (
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
  );
}

export default Navigation
