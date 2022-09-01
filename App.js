import React, {useEffect} from 'react';
import StackNavigator from './src/navigation/StackNavigator/StackNavigator';
import OneSignal from 'react-native-onesignal';
import {NativeBaseProvider} from 'native-base';
// import {UserAuthContextProvider} from './src/context/UserAuthContext';

const App = () => {
  useEffect(() => {
    //OneSignal Init Code
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId('d516205c-d8a6-44ad-b9f2-8e307473acca');
    //Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler(notification => {
      console.log('OneSignal: notification opened:', notification);
    });
  });

  return (
    <NativeBaseProvider>
      <StackNavigator />
    </NativeBaseProvider>
  );
};

export default App;

// export default () => {
//   return (
//      <UserAuthContextProvider>
//       <App />
//      </UserAuthContextProvider>
//   );
// };
