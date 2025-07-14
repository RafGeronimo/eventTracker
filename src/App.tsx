import React, { useState } from "react";
import style from "./App.module.scss";
import Card from "./components/Card";
import Formulario from "./components/Formulario";
import { IEvent } from "./interfaces/IEvento";
import Calendario from "./components/Calendario";
import ListaDeEventos from "./components/ListaDeEventos";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { eventList } from "./atom";

function App() {
  const events = useRecoilState(eventList);

  const [filtro, setFiltro] = useState<Date | null>();

  const adicionarEvento = (event: IEvent) => {
    event.id = Math.round(new Date().getTime() / 1000);
    events.push(event);
    console.log(events);

    //setEventos([...eventos]);
  };
  const alterarStatusEvento = (id: number) => {
    // const evento = eventos.find((evento) => event.id === id);
    // if (evento) {
    //   event.completed = !event.completed;
    // }
    // setEventos([...eventos]);
  };
  const deletarEvento = (id: number) => {
    //setEventos([...eventos.filter((evento) => event.id !== id)]);
  };

  const aplicarFiltro = (data: Date | null) => {
    setFiltro(data);
  };

  const filtrados = !filtro
    ? events
    : events.filter((event) => filtro!.toISOString().slice(0, 10) === event.initialDate.toISOString().slice(0, 10));

  return (
    <RecoilRoot>
      <div className={style.App}>
        <div className={style.Coluna}>
          <Card>
            <Formulario aoSalvar={adicionarEvento} />
          </Card>
          <hr />
          <Card>
            <ListaDeEventos
              aoFiltroAplicado={aplicarFiltro}
              aoAlterarStatus={alterarStatusEvento}
              aoDeletarEvento={deletarEvento}
              events={filtrados}
            />
          </Card>
        </div>
        <div className={style.Coluna}>
          <Calendario eventos={eventos} />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
