import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/7416939.webp'
import ColorModeSwitch from './ColorModeSwitch'
import FilterInput from './FilterInput'
const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} padding={10}>
      <Image src={logo} boxSize='60px' />
      <FilterInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar