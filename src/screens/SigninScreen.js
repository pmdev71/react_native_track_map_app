import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
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

const SigninScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          <Button
            mt="2"
            colorScheme="indigo"
            onPress={() =>
              navigation.navigate('BottomNavigator', {
                email: email,
                password: password,
              })
            }>
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
