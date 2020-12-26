import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";

function App() {
  const [busquedaletra, guardarBusquedaLetra] = useState({});

  useEffect(() => {
    if (Object.keys(busquedaletra).lenght === 0) return;
    console.log("No se ejecuta");
    const consultarApiLetra = async () => {
      const { artista, cancion } = busquedaletra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
    };
    consultarApiLetra();
  }, [busquedaletra]);

  return (
    <Fragment>
      <Formulario guardarBusquedaLetra={guardarBusquedaLetra} />
    </Fragment>
  );
}

export default App;
