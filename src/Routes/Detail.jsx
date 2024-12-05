import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";
const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const { theme } = useContext(ContextGlobal);

  useEffect(() => {
    const fetchDentistDetails = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        console.error("Error fetching dentist details:", error);
      }
    };

    fetchDentistDetails();
  }, [id]);

  if (!dentist) {
    return <p>Cargando...</p>;
  }

  return (
    <div className={`detail ${theme}`}>
      <h1>Detalles del Dentista</h1>

      {}
      <table>
        <thead>
          <tr>
            <th>Información</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nombre</td>
            <td>{dentist.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{dentist.email}</td>
          </tr>
          <tr>
            <td>Teléfono</td>
            <td>{dentist.phone}</td>
          </tr>
          <tr>
            <td>Sitio web</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
