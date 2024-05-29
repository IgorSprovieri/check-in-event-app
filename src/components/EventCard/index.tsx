import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {
  eventName: string;
  participants: number;
  confirmed: number;
  handleSelect: () => void;
};

export const EventCard = ({
  eventName,
  participants,
  confirmed,
  handleSelect,
}: Props) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={handleSelect}>
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{eventName}</Text>
        <Text style={styles.participantsText}>
          Confirmados: {confirmed} / {participants}
        </Text>
      </View>
      <Image
        style={styles.image}
        source={require("../../../assets/arrow.png")}
      />
    </TouchableOpacity>
  );
};
