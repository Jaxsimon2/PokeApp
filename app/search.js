"use client";

import {useState, useEffect } from "react";
<<<<<<< Updated upstream
    


const searchPokemon = ({ searchWord }) =>{
    
  const [pokemon, setPokemon] = useState([]); 

  const fetchPokemon = async (searchWord) => {
=======

const searchPokemon = ({ searchWord }) => {

    const [pokemon, setPokemon] = useState([]); 

  const fetchPokemon = async (searchWord) => {

>>>>>>> Stashed changes
    try {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${searchWord}`
        );

        const data = await response.json();

<<<<<<< Updated upstream
        return data || []; //.seachResults
=======
        return data || [];
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    <div>
        <h2>{searchWord}</h2>
        {/* <p>{pokemon.name}</p> */}
=======
    <div className='flex flex-wrap m-4'>
        <h2>{searchWord}</h2>
        <p>Name: </p>
        <p>{pokemon.name}</p>
        <p>Types: </p>
        <p>{pokemon.types}</p>
        <p>Abilities: </p>
        <p>{pokemon.Abilities}</p>
>>>>>>> Stashed changes
    </div>
);
};
export default searchPokemon;