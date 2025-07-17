import React from "react";
import Evento from "../Evento";
import Filtro from "../Filtro";
import style from "./ListaDeEventos.module.scss";
import { useRecoilValue } from "recoil";
import { eventList } from "../../atom";

const ListaDeEventos = ({
  aoDeletarEvento,
  aoAlterarStatus,
  aoFiltroAplicado,
}: {
  aoAlterarStatus: (id: number) => void;
  aoDeletarEvento: (id: number) => void;
  aoFiltroAplicado: (data: Date | null) => void;
}) => {
  const events = useRecoilValue(eventList);

  console.log("events", events);

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
