import React, {useEffect} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigator from '../BottomNavigator/BottomNavigator';
import SigninScreen from '../../screens/SigninScreen';
import SignupScreen from '../../screens/SignupScreen';
import ForgotPasswordScreen from '../../screens/ForgotPasswordScreen';
import SplashScreen from '../../screens/SplashScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DetailsPackageScreen from '../../screens/DetailsPackageScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const [showSplash, setShowSplash] = React.useState(true);

  const handleAsyncStorage = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      console.log('Token from StackNavigator :', token);
    } else {
      console.log("Token doesn't exist");
    }
  };
  handleAsyncStorage();

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {showSplash && (
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        )}

        <Stack.Screen
          name="SigninScreen"
          component={SigninScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="DetailsPackageScreen"
          component={DetailsPackageScreen}
          options={{
            headerTitle: 'Details Package',
            headerShown: true,
          }}
        />

        <Stack.Screen
          name="BottomNavigator"
          component={BottomNavigator}
          options={{headerShown: false}}
        />

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
