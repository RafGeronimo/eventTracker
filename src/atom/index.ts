import { atom } from "recoil";
import { IEvent } from "../interfaces/IEvento";

export const eventList = atom<IEvent[]>({
  key: "eventList",
  default: [
    {
      description: "Estudar React",
      initialDate: new Date("2022-01-15T09:00"),
      endDate: new Date("2022-01-15T13:00"),
      completed: false,
      id: 1642342747,
    },
    {
      description: "Estudar Recoil",
      initialDate: new Date("2022-01-16T09:00"),
      endDate: new Date("2022-01-16T11:00"),
      completed: false,
      id: 1642342959,
    },
  ],
});
