import { styles } from "./styles";
import { Alert, FlatList, SafeAreaView, View } from "react-native";
import {
  Button,
  Divisor,
  Header,
  Input,
  Modal,
  ParticipantCard,
  SubTitle,
} from "../../components";
import { useEffect, useMemo, useState } from "react";
import { Event, editEvent, getOneEvent } from "../../storage";

export const Participants = ({ route }: any) => {
  const { eventName: initialEventName } = route.params;

  const [modalIsOpen, setModalOpen] = useState(false);
  const [participantName, setParticipantName] = useState("");
  const [event, setEvent] = useState<Event>({
    name: "",
    participants: [],
  });

  const loadEvent = async () => {
    try {
      const initialEvent = await getOneEvent(initialEventName);

      if (initialEvent) {
        setEvent(initialEvent);
      }
    } catch (error: any) {
      Alert.alert("Erro ao Carregar Evento", error?.message);
    }
  };

  useEffect(() => {
    loadEvent();
  }, []);

  const handleAddParticipant = async () => {
    try {
      const newEvent = await editEvent(event.name, {
        name: event.name,
        participants: [
          ...event.participants,
          { name: participantName, checked: false },
        ],
      });

      setEvent(newEvent);
      setModalOpen(false);
      setParticipantName("");
    } catch (error: any) {
      Alert.alert("Erro ao Adicionar Participante", error?.message);
    }
  };

  const handleCancelAddParticipant = () => {
    setParticipantName("");
    setModalOpen(false);
  };

  const handleClickParticipantEvent = async (
    participantName: string,
    checked: boolean
  ) => {
    try {
      const newParticipants = event.participants;

      const participantIndex = event.participants.findIndex(
        ({ name }) => name === participantName
      );

      if (participantIndex < 0) {
        throw new Error("Participante não existe");
      }

      newParticipants[participantIndex] = {
        name: participantName,
        checked: checked,
      };

      const newEvent = await editEvent(event.name, {
        name: event.name,
        participants: newParticipants,
      });

      setEvent(newEvent);
    } catch (error: any) {
      Alert.alert("Erro ao Editar Evento", error?.message);
    }
  };

  const participants = useMemo(() => {
    const confimed = event.participants.filter(
      ({ checked }) => checked === true
    );

    const nonConfimed = event.participants.filter(
      ({ checked }) => checked === false
    );

    return [
      {
        key: "nonConfirmedTitle",
        type: "header",
        item: { name: "Não Confirmados", checked: true },
      },
      ...nonConfimed.map((item) => ({
        key: item.name,
        type: "participant",
        item: item,
      })),
      {
        key: "confirmedTitle",
        type: "header",
        item: { name: "Confirmados", checked: true },
      },
      ...confimed.map((item) => ({
        key: item.name,
        type: "participant",
        item: item,
      })),
    ];
  }, [event]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Header>{event.name}</Header>
          <Button.Small onPress={() => setModalOpen(true)}>+</Button.Small>
        </View>

        <Divisor />

        <FlatList
          data={participants}
          style={styles.nonConfirmedContainer}
          keyExtractor={({ key }) => key}
          scrollEnabled
          renderItem={({ item }) => {
            if (item.type === "participant") {
              return (
                <ParticipantCard
                  key={item.key}
                  participantName={item.item.name}
                  checked={item.item.checked}
                  onPress={() =>
                    handleClickParticipantEvent(
                      item.item.name,
                      !item.item.checked
                    )
                  }
                />
              );
            }

            return <SubTitle key={item.key}>{item.item.name}</SubTitle>;
          }}
        />

        <Modal isOpen={modalIsOpen} setOpen={setModalOpen}>
          <Header>Adicionar Participante</Header>
          <View style={styles.formContainer}>
            <Input
              placeholder="Nome do Participante"
              value={participantName}
              onChangeText={setParticipantName}
            />
            <View style={styles.formButtonContainer}>
              <Button.Normal onPress={handleAddParticipant}>
                Adicionar
              </Button.Normal>
              <Button.Normal
                variant="ghost"
                onPress={handleCancelAddParticipant}
              >
                Cancelar
              </Button.Normal>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};
