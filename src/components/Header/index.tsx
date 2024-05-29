import { ReactNode } from "react";
import { Text } from "react-native";
import { styles } from "./styles";

type Props = {
  children: ReactNode;
};

export const Header = ({ children }: Props) => (
  <Text style={styles.header}>{children}</Text>
);
