import * as FileSystem from "expo-file-system";
import { Event } from "./types";

const fileUri = FileSystem.documentDirectory + "data.json";

export const saveStorageData = async (newData: Event[]) => {
  try {
    await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(newData));
  } catch (error) {
    console.error("Erro ao salvar os dados:", error);
  }
};

export const loadStorageData = async (): Promise<Event[] | undefined> => {
  try {
    const fileExists = await FileSystem.getInfoAsync(fileUri);

    if (!fileExists.exists) {
      await FileSystem.writeAsStringAsync(fileUri, JSON.stringify([]));
    }

    const content = await FileSystem.readAsStringAsync(fileUri);

    return JSON.parse(content);
  } catch (error) {
    console.error("Erro ao carregar os dados:", error);
  }
};
