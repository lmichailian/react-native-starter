import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/common/Button";
import RoundedButton from "../components/common/RoundedButton";
import TextInput from "../components/common/TextInput";
import TextLink from "../components/common/TextLink";
import { colors, dimen } from "../utils";

interface LoginProps {
  navigation: any;
}

function LoginPage({ navigation }: LoginProps) {
  return (
    <SafeAreaView style={styles.containerSafe}>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <Text style={styles.title}>Welcome</Text>
          <TextInput keyboardType={"email-address"} placeholder="Email" />
          <TextInput secureTextEntry placeholder="Password" />
          <TextLink
            onPress={() => navigation.push("Reset")}
            align="right"
            style={styles.link}
          >
            Forgot password ?
          </TextLink>
          <Button onPress={() => console.log("test")}>Log In</Button>
          <TextLink
            onPress={() => navigation.push("Join")}
            align="center"
            style={styles.join}
          >
            Not a member ? Join Now
          </TextLink>
        </View>
        <Text style={styles.bottomText}>Or login with social</Text>
        <View style={styles.socialButtons}>
          <RoundedButton
            size={28}
            icon={"facebook"}
            style={styles.facebookButton}
          />
          <RoundedButton size={28} icon={"google"} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: dimen.baseUnit * 2,
  },
  containerSafe: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: dimen.fontSize.extraBig,
    fontWeight: dimen.fontWeight.extraBold,
    marginBottom: dimen.baseUnit * 2,
  },
  bottomText: {
    color: colors.secondary,
    textAlign: "center",
  },

  link: {
    marginBottom: dimen.baseUnit * 2,
  },
  join: {
    marginVertical: dimen.baseUnit * 2,
  },
  socialButtons: {
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: dimen.baseUnit * 2,
  },
  facebookButton: {
    marginRight: dimen.baseUnit * 2,
  },
});

export default LoginPage;
