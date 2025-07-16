import React from "react";
import Evento from "../Evento";
import Filtro from "../Filtro";
import style from "./ListaDeEventos.module.scss";
import { useRecoilValue } from "recoil";
import { eventList } from "../../atom";

const ListaDeEventos: React.FC<{
  aoAlterarStatus: (id: number) => void;
  aoDeletarEvento: (id: number) => void;
  aoFiltroAplicado: (data: Date | null) => void;
}> = ({ aoDeletarEvento, aoAlterarStatus, aoFiltroAplicado }) => {
  const events = useRecoilValue(eventList);

  console.log("eve", events);

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
