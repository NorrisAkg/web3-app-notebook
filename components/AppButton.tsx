import { AppColors } from "@/constants/AppColors";
import {
  ButtonProps,
  Pressable,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

type Props = ButtonProps & {
  title: string;
  backgroundColor?: keyof (typeof AppColors)["light"];
  textColor?: keyof (typeof AppColors)["light"];
  style?: ViewStyle;
  onPress?: VoidFunction;
};

export function AppButton(props: Props) {
  const { style, onPress } = props;
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, style]}></View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  title: {
    textAlign: "center",
  },
});
