import React from "react";
import { IEvent } from "../../interfaces/IEvento";
import style from "./Calendario.module.scss";
import ptBR from "./localizacao/ptBR.json";
import Kalend, { CalendarView } from "kalend";
import "kalend/dist/styles/index.css";
import { useRecoilValue } from "recoil";
import { eventList } from "../../atom";

interface IKalendEvento {
  id?: number;
  startAt: string;
  endAt: string;
  summary: string;
  color: string;
}

const Calendario = () => {
  const eventosKalend = new Map<string, IKalendEvento[]>();
  const events = useRecoilValue(eventList);
  events.forEach((event) => {
    const chave = event.initialDate.toISOString().slice(0, 10);
    if (!eventosKalend.has(chave)) {
      eventosKalend.set(chave, []);
    }
    eventosKalend.get(chave)?.push({
      id: event.id,
      startAt: event.initialDate.toISOString(),
      endAt: event.endDate.toISOString(),
      summary: event.description,
      color: "blue",
    });
  });
  return (
    <div className={style.Container}>
      <Kalend
        events={Object.fromEntries(eventosKalend)}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        timeFormat={"24"}
        weekDayStart={"Monday"}
        calendarIDsHidden={["work"]}
        language={"customLanguage"}
        customLanguage={ptBR}
      />
    </div>
  );
};

export default Calendario;
