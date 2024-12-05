import { useEffect, useState, useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const { theme } = useContext(ContextGlobal);

  useEffect(() => {
    const fetchDentists = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setDentists(data);
      } catch (error) {
        console.error("Error fetching dentists:", error);
      }
    };

    fetchDentists();
  }, []);

  return (
    <main className={`home ${theme}`}>
      <h1>Home</h1>
      <div className="card-grid">
        {dentists.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
