import { Dispatch, ReactNode, SetStateAction } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Modal as RNModal,
  View,
} from "react-native";
import { styles } from "./styles";

type Props = {
  children: ReactNode;
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const Modal = ({ children, isOpen, setOpen }: Props) => {
  return (
    <RNModal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => setOpen(false)}
    >
      <KeyboardAvoidingView
        style={styles.mainContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.contentContainer}>{children}</View>
      </KeyboardAvoidingView>
    </RNModal>
  );
};
