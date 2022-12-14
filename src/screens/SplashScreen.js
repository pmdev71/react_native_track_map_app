import React from 'react';
import {Divider, Flex, Text, Box} from 'native-base';

const SpalashScreen = () => {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Flex direction="row" h="58" p="4">
        <Text>Simple</Text>
        <Divider bg="emerald.500" thickness="2" mx="2" orientation="vertical" />
        <Text>Easy</Text>
        <Divider bg="indigo.500" thickness="2" mx="2" orientation="vertical" />
        <Text>Beautiful</Text>
      </Flex>
    </Box>
  );
};

export default SpalashScreen;
