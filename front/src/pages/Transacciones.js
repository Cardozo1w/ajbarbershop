import React from "react";
import { Fragment, useState, useEffect } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import axios from "axios";

const Transacciones = ({ match }) => {
  const [servicio, setServicio] = useState([]);
  const id = match.params.id;
  const history = useHistory();

  useEffect(() => {
    const consultarAPI = async () => {
      const { data } = await axios.get(`http://localhost:4343/api/${id}`);
      setServicio(...servicio, data);
    };

    consultarAPI();
  }, []);

  const actualizarState = (e) => {
    setServicio({
      ...servicio,
      [e.target.name]: e.target.value,
    });
  };

  const fecha = new Date();
  const mes = fecha.getMonth() + 1;
  const hoy = (`${mes}/${fecha.getDate()}/${fecha.getFullYear()}`);

  const nuevoRegistro = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("http://localhost:4343/api/registros", {
      idServicio: id,
      fecha: hoy,
      costo: servicio.costo
    });
    history.push('/servicios');
  };

  return (
    <Fragment>
      <div className="container mt-5 flex-column align-items-center justify-content-center">
        <h1 className="titulos mt-5">AJ BarberShop</h1>
        <h3 className="titulos mt-3">Ventas</h3>

        <form className="form-nuevo mx-auto" onSubmit={nuevoRegistro}>
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
            disabled={true}
          ></input>
          <label>Costo</label>
          <input
            type="number"
            placeholder="Costo"
            name="costo"
            id="costo"
            value={servicio.costo}
            onChange={actualizarState}
          ></input>
          {/**/}
          <input
            className="btn btn-nuevo mt-5"
            type="submit"
            value="Vender Servicio"
          ></input>
          <Link className="btn btn-nuevo" to={"/servicios"}>
            Regresar
          </Link>
        </form>
      </div>
    </Fragment>
  );
};

export default withRouter(Transacciones);