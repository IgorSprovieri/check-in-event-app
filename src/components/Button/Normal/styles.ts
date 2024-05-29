import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export type NormalButtonViants = "solid" | "ghost";

const variants = {
  solid: {
    backgroundColor: theme.colors.main,
    textColor: theme.colors.white,
  },
  ghost: {
    backgroundColor: theme.colors.transparent,
    textColor: theme.colors.main,
  },
};

export const styles = (variant: NormalButtonViants) =>
  StyleSheet.create({
    container: {
      width: "auto",
      height: 48,
      backgroundColor: variants[variant].backgroundColor,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
      fontSize: 16,
      paddingVertical: 8,
    },
    text: {
      fontSize: 16,
      fontWeight: "bold",
      color: variants[variant].textColor,
    },
  });
