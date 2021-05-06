import React, {Fragment} from "react";
import {Link} from 'react-router-dom';
import '../App.css';

const Servicios = ({ service, setIdServicio }) => {

    function setId(id) {
        console.log(id);
      }
    

  return (
    <Fragment>
      <div className="container d-flex flex-column">
        <h1 className="titulos mt-5">AJ BarberShop</h1>
        <h3 className="titulos mt-3">Servicios</h3>
        <div className='row'>

        <Link to={"/nuevoservicio"} className="col-md-8 mx-auto btn btn-nuevo mt-5 mb-5">
          Agregar nuevo servicio
        </Link>


        <div className="col-md-8 mx-auto">
          <div className="list-group">
            {service.map((servicio) => (
              <Link className="list-group-item list-group-item-action flex-column align-items-start" key={servicio.id}  to={'/transacciones'}>
                  <div className='d-flex w-100 justify-content-between mb-4 flex-column'>
                <h3>{servicio.nombre}</h3>
                <p>Duracion: {servicio.duracion} minutos</p>
                <p>Descripcion: {servicio.descripcion}</p>
                <p>Costo: {servicio.costo} mxn</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Servicios;
