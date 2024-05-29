export type Participant = {
  name: string;
  checked: boolean;
};

export type Event = {
  name: string;
  participants: Participant[];
};
