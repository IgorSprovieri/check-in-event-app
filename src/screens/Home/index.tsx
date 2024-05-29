import { styles } from "./styles";
import { Alert, FlatList, SafeAreaView, View } from "react-native";
import {
  Button,
  Divisor,
  EventCard,
  Header,
  Input,
  Modal,
} from "../../components";
import { useEffect, useState } from "react";
import { Event, createEvent, getAllEvents } from "../../storage";

export const Home = () => {
  const [modalIsOpen, setModalOpen] = useState(false);
  const [eventName, setEventName] = useState("");
  const [events, setEvents] = useState<Event[]>([]);

  const handleAddEvent = async () => {
    try {
      const newEvents = await createEvent({
        name: eventName,
        participants: [],
      });

      setEvents(newEvents);
      setModalOpen(false);
      setEventName("");
    } catch (error: any) {
      Alert.alert("Erro ao Adicionar Evento", error?.message);
    }
  };

  const loadEvents = async () => {
    try {
      const initialEvents = await getAllEvents();

      if (initialEvents) {
        setEvents(initialEvents);
      }
    } catch (error: any) {
      Alert.alert("Erro ao Carregar Eventos", error?.message);
    }
  };

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
              <Button.Normal onPress={handleAddEvent}>Adicionar</Button.Normal>
              <Button.Normal
                variant="ghost"
                onPress={() => setModalOpen(false)}
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
