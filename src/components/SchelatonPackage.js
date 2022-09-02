import React from 'react';
import {Box, Center, HStack, Skeleton, VStack} from 'native-base';

const SchelatonPackage = () => {
  return (
    <Box flex={1}>
      <Center w="100%" mt={2}>
        <HStack
          w="90%"
          maxW="400"
          borderWidth="1"
          space={8}
          rounded="md"
          _dark={{
            borderColor: 'coolGray.500',
          }}
          _light={{
            borderColor: 'coolGray.200',
          }}
          p="2">
          <Skeleton flex="1" h="50" rounded="md" startColor="indigo.300" />
          <VStack flex="5" space="2">
            <Skeleton h="5" startColor="amber.300" />

            <HStack space="2" alignItems="center">
              <Skeleton size="5" rounded="full" />
              <Skeleton h="3" flex="2" rounded="full" />
              <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
            </HStack>
          </VStack>
        </HStack>
      </Center>
    </Box>
  );
};

export default SchelatonPackage;
