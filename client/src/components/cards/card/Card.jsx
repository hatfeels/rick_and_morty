import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

import styles from "./card.module.css";

import { addFav, removeFav } from "../../../Redux/action.js";

const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) => {
  const [isFav, setFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      removeFav(id);
    } else {
      addFav({ id, name, status, species, gender, origin, image, onClose });
      setFav(!isFav);
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.card}>
      <button
        onClick={() => {
          onClose(id);
        }}
      >
        X
      </button>
      <p>{name}</p>
      <Link to={`/Detail${id}`}>
        <img src={image} alt="" className={styles.image} />
      </Link>
      {<button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (char) => dispatch(addFav(char)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
