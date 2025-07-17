import { IEvent } from "../../../interfaces/IEvento";
import useUpdateEvent from "../../../hooks/useUpdateEvent";

type EventCheckboxProps = {
  event: IEvent;
};

const EventCheckbox = ({ event }: EventCheckboxProps) => {
  const estilos = ["far", "fa-2x", event.completed ? "fa-check-square" : "fa-square"];
  const updateEvent = useUpdateEvent();

  const changeStatus = () => {
    const updatedEvent = { ...event, completed: !event.completed };
    updateEvent(updatedEvent);
  };

  return <i className={estilos.join(" ")} onClick={changeStatus}></i>;
};

export default EventCheckbox;
