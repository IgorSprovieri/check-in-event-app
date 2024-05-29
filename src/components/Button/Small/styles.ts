import { StyleSheet } from "react-native";

export type SmallButtonViants = "solid";

export const styles = (variant: SmallButtonViants) =>
  StyleSheet.create({
    container: {
      width: 40,
      height: 40,
      backgroundColor: "#3C9480",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
    },
    text: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#FFF",
    },
  });
