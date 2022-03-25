import React, { FormEvent } from "react";

import { Container, Input } from "./styles";

const SearchBar: React.FC = () => {
  function handleSearchPokemon(event: FormEvent) {
    event.preventDefault()
    console.log("")
  }

  return (
    <Container>
      <Input
        type="text"
        placeholder="Buscar pokemon"
        onChange={handleSearchPokemon}
      />
    </Container>
  );
};

export default SearchBar;
