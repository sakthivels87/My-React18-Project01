import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const GameFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const filterKeys = [
    "Relevance",
    "Date added",
    "Name",
    "Release Date",
    "Popularity",
    "Average Rating",
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {selectedFilter || "Relevance"}
      </MenuButton>
      <MenuList>
        {filterKeys.map((option) => (
          <MenuItem key={option} onClick={() => setSelectedFilter(option)}>
            {option}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GameFilter;
