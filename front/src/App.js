import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

//componentes
import NuevoServicio from "./components/NuevoServicio";
import Servicios from "./pages/Servicios";
import Transacciones from "./pages/Transacciones";
import Overview from './pages/Overview';
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
        <Route exact path="/overview" component={Overview} />
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
          path="/transacciones/:id"
          component={() => <Transacciones idServicio={idServicio} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
