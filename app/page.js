"use client"
import Link from "next/link";
import Image from "next/image";
import searchPokemon from "./search";
import {useState} from "react";

export default function Page() {

  const [searchWord, setSearchWord] = useState("Ledian");

  const submitSearch = (event) => {
    event.preventDefault();
    searchPokemon(searchWord);
  }
  
  const handleSearch = (event) => {
    let searchWord = event.target.value;
    setSearchWord(searchWord);
  }

  return (
    <main>
      <h1>PokeApp</h1>
      <form onSubmit={(event => submitSearch(event))}>
        <input
          required
          placeholder="Enter Pokemon Name Here"
          id="name"
          type="text"
          onChange={(event) => handleSearch(event)}/>
        <input type="submit" value="Submit"/>
      </form>
      
    </main>
  );
}
