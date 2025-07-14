import React from "react";
import { IEvent } from "../../../interfaces/IEvento";

const EventoCheckbox: React.FC<{ evento: IEvent; aoAlterarStatus: (id: number) => void }> = ({
  evento,
  aoAlterarStatus,
}) => {
  const estilos = ["far", "fa-2x", event.completed ? "fa-check-square" : "fa-square"];

  return <i className={estilos.join(" ")} onClick={() => aoAlterarStatus(event.id!)}></i>;
};

export default EventoCheckbox;
