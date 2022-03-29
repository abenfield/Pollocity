import {
    Flex,
    Avatar,
    Box,
    useColorModeValue,
    HStack,
    VStack,
    Menu,
    MenuList,
    MenuItem,
    MenuButton,
    IconButton,
    Button,
    Text,
} from '@chakra-ui/react';

import {
    FiBell,
    FiChevronDown,
} from 'react-icons/fi';

import { 
    Link, 
  } from 'react-router-dom'


interface TopRightMenuProps {
    loggedIn: boolean,
  }
  



function TopRightMenu ({ loggedIn }: TopRightMenuProps) {
    
if (loggedIn) {
    return(
    <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">User</Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    )
} else {
    return(
        <VStack
            spacing={2}
        >
            <p>Sign up or Sign to List!</p>
            <HStack>
                <Link 
                    to = "/register"
                    style= {{textDecoration: 'none'}}>
                    <Button
                        colorScheme='orange'
                    >
                        Register
                    </Button>
                </Link>

                <Link 
                    to = "/login"
                    style= {{textDecoration: 'none'}}>
                    <Button
                        colorScheme='green'
                    >
                        Log in
                    </Button>
                </Link>         
            </HStack>
        </VStack>
    )
}



}

export default TopRightMenu;