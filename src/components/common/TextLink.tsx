import React from "react";
import { Text, TextProps, StyleSheet, TextStyle } from "react-native";
import { colors } from "../../utils";

interface TextPropsCustom extends TextProps {
  children: string;
  align: "left" | "center" | "right";
}

function TextLink(props: TextPropsCustom) {
  const { children, align, style, onPress } = props;
  return (
    <Text onPress={onPress} style={[styles.textLink, styles[align], style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  textLink: {
    color: colors.primary,
  },
  left: {
    textAlign: "left",
  },
  center: {
    textAlign: "center",
  },
  right: {
    textAlign: "right",
  },
});

TextLink.defaultProps = {
  align: "left",
  style: {},
};

export default TextLink;
