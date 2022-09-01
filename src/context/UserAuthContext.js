import {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserAuthContext = createContext();

const user = {
  name: 'dev71',
  email: 'dev71@gmail.com',
};

export const UserAuthContextProvider = ({children}) => {
  const [textToken, setTextToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleAsyncStorage = async () => {
      const token = await AsyncStorage.getItem('token');
      const user = JSON.parse(await AsyncStorage.getItem('user'));
      // console.log('Token is :', token);
      console.log('User is :', user);
      setTextToken(token);
      setUser(user);
    };
    handleAsyncStorage();
  }, [textToken]);

  return (
    <UserAuthContext.Provider value={{textToken, user}}>
      {children}
    </UserAuthContext.Provider>
  );
};
