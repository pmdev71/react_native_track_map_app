import React from 'react';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

// import screens

import AccountScreen from '../../screens/AccountScreen';
import {UserAuthContextProvider} from '../../context/UserAuthContext';
import PackageList from '../../screens/PackageList';
import OrderHistoryScreen from '../../screens/OrderHistoryScreen';

export default function HomeScreen() {
  return (
    <UserAuthContextProvider>
      <Tab.Navigator shifting={true}>
        <Tab.Screen
          name="PackageList"
          component={PackageList}
          options={{
            title: 'Packages',
            tabBarIcon: () => (
              <IconMaterialCommunityIcons
                name="view-list"
                color="red"
                size={22}
              />
            ),
            tabBarColor: 'black',
          }}
        />
        <Tab.Screen
          name="OrderHistoryScreen"
          component={OrderHistoryScreen}
          options={{
            title: 'Order History',
            tabBarIcon: () => (
              <IconMaterialCommunityIcons
                name="history"
                color="red"
                size={22}
              />
            ),
            tabBarColor: 'black',
          }}
        />
        <Tab.Screen
          name="AccountScreen"
          component={AccountScreen}
          options={{
            title: 'Account',
            tabBarIcon: () => (
              <IconMaterialCommunityIcons
                name="account"
                color="red"
                size={22}
              />
            ),
            tabBarColor: 'black',
          }}
        />
      </Tab.Navigator>
    </UserAuthContextProvider>
  );
}
