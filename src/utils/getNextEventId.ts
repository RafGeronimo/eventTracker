import { IEvent } from "../interfaces/IEvento";

const getNextEventId = (events: IEvent[]): number => {
  return (
    events.reduce((acc: number, curr: IEvent) => {
      if (!curr.id) return acc;
      if (acc > curr?.id) {
        return acc;
      } else {
        return curr.id;
      }
    }, 0) + 1
  );
};

export default getNextEventId;
