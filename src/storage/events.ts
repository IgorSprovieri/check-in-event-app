import AsyncStorage from "@react-native-async-storage/async-storage";

export type Participant = {
  name: string;
  checked: boolean;
};

export type Event = {
  name: string;
  participants: Participant[];
};

const EVENTS_KEY = "@CheckinEventApp:events";

export const getAllEvents = async () => {
  const events = await AsyncStorage.getItem(EVENTS_KEY);

  if (!events) {
    return [];
  }

  return JSON.parse(events);
};

export const getOneEvent = async (eventName: string) => {
  try {
    const events = await AsyncStorage.getItem(EVENTS_KEY);

    if (!events) {
      return {
        name: "",
        participants: [],
      };
    }

    const parsedEvents: Event[] = JSON.parse(events);
    const eventIndex = parsedEvents.findIndex(({ name }) => name === eventName);

    if (!eventIndex) {
      throw new Error("Evento não encontrado");
    }

    return parsedEvents[eventIndex];
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const createEvent = async (newEvent: Event) => {
  try {
    const events = await AsyncStorage.getItem(EVENTS_KEY);
    const parsedEvents: Event[] = events ? JSON.parse(events) : [];

    if (parsedEvents.find(({ name }) => name === newEvent.name)) {
      throw new Error("Evento já existe");
    }

    const newEvents = [...parsedEvents, newEvent];

    await AsyncStorage.setItem(EVENTS_KEY, JSON.stringify(newEvents));

    return newEvents;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const editEvent = async (eventToEdit: Event) => {
  try {
    const events = await AsyncStorage.getItem(EVENTS_KEY);
    const parsedEvents: Event[] = events ? JSON.parse(events) : [];

    const eventIndex = parsedEvents.findIndex(
      ({ name }) => name === eventToEdit.name
    );

    if (!eventIndex) {
      throw new Error("Evento não encontrado");
    }

    parsedEvents[eventIndex] = eventToEdit;

    await AsyncStorage.setItem(EVENTS_KEY, JSON.stringify(parsedEvents));

    return parsedEvents;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const deleteEvent = async (eventToDelete: Event) => {
  try {
    const events = await AsyncStorage.getItem(EVENTS_KEY);
    const parsedEvents: Event[] = events ? JSON.parse(events) : [];

    if (!parsedEvents.find(({ name }) => name === eventToDelete.name)) {
      throw new Error("Evento não encontrado");
    }

    const newEvents = parsedEvents.filter(
      ({ name }) => name !== eventToDelete.name
    );

    await AsyncStorage.setItem(EVENTS_KEY, JSON.stringify(newEvents));

    return newEvents;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
