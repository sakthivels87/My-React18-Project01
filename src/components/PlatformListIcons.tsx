import React from "react";
import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaAndroid,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaApple,
} from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons/lib/esm/iconBase";
interface Props {
  platforms: Platform[];
}

const PlatformListIcons = ({ platforms = [] }: Props) => {
  const iconsMatch: { [key: string]: IconType } = {
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    pc: FaWindows,
    android: FaAndroid,
    linux: FaLinux,
    mac: FaApple,
    web: BsGlobe,
  };
  return (
    <HStack spacing={1} marginY={2}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconsMatch[platform.slug]}
          color="gray.400"
        />
      ))}
    </HStack>
  );
};

export default PlatformListIcons;
