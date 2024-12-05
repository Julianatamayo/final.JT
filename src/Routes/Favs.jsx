import { useEffect, useState } from "react";
import Card from "../Components/Card";

const Favs = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <main>
      <h1>Favoritos</h1>
      <div className="card-grid">
        {favorites.map((fav, index) => (
          <Card
            key={index}
            name={fav.name}
            username={fav.username}
            id={index}
          />
        ))}
      </div>
    </main>
  );
};

export default Favs;
