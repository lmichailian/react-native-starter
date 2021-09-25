import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "../components/common/Button";
import { AuthContext } from "../state/AuthContext";
import { dimen } from "../utils";

function HomeScreen() {
  const { logout, currentUser } = useContext(AuthContext);

  console.log('HOME SCREEN', currentUser)

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}> 
        <Text style={styles.mainText}>
          {currentUser?.displayName} I hope this starter has been saving your time
        </Text>
      </View>
      <Button onPress={logout} style={styles.container}>Logout</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: dimen.baseUnit * 2,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    fontSize: dimen.fontSize.normal,
  },
});

export default HomeScreen;
