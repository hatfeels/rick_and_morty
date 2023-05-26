// imports librerias
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

// imporst Modulos
import styles from "./App.module.css";

import Error404 from "./components/errors/E404.jsx";
import Cards from "./components/cards/Cards.jsx";
import NavBar from "./components/nab-bar/NavBar";
import About from "./components/about/About";
import Detail from "./components/cards/card/Detail";
import Form from "./components/form/Form";
import Favorites from "./components/favorites/Favorites";


const App = () => {
  
  // definiciones de variables y estados
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  // FN de comportamiento
  const login = async (userData) => {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";

    try {
      const response = await axios.get(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = response.data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      window.alert(error.message);
    }
  };

  const onSearch = async (id) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/rickandmorty/character/${id}`
        );
        setCharacters((oldChars) => [...oldChars, data]);
      } catch (error) {
      window.alert(error.message);
    }
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
      );
    };
    
    useEffect(() => {
      !access && navigate("/");
    }, [access]);
    
//render
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
