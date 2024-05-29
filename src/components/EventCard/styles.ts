import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 16,
    borderStyle: "solid",
    borderColor: "#E1E0E0",
    borderWidth: 0.9,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  textContainer: {
    justifyContent: "center",
    gap: 4,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  participantsText: {
    fontSize: 16,
  },
  image: {
    width: 32,
    height: 32,
  },
});
