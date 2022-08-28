import React, {useEffect} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigator from '../BottomNavigator/BottomNavigator';
import SigninScreen from '../../screens/SigninScreen';
import SignupScreen from '../../screens/SignupScreen';
import ForgotPasswordScreen from '../../screens/ForgotPasswordScreen';
import SplashScreen from '../../screens/SplashScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const [showSplash, setShowSplash] = React.useState(true);
  const [isSignedIn, setIsSignedIn] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {showSplash ? (
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : isSignedIn ? (
          <Stack.Screen
            name="BottomNavigator"
            component={BottomNavigator}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="SigninScreen"
            component={SigninScreen}
            options={{headerShown: false}}
          />
        )}

        {/* {isSignedIn ? (
          <Stack.Screen
            name="SigninScreen"
            component={SigninScreen}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="BottomNavigator"
            component={BottomNavigator}
            options={{headerShown: false}}
          />
        )} */}

        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{headerShown: false}}
        />

        {/* <SigninScreen /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
