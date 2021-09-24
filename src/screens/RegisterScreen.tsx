import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, View, StyleSheet } from "react-native";
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

type FormData = {
  confirm: string;
  email: string;
  fullname: string;
  password: string;
};

function RegisterPage({ navigation }: ResetScreenProps) {
  const authContext = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();

  async function onSubmit(data: FormData) {
    const { fullname, password, email } = data;
    await authContext.register(fullname, email, password);
  }

  return (
    <SafeAreaView style={styles.containerSafe}>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <Text style={styles.title}>Register</Text>
          <Controller
            control={control}
            rules={{ required: "Required Field" }}
            render={({ field: { value, onBlur } }) => (
              <TextInput
                error={errors["fullname"]}
                placeholder="Fullname"
                onChangeText={(text) =>
                  setValue("fullname", text, { shouldValidate: true })
                }
                value={value}
              />
            )}
            defaultValue=""
            name="fullname"
          />

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
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                error={errors["password"]}
                placeholder="Password"
                secureTextEntry
                onChangeText={(text) =>
                  setValue("password", text, { shouldValidate: true })
                }
                onBlur={onBlur}
                value={value}
              />
            )}
            defaultValue=""
            name="password"
          />

          <Controller
            rules={{
              required: "Required Field",
              minLength: {
                message: "Almost 6 characters",
                value: 6,
              },
              validate: {
                confirmed: (value) =>
                  getValues("password") === value ||
                  "The passwords do not match",
              },
            }}
            control={control}
            render={({ field: { value } }) => (
              <TextInput
                error={errors["confirm"]}
                placeholder="Confirm"
                secureTextEntry
                onChangeText={(text) =>
                  setValue("confirm", text, { shouldValidate: true })
                }
                value={value}
              />
            )}
            defaultValue=""
            name="confirm"
          />

          <Button onPress={handleSubmit(onSubmit)}>Register</Button>
          <TextLink
            onPress={() => navigation.push("Login")}
            align="center"
            style={styles.join}
          >
            Are you a member ? Log In
          </TextLink>
        </View>
        <Text style={styles.bottomText}>Or register with social</Text>
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

export default RegisterPage;
