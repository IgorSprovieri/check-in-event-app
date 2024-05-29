import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ReactNode } from "react";
import { NormalButtonViants } from "./styles";

type Props = {
  children: ReactNode;
  onPress: () => void;
  variant?: NormalButtonViants;
};

export const Normal = ({ children, onPress, variant }: Props) => {
  return (
    <TouchableOpacity
      style={styles(variant || "solid").container}
      onPress={onPress}
    >
      <Text style={styles(variant || "solid").text}>{children}</Text>
    </TouchableOpacity>
  );
};
