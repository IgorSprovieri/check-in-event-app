import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  smallContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#3C9480",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  bigContainer: {
    width: "auto",
    height: 48,
    backgroundColor: "#3C9480",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderStyle: "solid",
    borderColor: "#E1E0E0",
    fontSize: 16,
    paddingVertical: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
  cancelContainer: {
    width: "auto",
    height: 48,
    borderRadius: 100,
    borderStyle: "solid",
    borderColor: "#444",
    borderWidth: 1,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
  },
  cancelText: {
    fontSize: 16,
    color: "#000",
  },
});
