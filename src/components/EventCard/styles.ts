import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: theme.colors.white,
  },
  textContainer: {
    justifyContent: "center",
    gap: 4,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "700",
  },
  participantsText: {
    fontSize: 14,
  },
  image: {
    width: 32,
    height: 32,
  },
});
