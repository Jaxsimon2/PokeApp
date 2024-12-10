"use client";

import {useState, useEffect } from "react";
    


const searchPokemon = ({ searchWord }) =>{
    
  const [pokemon, setPokemon] = useState([]); 

  const fetchPokemon = async (searchWord) => {
    try {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${searchWord}`
        );

        const data = await response.json();

        return data || []; //.seachResults
        } 

        catch (error) {
            console.error("No Pokemon Found: ", error);
            return [];
        }

      };

  const loadPokemon = async () => {
    const fetchedPokemon = await fetchPokemon(searchWord);
    setPokemon(fetchedPokemon); 
  };

  useEffect(() => {
    if (searchWord) {
      loadPokemon();
    }
  }, [searchWord]);


return (
    <div>
        <h2>{searchWord}</h2>
        {/* <p>{pokemon.name}</p> */}
    </div>
);
};
export default searchPokemon;