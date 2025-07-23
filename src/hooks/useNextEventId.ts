import { IEvent } from "../interfaces/IEvento";
import useEventList from "./useEventList";

const useNextEventId = (): number => {
  const events = useEventList();
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

export default useNextEventId;
