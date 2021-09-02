import ArticuloList from "./ArticuloList";
import React, { useEffect, useState } from "react";
import { obtenerArticulos } from "../../dao/BlogDao";
import ReactLoading from "react-loading";

const Blog = () => {
  const { articulos, isLoading } = useBlog();

  return (
    <div>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center">
          <ReactLoading type="cubes" color="00695c" />
        </div>
      ) : (
        <ArticuloList data={articulos}/>
      )}
    </div>
  );
};

function useBlog() {
  const [articulos, setArticulos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await obtenerArticulos();
        setArticulos(response.data);

        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return { articulos, isLoading };
}

export default Blog;
