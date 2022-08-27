import React from 'react';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

// import screens
import TrackListScreen from '../../screens/TrackListScreen';
import TrckCreateScreen from '../../screens/TrackCreateScreen';
import AccountScreen from '../../screens/AccountScreen';

export default function HomeScreen() {
  return (
    <Tab.Navigator shifting={true}>
      <Tab.Screen
        name="TrackListScreen"
        component={TrackListScreen}
        options={{
          tabBarIcon: () => (
            <IconMaterialCommunityIcons
              name="view-list"
              color="white"
              size={22}
            />
          ),
          tabBarColor: 'blue',
        }}
      />
      <Tab.Screen
        name="TrckCreateScreen"
        component={TrckCreateScreen}
        options={{
          tabBarIcon: () => (
            <IconMaterialCommunityIcons
              name="map-marker-plus-outline"
              color="white"
              size={22}
            />
          ),
          tabBarColor: 'purple',
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarIcon: () => (
            <IconMaterialCommunityIcons
              name="account"
              color="white"
              size={22}
            />
          ),
          tabBarColor: 'green',
        }}
      />
    </Tab.Navigator>
  );
}

// const IconContainer = props => {
//   return <IonicIcons name={props.name} size={20} color={'#fff'} />;
// };
