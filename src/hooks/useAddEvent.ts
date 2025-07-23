import { useSetRecoilState } from "recoil";
import { eventList } from "../atom";
import { IEvent } from "../interfaces/IEvento";
import useNextEventId from "./useNextEventId";

const useAddEvent = () => {
  const setEventList = useSetRecoilState(eventList);
  const nextEventId = useNextEventId();
  const updateList = (event: IEvent) => {
    if (event.initialDate < new Date()) {
      throw new Error("Não é possível iniciar eventos em datas anteriores a atual");
    }

    if (event.endDate < new Date()) {
      throw new Error("Não é possível finalizar eventos em datas anteriores a atual");
    }

    if (event.endDate < event.initialDate) {
      throw new Error("A data final do evento deve ser superior a inicial");
    }

    return setEventList((prev) => [...prev, { ...event, id: nextEventId }]);
  };

  return updateList;
};

export default useAddEvent;
