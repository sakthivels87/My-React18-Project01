import { HStack, Image, Input } from "@chakra-ui/react";
import logo from "./assets/logo.webp";
import ToggleColorMode from "./ToggleColorMode";
import SearchInput from "./components/SearchInput";

const NavBar = () => {
  return (
    <HStack p={4}>
      <Image boxSize="60px" src={logo} alt="Logo Image" />
      <SearchInput />
      <ToggleColorMode />
    </HStack>
  );
};

export default NavBar;
