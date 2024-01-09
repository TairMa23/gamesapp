import { useState } from 'react'

import GameGrid from './components/GameGrid'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenres'
import PlatformSelect from './components/PlatformSelect'
import { Platform } from './hooks/useData'

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}>
    <GridItem area='nav'>
      <NavBar />
    </GridItem>
    <Show above='lg'>
      <GridItem area='aside' paddingX={5}>
        <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
      </GridItem>
    </Show>
    <GridItem area='main'>
      <PlatformSelect selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
      <GameGrid gameQuery={gameQuery} />
    </GridItem>
  </Grid>
}

export default App
