import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export type SmallButtonViants = "solid";

export const styles = (variant: SmallButtonViants) =>
  StyleSheet.create({
    container: {
      width: 40,
      height: 40,
      backgroundColor: theme.colors.main,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
    },
    text: {
      fontSize: 16,
      fontWeight: "bold",
      color: theme.colors.white,
    },
  });
