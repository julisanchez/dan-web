const PagoRow = ({ data }) => (
  <tr>
    <th scope="row">{data.id}</th>
    <td>{data.fechaPago}</td>
    <td>{data.medio.observacion}</td>
  </tr>
);

export default PagoRow;
