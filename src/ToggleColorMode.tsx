import React from "react";
import { Switch, Button, useColorMode } from "@chakra-ui/react";

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Switch
        onClick={toggleColorMode}
        colorScheme="green"
        onChange={toggleColorMode}
      >
        Mode
      </Switch>
    </div>
  );
};

export default ToggleColorMode;
