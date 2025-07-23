import React, { useState } from "react";
import style from "./Formulario.module.scss";
import useAddEvent from "../../hooks/useAddEvent";

const Formulario = () => {
  const [descricao, setDescricao] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [horaFim, setHoraFim] = useState("");

  const addEvent = useAddEvent();

  const montarData = (data: string, hora: string) => {
    const dataString = data.slice(0, 10);
    return new Date(`${dataString}T${hora}`);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const newEvent = {
        description: descricao,
        initialDate: montarData(dataInicio, horaInicio),
        endDate: montarData(dataFim, horaFim),
        completed: false,
      };
      addEvent(newEvent);
      setDescricao("");
      setDataInicio("");
      setHoraInicio("");
      setDataFim("");
      setHoraFim("");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <form className={style.Formulario} onSubmit={onSubmit}>
      <h3 className={style.titulo}>Novo evento</h3>

      <label>Descrição</label>
      <input
        type="text"
        name="descricao"
        id="descricao"
        className={style.input}
        onChange={(event) => setDescricao(event.target.value)}
        placeholder="Descrição"
        value={descricao}
        autoComplete="off"
        required
      />

      <label>Data de início</label>
      <div className={style.inputContainer}>
        <input
          type="date"
          name="dataInicio"
          className={style.input}
          onChange={(event) => setDataInicio(event.target.value)}
          value={dataInicio}
          required
        />
        <input
          type="time"
          name="horaInicio"
          className={style.input}
          onChange={(event) => setHoraInicio(event.target.value)}
          value={horaInicio}
          required
        />
      </div>

      <label>Data de término</label>
      <div className={style.inputContainer}>
        <input
          type="date"
          name="dataFim"
          className={style.input}
          onChange={(event) => setDataFim(event.target.value)}
          value={dataFim}
          required
        />
        <input
          type="time"
          name="horaFim"
          className={style.input}
          onChange={(event) => setHoraFim(event.target.value)}
          value={horaFim}
          required
        />
      </div>

      <button className={style.botao}>Salvar</button>
    </form>
  );
};

export default Formulario;
