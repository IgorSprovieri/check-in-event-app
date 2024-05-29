import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ReactNode } from "react";
import { SmallButtonViants } from "./styles";

type Props = {
  children: ReactNode;
  onPress: () => void;
  variant?: SmallButtonViants;
};

export const Small = ({ children, onPress, variant }: Props) => {
  return (
    <TouchableOpacity
      style={styles(variant || "solid").container}
      onPress={onPress}
    >
      <Text style={styles(variant || "solid").text}>{children}</Text>
    </TouchableOpacity>
  );
};
