import { HStack, Image, Input } from "@chakra-ui/react";
import logo from "./assets/logo.webp";
import ToggleColorMode from "./ToggleColorMode";
import SearchInput from "./components/SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack p={4}>
      <Link to="/">
        <Image boxSize="60px" src={logo} alt="Logo Image" objectFit="cover" />
      </Link>
      <SearchInput />
      <ToggleColorMode />
    </HStack>
  );
};

export default NavBar;
