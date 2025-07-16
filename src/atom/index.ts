import { atom } from "recoil";
import { IEvent } from "../interfaces/IEvento";

export const eventList = atom<IEvent[]>({
  key: "eventList",
  default: [
    {
      id: 0,
      description: "Estudar React",
      initialDate: new Date("2025-07-15T09:00"),
      endDate: new Date("2025-07-15T13:00"),
      completed: false,
    },
    {
      id: 1,
      description: "Estudar Recoil",
      initialDate: new Date("2025-07-16T09:00"),
      endDate: new Date("2025-07-16T11:00"),
      completed: false,
    },
  ],
});
