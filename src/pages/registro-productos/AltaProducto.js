import RegistrarProductoForm from "./RegistrarProductoForm";

const AltaProducto = () => {
  return <RegistrarProductoForm onSubmit={(d) => console.log(d)} />;
};

export default AltaProducto;
