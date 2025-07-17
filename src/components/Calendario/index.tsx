import React from "react";
import { IEvent } from "../../interfaces/IEvento";
import style from "./Calendario.module.scss";
import ptBR from "./localizacao/ptBR.json";
import Kalend, { CalendarEvent, CalendarView, OnEventDragFinish } from "kalend";
import "kalend/dist/styles/index.css";
import { useRecoilValue } from "recoil";
import { eventList } from "../../atom";
import useUpdateEvent from "../../hooks/useUpdateEvent";

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
  const updateEvent = useUpdateEvent();
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

  const onEventDragFinish: OnEventDragFinish = (prevKalendEvent: CalendarEvent, updatedKalendEvent: CalendarEvent) => {
    const event = events.find((e) => e.id === updatedKalendEvent.id);
    if (event) {
      const updatedEvent: IEvent = {
        ...event,
        initialDate: new Date(updatedKalendEvent.startAt),
        endDate: new Date(updatedKalendEvent.endAt),
      };
      updateEvent(updatedEvent);
    }
  };

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
        onEventDragFinish={onEventDragFinish}
      />
    </div>
  );
};

export default Calendario;
