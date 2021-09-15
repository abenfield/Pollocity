import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { 
  Link as RouterLink, 
  BrowserRouter as Router,
} from 'react-router-dom'
import { Routes, NavItem, NavItems } from './Routes';

interface NavLinkProps {
  navItem: NavItem;
}

const NavLink = ({navItem}: NavLinkProps) => {
  
let routerLink;

  navItem.type == "origin" ?
  routerLink = <RouterLink to = {navItem.url}>{navItem.title}</RouterLink>
: 
routerLink = navItem.title;

  return (
    <Link
      px={2}
      py={1}
      href = {navItem.type == 'remote' ? navItem.url : ''}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      hr>
    {routerLink} 
  </Link>
);
  }

interface NavigationProps {
  navItems: NavItems;
}

const Navigation = ({navItems}: NavigationProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Pollocity</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {navItems.map((link) => (
                <NavLink 
                  key={link.title}
                  navItem={link}
                ></NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'data:image/jpeg;base64,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'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuDivider />
                <MenuItem>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {navItems.map((link) => (
                <NavLink 
                key={link.title}
                navItem={link}/>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}

export default Navigation;