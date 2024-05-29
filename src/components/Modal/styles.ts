import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column-reverse",
    backgroundColor: theme.colors.transparent50,
  },
  contentContainer: {
    backgroundColor: theme.colors.white,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    padding: 24,
  },
});
