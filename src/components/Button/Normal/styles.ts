import { StyleSheet } from "react-native";

export type NormalButtonViants = "solid" | "ghost";

const variants = {
  solid: {
    backgroundColor: "#3C9480",
    textColor: "#FFF",
  },
  ghost: {
    backgroundColor: "transparent",
    textColor: "#3C9480",
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
