import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

type Props = TextInputProps;

export const Input = ({ value, onChangeText, placeholder }: Props) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
};
