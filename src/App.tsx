import { useState } from 'react'

import GameGrid from './components/GameGrid'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenres'
import PlatformSelect from './components/PlatformSelect'
import { Platform } from './hooks/useData'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}>
    <GridItem area='nav'>
      <NavBar />
    </GridItem>
    <Show above='lg'>
      <GridItem area='aside' paddingX={5}>
        <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
      </GridItem>
    </Show>
    <GridItem area='main'>
      <PlatformSelect selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)} />
      <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
    </GridItem>
  </Grid>
}

export default App
