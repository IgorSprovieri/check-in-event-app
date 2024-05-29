import { styles } from "./styles";
import { FlatList, View } from "react-native";
import {
  Button,
  Divisor,
  EventCard,
  Header,
  Input,
  Modal,
} from "../../components";
import { useEffect, useState } from "react";
import { Event } from "../../data/types";
import { loadStorageData, saveStorageData } from "../../data";

export const Home = () => {
  const [modalIsOpen, setModalOpen] = useState(false);
  const [eventName, setEventName] = useState("");
  const [events, setEvents] = useState<Event[]>([]);

  const handleAddEvent = async () => {
    const newData = [
      {
        name: eventName,
        participants: [],
      },
      ...events,
    ];

    await saveStorageData(newData);

    setEvents(newData);
    setModalOpen(false);
    setEventName("");
  };

  const loadEvents = async () => {
    const data = await loadStorageData();

    if (data) {
      setEvents(data);
    }
  };

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Header>Eventos</Header>
        <Button.Small onPress={() => setModalOpen(true)}>+</Button.Small>
      </View>

      <Divisor />

      <FlatList
        data={events}
        style={styles.listContainer}
        keyExtractor={({ name }) => name}
        scrollEnabled
        renderItem={({ item }) => (
          <EventCard
            eventName={item.name}
            handleSelect={() => {}}
            participants={item.participants.length}
            confirmed={item.participants.reduce(
              (accumulator, { checked }) =>
                checked === true ? accumulator + 1 : accumulator,
              0
            )}
          />
        )}
      />
      <Modal isOpen={modalIsOpen} setOpen={setModalOpen}>
        <Header>Adicionar Evento</Header>
        <View style={styles.formContainer}>
          <Input
            placeholder="Nome do Evento"
            value={eventName}
            onChangeText={setEventName}
          />
          <View style={styles.formButtonContainer}>
            <Button.Big onPress={handleAddEvent}>Adicionar</Button.Big>
            <Button.Cancel onPress={() => setModalOpen(false)}>
              Cancelar
            </Button.Cancel>
          </View>
        </View>
      </Modal>
    </View>
  );
};
