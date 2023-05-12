import styles from "./searchBar.module.css";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {

   const [id, setId] = useState('');
   const handleChange = (event) => {
      setId(event.target.value)
   }

  return (
    <div className={styles.searchBar}>
      <input type="search" onChange={handleChange} value={id}/><br/>
      <button onClick={() => {onSearch(id)}}>Agregar</button>
    </div>
  );
};
export default SearchBar;
