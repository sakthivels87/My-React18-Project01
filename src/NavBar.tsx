import { HStack, Image, Input } from "@chakra-ui/react";
import logo from "./assets/logo.webp";
import ToggleColorMode from "./ToggleColorMode";
import SearchInput from "./components/SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack p={4}>
      <Image boxSize="60px" src={logo} alt="Logo Image" />
      <SearchInput onSearch={onSearch} />
      <ToggleColorMode />
    </HStack>
  );
};

export default NavBar;
