import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  input: {
    width: "auto",
    height: 40,
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: theme.colors.lightGray,
    borderWidth: 2,
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: "center",
    fontSize: 16,
  },
});
