import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorite = favorites.some((fav) => fav.username === username);

    if (!isFavorite) {
      favorites.push({ username, name });
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert(`${name} ha sido agregado a favoritos!`);
    } else {
      alert(`${name} ya está en favoritos!`);
    }
  };

  const imageUrl = `/images/doctor.jpg`;

  return (
    <Link to={`/dentist/${id}`} className="card">
      {" "}
      <img src={imageUrl} alt={`${name}`} className="card" />
      <h2>{name}</h2>
      <p>@{username}</p>
      <button onClick={addFav} className="favButton">
        ⭐
      </button>
    </Link>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
