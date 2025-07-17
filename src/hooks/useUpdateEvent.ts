import { useSetRecoilState } from "recoil";
import { eventList } from "../atom";
import { IEvent } from "../interfaces/IEvento";

const useUpdateEvent = () => {
  const setEventList = useSetRecoilState(eventList);
  const updateEvent = (event: IEvent) => {
    setEventList((prev) => prev.map((e) => (e.id === event.id ? event : e)));
  };
  return updateEvent;
};

export default useUpdateEvent;
