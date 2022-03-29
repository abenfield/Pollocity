import { ReactNode } from 'react';
import Topbar from './Topbar'
import { 
  Link as RouterLink, 
  BrowserRouter as Router,
} from 'react-router-dom'
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import {
  FiHome,
  FiPackage,
  FiEdit,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import { IconType } from 'react-icons';

const navItems: NavItem[] = [
    {
        title: 'Browse',
        url: '/',
        type: 'origin',
        icon: FiHome,
    },
    {
        title: 'My Listings',
        url: '/my-listings',
        type: 'origin',
        icon: FiPackage,
    },
    {
      title: 'Post Listing',
      url: '/post',
      type: 'origin',
      icon: FiEdit,
    }
  ]

interface NavItem {
    title: string,
    url: string,
    type: string,
    icon: IconType,
  };
  
interface NavItems extends Array<NavItem>{}
  

interface LinkItemProps {
  name: string;
  icon: IconType;
}

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Topbar onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Market 
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {navItems.map((link) => (
        <NavItem 
          key={link.title} 
          icon={link.icon}
          type={link.type}
          link={link.url}
          title={link.title}>
        </NavItem>
      ))}
    </Box>
  );
};

function LinkNode({type, link, title, children}) {
  if (type == 'origin') {
    return (
      <RouterLink 
        to = {link}
        style= {{textDecoration: 'none'}}>
        {children}
      </RouterLink>
    )
  } else {
    return (
      <Link
        href = {link}
        style={{ textDecoration: 'none' }}>
      {children}
      </Link>
    )

  }
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  title: string;
  link: string;
  type: string,
}

const NavItem = ({ icon, link, type, title}: NavItemProps) => {

  return (
    <LinkNode
      type = {type}
      link = {link}
      title = {title}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {title}
      </Flex>
      </LinkNode>
  );
};

