import ArticuloItem from "./ArticuloItem";

const ArticuloList = ({ data }) => {
  const articulos = data.map((articulo, index) => (
    <ArticuloItem data={articulo} key={articulo.id}/>
  ));

  return (
    <div className="container p-3">
      <div className="col">{articulos}</div>
    </div>
  );
};

export default ArticuloList;
