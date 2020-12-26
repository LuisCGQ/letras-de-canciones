import React, { useState } from "react";

const Formulario = ({ guardarBusquedaLetra }) => {
  const [busqueda, guardarBusqueda] = useState({
    artista: "",
    cancion: "",
  });

  const [error, guardarError] = useState(false);

  const { artista, cancion } = busqueda;

  //funcion a cada inputa para leer su contenido
  const actualizarState = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const buscarInformacion = (e) => {
    e.preventDefault();
    if (artista.trim() === "" || cancion.trim() === "") {
      guardarError(true);
      return;
    }

    guardarError(false);
    //pasar al componente principal

    guardarBusquedaLetra(busqueda);
  };

  return (
    <div className="bg-info">
      <div className="container">
        {error ? (
          <p className="alert alert-danger text-center p-2">
            Todos los campos son obligatorios
          </p>
        ) : null}
        <div className="row">
          <form
            onSubmit={buscarInformacion}
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="text-center">
                Buscador Letras de Canciones
              </legend>
              <div className="row">
                <div className="col-md-6">
                  <label>Artista</label>
                  <input
                    type="text"
                    className="form-control"
                    name="artista"
                    placeholder="Nombre Artista"
                    onChange={actualizarState}
                    value={artista}
                  />
                </div>
                <div className="col-md-6">
                  <label>Canción</label>
                  <input
                    type="text"
                    className="form-control"
                    name="cancion"
                    placeholder="Nombre Canción"
                    onChange={actualizarState}
                    value={cancion}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
