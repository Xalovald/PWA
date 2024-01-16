import { useEffect, useState } from "react";

function Card(props) {
    const URL =  'https://pokeapi.co/api/v2/pokemon/ditto';
    const [pokemon, setPokemon] = useState("");


    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        setPokemon(data);
    });
    
    if(pokemon)
    {
    <div>
        <h1>{pokemon.name}</h1>
    </div>
    }else {
    return(
        <div>
            Chargement
        </div>
    );
    }
    
}
export default Card;