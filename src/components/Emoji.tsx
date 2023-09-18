import { Image, ImageProps } from "@chakra-ui/react";
import Bullseye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import Thumbsup from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMaps: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "Meh...", boxSize: "25px" },
    4: { src: Thumbsup, alt: "Thumbs up!!!", boxSize: "25px" },
    5: { src: Bullseye, alt: "Bulls Eye", boxSize: "35px" },
  };
  return <Image {...emojiMaps[rating]} marginTop={1} />;
};

export default Emoji;
