import React, {useState} from 'react';

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
import baseApi from '../api/baseApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupScreen = () => {
  // const {state, signup} = useContext(AuthContext);
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async (email, password) => {
    try {
      const response = await baseApi.post('/signup', {email, password});
      console.log(response.data);
      await AsyncStorage.setItem('token', response.data.token);
      const token = await AsyncStorage.getItem('token');
      console.log(token);
      navigation.navigate('BottomNavigator');
      //dispatch({type: 'signup', payload: response.data.token});
      return response.data.token;
    } catch (err) {
      console.log(err.message, 'Something went wrong with sign up');
      setErrorMessage('Something went wrong with sign up', err.message);
    }
  };

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
          {setErrorMessage ? <Text color="red.500">{errorMessage}</Text> : null}
          <Button
            mt="2"
            colorScheme="indigo"
            onPress={() => handleSignup(email, password)}>
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
