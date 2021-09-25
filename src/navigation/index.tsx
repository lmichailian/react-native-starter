import React, { useContext } from "react";
import LoginScreen from "../screens/LoginScreen";
import ResetScreen from "../screens/ResetScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../state/AuthContext";
import HomeScreen from "../screens/HomeScreen";
const Stack = createNativeStackNavigator();

function Navigation() {
  const { currentUser, appLoading } = useContext(AuthContext);
  const isSigned = !!currentUser

  if (appLoading) return null
    
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: isSigned }}>
        {isSigned ? <Stack.Screen name="Home" component={HomeScreen} /> : (
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

export default Navigation;
