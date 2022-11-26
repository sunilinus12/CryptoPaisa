import React, {createContext, useState} from 'react';
import SimpleToast from 'react-native-simple-toast';
import {ValidateEmail} from '../utils';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isSplashLoading, setIsSplashLoading] = useState(true);
  const [registerUsers, setRegisterUsers] = useState([]);
  const [loginInfo, setLoginInfo] = useState([]);

  const addUser = (email, password) => {
    setRegisterUsers([...registerUsers, {email, password}]);
  };
  const LoginFinder = (email, password) => {
    let b = registerUsers.filter(
      i => i.email === email && i.password === password,
    );
    if (b.length > 0) {
      setLoginInfo([{email, password}]);
      return true;
    }

    return false;
  };
  return (
    <AuthContext.Provider
      value={{
        isSplashLoading,
        setIsSplashLoading,
        registerUsers,
        setRegisterUsers,
        loginInfo,
        setLoginInfo,
        addUser,
        LoginFinder,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
