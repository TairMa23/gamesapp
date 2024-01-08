import React from 'react'
import useGenres, { Genre } from '../hooks/useGenres';
import { Button, HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-crop';

interface Props {
    onSelectGenre: (genre: Genre | null) => void;
    selectedGenre: Genre | null;
}
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { data, error } = useGenres();
    return (
        <>
            {error && <p>{error}</p>}
            <List>
                {
                    data.map(genre =>
                        <ListItem key={genre.id} paddingY='7px'>
                            <HStack>
                                <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                                <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
                            </HStack>
                        </ListItem>)
                }
            </List>
        </>

    )
}

export default GenreList