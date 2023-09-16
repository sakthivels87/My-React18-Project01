import styles from "./GenreList.module.css";

import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImage from "../services/no-image";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenereList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, errors, isLoading } = useGenres();

  if (errors) return null;
  if (isLoading)
    return (
      <Spinner
        size="lg"
        thickness="5px"
        speed="0.63s"
        emptyColor="green.300"
        color="green.800"
      />
    );
  return (
    <>
      <h2 className={styles.heading}>Genres</h2>
      <List spacing={3}>
        {data.map((genre) => (
          <ListItem key={genre.id} className={styles.listGroupItem}>
            <HStack>
              <Image
                src={getCroppedImage(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                marginRight={3}
              />
              <Button
                variant="link"
                fontSize="lg"
                fontWeight={selectedGenre === genre ? "bold" : "normal"}
                onClick={() => onSelectedGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenereList;
