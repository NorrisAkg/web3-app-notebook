import { AppButton } from "@/components/AppButton";
import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, View } from "react-native";

export default function Onboarding() {
  return (
    <View style={styles.container}>
      <View></View>
      <View style={styles.titleSection}>
        <ThemedText variant="h1" color="neutral" style={styles.title}>
          Votre carnet, votre blockchain
        </ThemedText>
        <ThemedText variant="subtitle" color="neutral" style={styles.subtitle}>
          Stockez vos contacts de manière décentralisée et sécurisée sur
          Ethereum
        </ThemedText>
      </View>
      <AppButton title="Commencer" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  titleSection: {
    gap: 4,
  },
  title: {
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
  },
});
