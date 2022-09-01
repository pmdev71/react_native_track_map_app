import {createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserAuthContext = createContext();

const token = AsyncStorage.getItem('token');

export const UserAuthContextProvider = ({children}) => {
  return (
    <UserAuthContext.Provider value={token}>
      {children}
    </UserAuthContext.Provider>
  );
};
