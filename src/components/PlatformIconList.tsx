import React from 'react'
import { Platform } from '../hooks/useGames'
import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid
} from 'react-icons/fa';
import { SiNintendo } from 'react-icons/si'
import { MdPhoneIphone } from 'react-icons/md'
import { BsGlobe } from 'react-icons/bs'
import { IconType } from 'react-icons';
import { HStack, Icon } from '@chakra-ui/react';


interface Props {
    platforms: Platform[]
}
const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation3: FaPlaystation,
        playstation4: FaPlaystation,
        playstation5: FaPlaystation,
        xbox360: FaXbox,
        'xbox-one': FaXbox,
        'nintendo-switch': SiNintendo,
        macos: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid
    }

    return (
        <HStack marginY={'10px'}>
            {
                platforms.map((platform) => (
                    <Icon as={iconMap[platform.slug]} color='gray.500' />
                ))
            }
        </HStack>
    )
}

export default PlatformIconList