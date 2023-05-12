import axios from "axios"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const Detail =()=>{
    const {id} = useParams();
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
   
   
    return(
        <div>
            <img src={character.image} alt=''/>
            <h1>Name: {character.name && character.name}</h1>
            <p>{character.status && character.status}</p>
            <p>{character.species && character.species}</p>
            <p>{character.gender && character.gender}</p>
            <p>{character.origin?.name && character.origin?.name}</p> 
            <Link to='/home'>
                <button>Volver</button>
            </Link>
        </div>
    ) // ?.algo => condicional chaining
}

export default Detail