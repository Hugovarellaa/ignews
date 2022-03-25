/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import SearchBar from "../SearchBar";

import { Container, LogoImg } from "./styles";

const NavBar: React.FC = () => {
  return (
    <>
      <Container>
        <LogoImg
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="PokeApi-logo"
        />

        <SearchBar />
      </Container>
    </>
  );
};

export default NavBar;
