import { useRecoilValue } from "recoil";
import { eventList } from "../atom";

const useEventList = () => {
  return useRecoilValue(eventList);
};

export default useEventList;
