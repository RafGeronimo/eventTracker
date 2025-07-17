import React from "react";
import { IEvent } from "../../interfaces/IEvento";
import style from "./Evento.module.scss";
import EventCheckbox from "./EventoCheckbox";

const Evento: React.FC<{
  event: IEvent;
  aoAlterarStatus: (id: number) => void;
  aoDeletarEvento: (id: number) => void;
}> = ({ event, aoDeletarEvento }) => {
  const estilos = [style.Evento];

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
      <i className="far fa-times-circle fa-2x" onClick={() => aoDeletarEvento(event.id!)}></i>
    </div>
  );
};

export default Evento;
