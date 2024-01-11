import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/7416939.webp'
import ColorModeSwitch from './ColorModeSwitch'
import FilterInput from './FilterInput'

interface Props {
  onFilter: (filterText: string) => void;
}

const NavBar = ({ onFilter }: Props) => {
  return (
    <HStack justifyContent={'space-between'} padding={10}>
      <Image src={logo} boxSize='60px' />
      <FilterInput onFilter={onFilter} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar