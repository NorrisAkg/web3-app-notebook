import { useColorScheme } from "react-native";
import { AppColors } from "../constants/AppColors";

export function useThemeColors() {
    const theme = useColorScheme() ?? 'light';

    return AppColors[theme];
}