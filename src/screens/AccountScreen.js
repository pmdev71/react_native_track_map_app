import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {UserAuthContext} from '../context/UserAuthContext';

const AccountScreen = () => {
  const token = React.useContext(UserAuthContext);
  console.log('FROM ACCOUNT SCREEN :', token);

  return (
    <View>
      <Text>accountScreen</Text>
      <Text>Token: {token._W} </Text>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
