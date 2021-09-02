import { Link } from "react-router-dom";

const ArticuloItem = ({ data }) => {
    const url="/blog/"+data.id;

  return (
    <div className="card shadow text-start mb-3">
      <div className="card-body">
          
        <h5 className="card-title"><Link to={url}>{data.titulo}</Link></h5>
        <h6 className="card-subtitle mb-4 text-muted">{data.fechaPublicacion}</h6>
        <p className="card-text">{data.descripcion}</p>
        <p className="card-text text-end text-muted">{data.autor}</p>
      </div>
    </div>
  );
};

export default ArticuloItem;
