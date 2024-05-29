import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onPress: () => void;
};

const Small = ({ children, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.smallContainer} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const Big = ({ children, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.bigContainer} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const Cancel = ({ children, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.cancelContainer} onPress={onPress}>
      <Text style={styles.cancelText}>{children}</Text>
    </TouchableOpacity>
  );
};

export const Button = { Small, Big, Cancel };
