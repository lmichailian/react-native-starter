import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "../components/common/Button";
import RoundedButton from "../components/common/RoundedButton";
import TextInput from "../components/common/TextInput";
import TextLink from "../components/common/TextLink";
import { colors, dimen } from "../utils";

function ResetPage() {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Text style={styles.title}>Reset</Text>
        <TextInput keyboardType={"email-address"} placeholder="Email" />
        <Button onPress={() => console.log("test")}>Reset</Button>
        <TextLink
          onPress={() => alert("forget")}
          align="center"
          style={styles.join}
        >
          Are you a member ? Log In
        </TextLink>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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

export default ResetPage;
