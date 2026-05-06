import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "../components/ThemedText";
import { useThemeColors } from "../hooks/use-theme.colors";

export default function IndexScreen() {
  return (
    <View>
      <ThemedText variant="h2" color="neutral">
        Hello
      </ThemedText>
      <Link href="/onboarding">Onboarding</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: useThemeColors().primary,
  },
  image: {
    width: 80,
    height: 80,
  },
});
