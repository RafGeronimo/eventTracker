import React from "react";
import { IEvent } from "../../interfaces/IEvento";
import style from "./Evento.module.scss";
import EventCheckbox from "./EventoCheckbox";
import useRmvEvent from "../../hooks/useRmvEvent";

const Evento: React.FC<{
  event: IEvent;
  aoAlterarStatus: (id: number) => void;
}> = ({ event }) => {
  const estilos = [style.Evento];
  const rmvEvent = useRmvEvent();
  if (event.completed) {
    estilos.push(style.completed);
  }

  return (
    <div className={estilos.join(" ")}>
      <EventCheckbox event={event} />
      <div className="cards-info">
        <h3 className={style.descricao}>
          {event.description} - {event.initialDate.toLocaleDateString()}
        </h3>
      </div>
      <i className="far fa-times-circle fa-2x" onClick={() => rmvEvent(event.id!)}>
        remover
      </i>
    </div>
  );
};

export default Evento;
