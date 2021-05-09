import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import axios from "axios";

const Overview = () => {
  const fecha = new Date();
  const mes = fecha.getMonth() + 1;
  const hoy = (`${mes}/${fecha.getDate()}/${fecha.getFullYear()}`);

  const [registros, setRegistros] = useState({
    ingresos: 0,
    egresos: 0,
    total: 0,
  });

  useEffect(() => {
    const registros = async () => {
      const { data } = await axios.post(`http://localhost:4343/total`,
        {hoy}
      );
      if (data[0].ingresos !== null) {
        setRegistros({ ...registros, ingresos: data[0].ingresos });
      }
    };

    registros();
  }, []);

  return (
    <Fragment>
      <div className="container d-flex align-items-center flex-column">
        <h1 className="titulos mt-5">AJ BarberShop </h1>
        <h3 className="titulos mt-3">Overview</h3>

<div className='card'>
  <h3 className='titulos'>Ingresos totales</h3>
  <p>$ {registros.ingresos}</p>
</div>


      </div>
    </Fragment>
  );
};

export default Overview;
