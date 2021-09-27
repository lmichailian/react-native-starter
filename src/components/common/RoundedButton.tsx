import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { ReactNode } from "react";
import { TouchableWithoutFeedback, View, ViewStyle } from "react-native";

interface RoundedButtonProps {
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  onPress?: () => void;
  size?: number;
  style?: ViewStyle;
  children?: string | ReactNode;
}

function RoundedButton(props: RoundedButtonProps) {
  const { icon, children, size, style, onPress } = props;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={style}>
        <MaterialCommunityIcons size={size} name={icon} />
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
}

RoundedButton.defaultProps = {
  size: 16,
};

export default RoundedButton;
