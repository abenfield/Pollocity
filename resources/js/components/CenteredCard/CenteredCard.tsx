/*
    Displays centered Box usually containing Forms
*/

import { ReactNode } from 'react';

  import {
    Flex,
    Heading,
    Stack,
    useColorModeValue,
    Text,
    Box,
  } from '@chakra-ui/react';
  import { SmallCloseIcon } from '@chakra-ui/icons';
  
interface CenteredCardProps  {
    header?: string,
    subHeader? : string,
    children: ReactNode,
};

  export default function ({header, subHeader, children}:CenteredCardProps): JSX.Element {
    return (
      <Flex
        minH={'50vh'}
        align={'center'}
        justify={'center'}
        >
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>{header}</Heading>
                <Text fontSize={'lg'} color={'gray.600'}>
                  {subHeader}
                </Text>
            </Stack>
        <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
          <Stack spacing={4}>
            {children}
            </Stack>
        </Box>
      </Stack>
    </Flex>
    );
  }
 