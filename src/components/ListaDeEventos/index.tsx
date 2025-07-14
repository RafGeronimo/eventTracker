import React from "react";
import { IEvent } from "../../interfaces/IEvento";
import Evento from "../Evento";
import Filtro from "../Filtro";
import style from "./ListaDeEventos.module.scss";

const ListaDeEventos: React.FC<{
  events: IEvent[];
  aoAlterarStatus: (id: number) => void;
  aoDeletarEvento: (id: number) => void;
  aoFiltroAplicado: (data: Date | null) => void;
}> = ({ events, aoDeletarEvento, aoAlterarStatus, aoFiltroAplicado }) => {
  return (
    <section>
      <Filtro aoFiltroAplicado={aoFiltroAplicado} />
      <div className={style.Scroll}>
        {events.map((event) => (
          <Evento aoAlterarStatus={aoAlterarStatus} aoDeletarEvento={aoDeletarEvento} event={event} key={event.id} />
        ))}
      </div>
    </section>
  );
};

export default ListaDeEventos;
