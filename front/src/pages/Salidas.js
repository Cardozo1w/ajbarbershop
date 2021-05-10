import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';

function Salidas() {
  return (
    <Fragment>
      <div className="contenedor-nav">
        <Navbar />
      </div>
      <div className="container d-flex align-items-center flex-column">
        <h1 className="titulos mt-5">AJ BarberShop </h1>
        <h3 className="titulos mt-3">Registrar Salida</h3>

        <div className="contenedor nuevo-servicio mt-5">
          <form className="form-nuevo" /*onSubmit={crearServicio}*/>
            <input
              type="text"
              placeholder="Nombre del movimiento"
              name="nombre"
              id="nombre"
              //onChange={actualizarState}
            ></input>
            <input
              type="text"
              placeholder="Descripcion"
              name="descripcion"
              id="descripcion"
              //onChange={actualizarState}
            ></input>
            <input
              type="number"
              placeholder="Cantidad a retirar"
              name="costo"
              id="costo"
              //onChange={actualizarState}
            ></input>
            {/**/}
            <input
              className="btn btn-nuevo mt-3"
              type="submit"
              value="Registrar salida"
            ></input>
            <Link className="btn btn-nuevo" to="/">
              Regresar
            </Link>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Salidas;
