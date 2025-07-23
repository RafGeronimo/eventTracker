import { useSetRecoilState } from "recoil";
import { eventList } from "../atom";

const useRmvEvent = () => {
  const setEventList = useSetRecoilState(eventList);
  const updateList = (id: number) => {
    return setEventList((prev) => prev.filter((e) => e.id !== id));
  };

  return updateList;
};

export default useRmvEvent;
