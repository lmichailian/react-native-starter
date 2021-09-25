import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, View, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-root-toast";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/common/Button";
import RoundedButton from "../components/common/RoundedButton";
import TextInput from "../components/common/TextInput";
import TextLink from "../components/common/TextLink";
import { AuthContext } from "../state/AuthContext";
import { colors, dimen } from "../utils";

interface LoginProps {
  navigation: any;
}

interface FormData {
  email: string;
  password: string;
}

function LoginScreen({ navigation }: LoginProps) {
  const authContext = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  async function onSubmit({ email, password }: FormData) {
    try {
      await authContext.login(email, password);
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
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <View style={styles.mainContent}>
          <Text style={styles.title}>Welcome</Text>
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

          <Controller
            rules={{
              required: "Required Field",
              minLength: {
                message: "Almost 6 characters",
                value: 6,
              },
            }}
            control={control}
            render={({ field: { value } }) => (
              <TextInput
                error={errors["password"]}
                placeholder="Password"
                secureTextEntry
                onChangeText={(text) =>
                  setValue("password", text, { shouldValidate: true })
                }
                value={value}
              />
            )}
            defaultValue=""
            name="password"
          />
          <TextLink
            onPress={() => navigation.push("Reset")}
            align="right"
            style={styles.link}
          >
            Forgot password ?
          </TextLink>
          <Button onPress={handleSubmit(onSubmit)}>Log In</Button>
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
      </KeyboardAwareScrollView>
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

export default LoginScreen;
