const CarroRow = ({data})=>{
    return <tr key={data.producto.id}>
        <th scope="row">{data.producto.id}</th>
        <td>{data.producto.nombre}</td>
        <td>{data.cantidad}</td>
        <td>{data.cantidad * data.precio}</td>
    </tr>
}

export default CarroRow;