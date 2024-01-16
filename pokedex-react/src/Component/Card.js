import { useEffect, useState } from "react";
import '../Card.css';

function Card(props) {
    
    const [pokemon, setPokemon] = useState(null);
    const [number, setNumber] = useState(props.number || 1);
    const URL =  `https://pokeapi.co/api/v2/pokemon/${number}`;

    function loadData(){
        fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            setPokemon(data);
        });
    }
        
    useEffect(() => {
        loadData();
    }, [number])

    if(pokemon)
    {
        const imageStyle = {
            height: '100px', // Set the desired height
            width: '100px', // Set the desired width
          };

        return (
        <div className="pokemon-card">
            <img 
            src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} 
            style={imageStyle} />
            <h1>{pokemon.name}</h1>
            <hr />
        </div>
        );
    }
    else {
    return (
        <div>
            Chargement
        </div>
    );
    }
    
}
export default Card;