import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { obtenerArticulo } from "../../dao/BlogDao";
import ReactLoading from "react-loading";

export default function Articulo() {
  const { articuloId } = useParams();
  const { articulo, isLoading } = useArticulo(articuloId);

  function secciones() {
    return articulo.secciones.map((seccion, index) => (
        <>
          <h2>{seccion.titulo}</h2>
          <p>{seccion.texto}</p>
        </>
      ))
  }

  return (
    <div>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center">
          <ReactLoading type="cubes" color="00695c" />
        </div>
      ) : (
        <div className="container shadow rounded-3 p-3 text-start bg-white">
          <h1>{articulo.titulo}</h1>
          <p>{articulo.descripcion}</p>
          {secciones()}
          <p>{articulo.autor}</p>
        </div>
      )}
    </div>
  );
}

function useArticulo(id) {
  const [articulo, setArticulo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await obtenerArticulo(id);
        setArticulo(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return { articulo, isLoading };
}
