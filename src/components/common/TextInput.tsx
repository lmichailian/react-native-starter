import React from "react";
import {
  TextInput as TextRN,
  TextInputProps,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors, dimen } from "../../utils";
import { useState } from "react";

const INPUT_HEIGHT = 55;

interface RootStyles {
  padding?: number;
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: number;
  height?: number;
  width?: string;
  marginBottom?: number;
}

interface TextInputPropsCustom extends TextInputProps {
  rootStylesOverride?: RootStyles;
  error?: string | boolean;
}

function TextInput(props: TextInputPropsCustom) {
  const { rootStylesOverride, error, placeholderTextColor, secureTextEntry } =
    props;

  const [secure, setSecure] = useState(secureTextEntry);

  function handleSecure() {
    setSecure(!secure);
  }

  return (
    <>
      <View style={styles.container}>
        <TextRN
          style={[styles.root, rootStylesOverride, error ? styles.error : {}]}
          {...props}
          placeholderTextColor={placeholderTextColor || colors.defaultGray}
          secureTextEntry={secure}
        />
        {secureTextEntry && !error && (
          <TouchableOpacity
            onPress={handleSecure}
            style={styles.lockButton}
            activeOpacity={1}
          >
            {secure ? (
              <MaterialIcons name="lock-outline" style={styles.lockIcon} />
            ) : (
              <MaterialIcons name="lock-open" style={styles.lockIcon} />
            )}
          </TouchableOpacity>
        )}
        {error && <MaterialIcons name="cancel" style={styles.errorIcon} />}
      </View>
      {error && typeof error === "string" && (
        <Text style={styles.errorMessage}>{error}</Text>
      )}
    </>
  );
}

const rootStyles: RootStyles = {
  padding: dimen.baseUnit * 2,
  marginBottom: dimen.baseUnit * 2,
  backgroundColor: colors.backgroundGray,
  borderWidth: 1,
  borderColor: colors.defaultGray,
  borderRadius: dimen.baseUnit,
  height: INPUT_HEIGHT,
  width: "100%",
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  root: rootStyles,
  errorIcon: {
    fontSize: dimen.fontSize.normal,
    position: "absolute",
    top: dimen.baseUnit * 2 + 2,
    right: dimen.baseUnit * 2,
    color: colors.error,
  },
  lockButton: {
    position: "absolute",
    top: dimen.baseUnit * 2 + 2,
    right: dimen.baseUnit * 2,
  },
  lockIcon: {
    fontSize: dimen.fontSize.normal,
  },
  errorMessage: {
    fontSize: dimen.fontSize.small,
    color: colors.error,
    marginBottom: dimen.baseUnit * 2,
  },
  error: {
    borderWidth: 1,
    borderColor: colors.error,
    marginBottom: dimen.baseUnit,
  },
});

export default TextInput;
