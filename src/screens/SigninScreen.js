import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Text,
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  Link,
  VStack,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import baseApi from '../api/baseApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SigninScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const handleAsyncStorage = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        navigation.navigate('BottomNavigator');
      }
    };
    handleAsyncStorage();
  }, []);

  const handleSignin = async (email, password) => {
    if (email === '' || email.length < 10) {
      setErrorMessage('Please enter a valid email address');
      return;
    } else if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters!');
      return;
    } else {
      try {
        const response = await baseApi.post('/signin', {email, password});

        await AsyncStorage.setItem('token', response.data.token);
        await AsyncStorage.setItem(
          'user',
          JSON.stringify({
            user: response.data.user,
            // _id: response.data.user._id,
            // email: response.data.user.email,
            // balance: response.data.user.balance,
            // createdAt: response.data.user.createdAt,
          }),
        );
        navigation.navigate('BottomNavigator');

        return response.data.token;
      } catch (err) {
        setErrorMessage('Something went wrong with sign in!');
      }
    }
  };

  return (
    <Center w="100%">
      <Box
        safeArea
        p="2"
        mt="20%"
        py="8"
        w="90%"
        maxW="290"
        justifyContent="center">
        <Heading
          size="xl"
          fontWeight="700"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}>
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: 'warmGray.200',
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
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
            <Link
              _text={{
                fontSize: 'xs',
                fontWeight: '500',
                color: 'indigo.500',
              }}
              onPress={() => navigation.navigate('ForgotPasswordScreen')}
              alignSelf="flex-end"
              mt="1">
              Forget Password?
            </Link>
          </FormControl>
          {setErrorMessage ? <Text color="red.500">{errorMessage}</Text> : null}
          <Button
            mt="2"
            colorScheme="indigo"
            onPress={() => handleSignin(email, password)}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}>
              New here?{' '}
            </Text>
            <Link
              _text={{
                color: 'indigo.500',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
              onPress={() => navigation.navigate('SignupScreen')}>
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({});
