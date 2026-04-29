import { Image, StyleSheet, View } from "react-native";
import { ThemedText } from "./components/ThemedText";
import { useThemeColors } from "./hooks/use-theme.colors";

export function SplashScreen() {
    return <View>
        <Image />
        <ThemedText />
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: useThemeColors().primary,
    }
})