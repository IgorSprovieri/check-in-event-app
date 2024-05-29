import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: 12,
    paddingHorizontal: 24,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  listContainer: {
    paddingTop: 16,
  },
  formContainer: {
    marginTop: 32,
    marginBottom: 32,
    gap: 42,
  },
  formButtonContainer: {
    gap: 8,
  },
});
