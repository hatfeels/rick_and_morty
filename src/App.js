import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import styles from "./App.module.css";

import Error404 from "./components/errors/E404.jsx";
import Cards from "./components/cards/Cards.jsx";
import NavBar from "./components/nab-bar/NavBar";
import About from "./components/about/About";
import Detail from "./components/cards/card/Detail";
import Form from "./components/form/Form";
import Favorites from "./components/favorites/Favorites";

const EMAIL = "";
const PASSWORD = "";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
  };

  return (
    <div className={styles.App}>
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail:id" element={<Detail />} />
      </Routes>
      {pathname !== "/" && <NavBar onSearch={onSearch} />}
    </div>
  );
};

export default App;
