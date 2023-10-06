import styles from "./GenreList.module.css";

import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImage from "../services/no-image";

interface Props {
  onSelectedGenre: (genreId: number) => void;
  selectedGenreId?: number;
}
const GenereList = ({ onSelectedGenre, selectedGenreId }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
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
      <Heading as="h1" marginY={5}>
        Genres
      </Heading>
      <List spacing={3}>
        {data?.results.map((genre) => (
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
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                onClick={() => onSelectedGenre(genre.id)}
                whiteSpace="normal"
                textAlign="left"
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
