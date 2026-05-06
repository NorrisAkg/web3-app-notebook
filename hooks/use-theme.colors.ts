import { AppColors } from "../constants/AppColors";

type ThemeVariant = 'light' | 'dark';

export function useThemeColors(theme: ThemeVariant = 'light') {
    return AppColors[theme];
}