import React from "react";
import Evento from "../Evento";
import Filtro from "../Filtro";
import style from "./ListaDeEventos.module.scss";
import useEventList from "../../hooks/useEventList";

const ListaDeEventos = ({
  aoDeletarEvento,
  aoAlterarStatus,
  aoFiltroAplicado,
}: {
  aoAlterarStatus: (id: number) => void;
  aoDeletarEvento: (id: number) => void;
  aoFiltroAplicado: (data: Date | null) => void;
}) => {
  const events = useEventList();

  return (
    <section>
      <Filtro aoFiltroAplicado={aoFiltroAplicado} />
      <div className={style.Scroll}>
        {events.map((event) => (
          <Evento aoAlterarStatus={aoAlterarStatus} event={event} key={event.id} />
        ))}
      </div>
    </section>
  );
};

export default ListaDeEventos;
