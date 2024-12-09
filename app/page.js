"use client"
import Link from "next/link";
import Image from "next/image";

const handleSearch = () => {


}

export default function Page() {
  return (
    <main>
      <h1>PokeApp</h1>
      <form onSubmit={(event => handleSearch(event))}>
        <input
          required
          placeholder="Enter Pokemon Name Here"
          id="name"
          type="text"/>
        <input type="submit" value="Submit"/>
      </form>
      
    </main>
  );
}
