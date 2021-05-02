import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

//componentes
import NuevoServicio from "./components/NuevoServicio";
import Servicios from "./components/Servicios";
import Transacciones from "./components/Transacciones";
function App() {
  //State de la aplicacion
  const [service, setService] = useState([]);
  const [consulta, setConsulta] = useState(true);
  const [idServicio, setIdServicio] = useState();

  useEffect(() => {
    if (consulta) {
      const consultarAPI = async () => {
        const { data } = await axios.get("http://localhost:4343/api");
        setService(data);
        setConsulta(false);
      };

      consultarAPI();
    }
  }, [consulta]);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/servicios"
          component={() => (
            <Servicios service={service} setIdServicio={setIdServicio} />
          )}
        />
        <Route
          exact
          path="/nuevoservicio"
          component={() => <NuevoServicio setConsulta={setConsulta} />}
        />
        <Route
          exact
          path="/transacciones"
          component={() => <Transacciones idServicio={idServicio} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
