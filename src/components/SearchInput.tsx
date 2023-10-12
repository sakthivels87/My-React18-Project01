import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current) setSearchText(searchRef.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input
          borderRadius={20}
          placeholder="Search Games..."
          variant="filled"
          ref={searchRef}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
