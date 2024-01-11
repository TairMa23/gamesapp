import {
    Button,
    HStack,
    Heading,
    Image,
    List,
    ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-crop";

interface Props {
    onSelectGenre: (genre: Genre | null) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { data, error } = useGenres();

    return (
        <>
            <Heading fontSize="2xl" marginBottom={5}>
                Genres
            </Heading>
            {error && <p>{error}</p>}
            <List>
                {data.map((genre) => (
                    <ListItem key={genre.id} paddingY="7px">
                        <HStack>
                            <Image
                                boxSize="32px"
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                                onClick={() => onSelectGenre(genre)}
                                fontSize="lg"
                                variant="link"
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
                <HStack marginTop={10}>
                    <Button
                        onClick={() => onSelectGenre(null)}
                        fontSize="lg"
                        variant="link"
                    >
                        Clear Filter
                    </Button>
                </HStack>
            </List>
        </>
    );
};
export default GenreList;
