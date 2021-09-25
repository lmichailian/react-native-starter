import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, View, StyleSheet } from "react-native";
import Toast from "react-native-root-toast";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/common/Button";
import RoundedButton from "../components/common/RoundedButton";
import TextInput from "../components/common/TextInput";
import TextLink from "../components/common/TextLink";
import { AuthContext } from "../state/AuthContext";
import { colors, dimen } from "../utils";

interface ResetScreenProps {
  navigation: any;
}

interface FormData {
  email: string;
}

function ResetPage({ navigation }: ResetScreenProps) {
  const authContext = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  async function onSubmit({ email }: FormData) {
    try {
      await authContext.reset(email);

      Toast.show("Reset password email sent", {
        backgroundColor: "#1bbd1b",
        shadow: false,
        duration: Toast.durations.LONG,
      });
      navigation.navigate('Login')
    } catch (err: any) {
      Toast.show(err.message, {
        backgroundColor: colors.error,
        shadow: false,
        duration: Toast.durations.LONG,
      });
    }
  }

  return (
    <SafeAreaView style={styles.containerSafe}>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <Text style={styles.title}>Reset</Text>
          <Controller
            control={control}
            rules={{
              required: "Required Field",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            }}
            render={({ field: { value } }) => (
              <TextInput
                error={errors["email"]}
                placeholder="Email"
                onChangeText={(text) =>
                  setValue("email", text, { shouldValidate: true })
                }
                value={value}
                keyboardType={"email-address"}
              />
            )}
            defaultValue=""
            name="email"
          />
          <Button onPress={handleSubmit(onSubmit)}>Reset</Button>
          <TextLink
            onPress={() => navigation.push("Login")}
            align="center"
            style={styles.join}
          >
            Are you a member ? Log In
          </TextLink>
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

export default ResetPage;
