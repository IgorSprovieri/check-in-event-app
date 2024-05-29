import { ReactNode } from "react";
import { Text } from "react-native";
import { styles } from "./styles";

type Props = {
  children: ReactNode;
};

export const SubTitle = ({ children }: Props) => (
  <Text style={styles.subTitle}>{children}</Text>
);
