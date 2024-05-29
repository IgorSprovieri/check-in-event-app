import { Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
  participantName: string;
  checked: boolean;
  onPress: () => void;
};

export const ParticipantCard = ({
  participantName,
  checked,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <Text style={styles.nameText}>{participantName}</Text>
      <Image
        style={styles.image}
        source={
          checked === true
            ? require("../../../assets/arrow.png")
            : require("../../../assets/arrow.png")
        }
      />
    </TouchableOpacity>
  );
};
