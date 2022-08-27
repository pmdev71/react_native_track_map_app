import React from 'react';
import {
  Input,
  Text,
  Button,
  VStack,
  Heading,
  Center,
  Box,
  HStack,
  Link,
} from 'native-base';

import {useNavigation} from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  return (
    <Center w="100%">
      <Box safeArea p="2" mt="20%" py="8" w="90%" maxW="290">
        <Heading
          size="xl"
          fontWeight="700"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}>
          Forgot Password
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: 'warmGray.200',
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs">
          Registered email for continue!
        </Heading>

        <VStack space={3} mt="5">
          <Text color="muted.400">
            Not to worry! Enter email address associated with your account and
            we’ll send a link to reset your password.
          </Text>
          <Input placeholder="Email Address" mt="4" mb="2" />
          <Button mb="2" colorScheme="indigo">
            Proceed
          </Button>
          <HStack mt="4" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}>
              Already registered ?{' '}
            </Text>
            <Link
              _text={{
                color: 'indigo.500',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
              onPress={() => navigation.navigate('SigninScreen')}>
              Log In
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default ForgotPasswordScreen;
