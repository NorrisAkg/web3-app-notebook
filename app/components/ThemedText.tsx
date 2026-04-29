import { StyleSheet, Text, type TextStyle } from "react-native";
import { AppColors } from "../constants/AppColors";
import { useThemeColors } from "../hooks/use-theme.colors";

const styles = StyleSheet.create({
    normal: {
        fontSize: 16,
        lineHeight: 24,
    },
    h1: {
        fontSize: 24,
        lineHeight: 32,
    },
    h2: {
        fontSize: 20,
        lineHeight: 28,
    },
    subtitle: {
        fontSize: 14,
        lineHeight: 20,
    }
});

type Props = TextStyle & {
    variant?: keyof typeof styles;
    color?: keyof typeof AppColors['light'] & keyof typeof AppColors['dark'];
}
export function ThemedText({ variant, color, ...rest }: Props) {
    const colors = useThemeColors();
    const textColor = colors[color ?? 'white'];

    return <Text style={[styles[variant ?? 'normal'], { color: textColor }]} {...rest} />
}