"use client"

import Image from "next/image";
import SearchPokemon from "./search";
import {useState} from "react";

export default function Page() {

  const [searchPhrase, setSearchPhrase] = useState("Ledian");

  const submitSearch = (event) => {
    event.preventDefault();
  }
  
  const handleSearch = (event) => {
    let searchPhrase = event.target.value;
    setSearchPhrase(searchPhrase);
  }

  return (
    <main className="flex flex-col bg-local justify-center m-2 bg-cover w-72 bg-black w">
      <h1 className="m-2 text-xl text-white">PokeApp</h1>
      <form onSubmit={(event => submitSearch(event))}>
        <input className="p-2 m-2 w-64 bg-white text-black border-2 border-black border-solid"
          required
          placeholder="Enter Pokemon Name Here"
          id="name"
          type="text"
          onChange={(event) => handleSearch(event)}/>
        <input className="w-24 m-2 p-2 bg-black text-white border-2 border-white border-solid" type="submit" value="Submit"/>
      </form>
      <SearchPokemon searchWord={searchPhrase}/>
    </main>
  );
}
