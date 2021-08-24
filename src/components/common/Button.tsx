import React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  TextStyle,
} from "react-native";
import { colors, dimen } from "../../utils";

interface TouchableOpacityCustomProps extends TouchableOpacityProps {
  children: string;
  textStyles?: TextStyle;
}

function Button(props: TouchableOpacityCustomProps) {
  const { children, textStyles } = props;
  return (
    <TouchableOpacity {...props} style={styles.root}>
      <Text style={[styles.text, textStyles]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 55,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: dimen.baseUnit,
  },
  text: {
    color: colors.white,
  },
});

export default Button;
