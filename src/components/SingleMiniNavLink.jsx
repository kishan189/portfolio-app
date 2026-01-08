import { Link, Text } from '@chakra-ui/react'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll';

const SingleMiniNavLink = ({linkName,linkId,onClose,className}) => {
  return (
    <ScrollLink onClick={onClose} to={linkId} smooth={true} duration={500}>
        <Link as="span" cursor="pointer" className={className}>
            <Text fontSize={['md', 'md', 'md', 'md']} >{linkName}</Text>
        </Link>
    </ScrollLink>
  )
}

export default SingleMiniNavLink
