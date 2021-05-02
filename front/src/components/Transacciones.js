import React from "react";
import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Transacciones = ({ idServicio }) => {
  const [servicio, setServicio] = useState([]);

  
  useEffect(() => {
    
    const consultarAPI = async () => {
      const { data } = await axios.get(
        `http://localhost:4343/api/6`
      );
      setServicio(
          ...servicio,
          data);
    };

    consultarAPI();
  }, []);

  return (
    <Fragment>
       
       <div className="container nuevo-servicio mt-5">
          <form className="form-nuevo">
            <label>Nombre de servicio</label>
            <input
              type="text"
              placeholder="Nombre del servicio"
              name="nombre"
              id="nombre"
              value={servicio.nombre}
              disabled={true}
            ></input>
            <label>Duracion</label>
            <input
              type="number"
              placeholder="Duracion en minutos"
              name="duracion"
              id="duracion"
              value={servicio.duracion}
            ></input>
            <label>Costo</label>
            <input
              type="number"
              placeholder="Costo"
              name="costo"
              id="costo"
              value={servicio.costo}
            ></input>
            {/**/}
            <input
              className="btn btn-nuevo"
              type="submit"
              value="Agregar Servicio"
            ></input>
            <Link className="btn btn-nuevo" to={"/servicios"}>
              Regresar
            </Link>
          </form>
        </div>
    </Fragment>
  );
};

export default Transacciones;
