import { HStack, Image, Input } from "@chakra-ui/react";
import logo from "./assets/logo.webp";
import ToggleColorMode from "./ToggleColorMode";

const NavBar = () => {
  return (
    <HStack p={4}>
      <Image boxSize="60px" src={logo} alt="Logo Image" />
      <Input type="text" />
      <ToggleColorMode />
    </HStack>
  );
};

export default NavBar;
