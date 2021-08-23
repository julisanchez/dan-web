import React, { useState, useEffect } from "react";
import RegistrarPedidoForm from "./RegistrarPedidoForm";
import { useAlert } from "react-alert";
import ReactLoading from "react-loading";
import { obtenerProductos } from "../../dao/ProductoDao";
import { registrarPedido } from "../../dao/PedidoDao";
import ProductosList from "./ProductosList";
import CarroTable from "./CarroTable";
import handleError from "../../utils/handleError";

const GestionPedidos = () => {
  const alert = useAlert();

  const [formState, setFormState] = useState({
    fechaPedido: "",
    obra: { id: "" },
  });
  const [carroState, setCarroState] = useState([]);
  const { productos, isLoading } = useProductos();

  const handleChange = (item) => (e) => {
    setFormState({ ...formState, [item]: e.target.value });
  };

  const handleObraId = (e) => {
    setFormState({ ...formState, obra: { id: parseInt(e.target.value) } });
  };

  const onSubmit = (formData) => {
    const data = { ...formData, detalle: carroState };

    console.log(data);

    registrarPedido(data)
      .then((res) => {
        console.log(res);

        alert.success("Pedido creado!");
      })
      .catch((err) => {
        handleError(err, alert);
      });
  };

  const onAdd = (data) => {
    var carroTemp = [...carroState];

    const index = carroTemp.findIndex((e) => e.producto.id === data.producto.id);

    if (index !== -1)
      carroTemp[index] = {
        ...data,
        cantidad: carroTemp[index].cantidad + data.cantidad,
      };
    else carroTemp.push(data);

    setCarroState(carroTemp);
  };

  return (
    <>
      {carroState.length > 0 && (
        <>
          <div className="mb-3">
            <RegistrarPedidoForm
              state={formState}
              handleChange={handleChange}
              handleObraId={handleObraId}
              onSubmit={onSubmit}
            />
          </div>
          <CarroTable data={carroState} />
        </>
      )}
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center">
          <ReactLoading type="cubes" color="00695c" />
        </div>
      ) : (
        <ProductosList data={productos} onAdd={onAdd} />
      )}
    </>
  );
};

function useProductos() {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await obtenerProductos();
        setProductos(response.data);

        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return { productos, isLoading };
}

export default GestionPedidos;
