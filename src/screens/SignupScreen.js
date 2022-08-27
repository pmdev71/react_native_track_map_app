import React, {useState, useContext} from 'react';
import {Context as AuthContext} from '../context/AuthContext';
import {
  Text,
  Box,
  Center,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  Link,
} from 'native-base';

import {useNavigation} from '@react-navigation/native';

const SignupScreen = () => {
  const {state, signup} = useContext(AuthContext);
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');

  return (
    <Center w="100%">
      <Box safeArea p="2" mt="20%" w="90%" maxW="290" py="8">
        <Heading
          size="xl"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}
          fontWeight="semibold">
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: 'warmGray.200',
          }}
          fontWeight="medium"
          size="xs">
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              type="email"
              value={email}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={e => setEmail(e)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              value={password}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={e => setPassword(e)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input
              type="password"
              value={conPassword}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={e => setConPassword(e)}
            />
          </FormControl>
          <Button
            mt="2"
            colorScheme="indigo"
            onPress={() => signup({email, password})}>
            Sign up
          </Button>
          <HStack mt="6" justifyContent="center">
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

export default SignupScreen;
