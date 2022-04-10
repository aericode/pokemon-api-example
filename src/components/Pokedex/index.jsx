import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { List } from './styles';

const Pokedex = () => {
    const [pokeList, setPokeList] = useState([]);
    const [counter, setCounter] = useState(1)
    

    useEffect(()=> {

        axios.get(`https://pokeapi.co/api/v2/pokemon/${counter}`)
        .then(response => response.data)
        .then(response => {
            let newPokemon = {}
            newPokemon.id    = response.id;
            newPokemon.name  = response.name;
            newPokemon.image = response.sprites.front_default;
            
            return newPokemon
        })
        .then(pokemon => setPokeList([...pokeList, pokemon]))
        .then(function(){
            if(counter<350){
                setCounter(counter+1);
            }
        })
    }, [counter])
    


    return(
        <List>
            {pokeList.map(function(pokemon){
                return(
                    <button key={pokemon.id}>
                        <span>{pokemon.name}</span><br/>
                        <img src={pokemon.image} />   
                    </button>
                )
            })}
        </List>
    )

}

export default Pokedex;