import { useRecoilValue } from "recoil";
import { IEvent } from "../interfaces/IEvento";
import { eventList } from "../atom";

const useNextEventId = (): number => {
  const events = useRecoilValue(eventList);
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
