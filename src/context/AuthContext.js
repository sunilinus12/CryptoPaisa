import React, {createContext, useEffect, useState} from 'react';
import SimpleToast from 'react-native-simple-toast';
import {ValidateEmail} from '../utils';

export const AuthContext = createContext();
import EncryptedStorage from 'react-native-encrypted-storage';

export const AuthProvider = ({children}) => {
  const [IsSplashLoading, setIsSplashLoading] = useState(true);
  const [registerUsers, setRegisterUsers] = useState([]);
  const [loginInfo, setLoginInfo] = useState([]);

  const addUser = (email, password) => {
    setRegisterUsers([...registerUsers, {email, password}]);
    storingUsers([...registerUsers, {email, password}]);
  };

  const isRegister = (email, password) => {
    const a = registerUsers.filter(e => e.email === email);
    if (a.length > 0) {
      return false;
    }
    addUser(email, password);
    return true;
  };
  const LoginFinder = (email, password) => {
    let b = registerUsers.filter(
      i => i.email === email && i.password === password,
    );
    if (b.length > 0) {
      setLoginInfo([{email, password}]);

      return true;
    }
    storingLoginUser([{email, password}]);
    return false;
  };
  const IsLogin = async () => {
    try {
      const res = await EncryptedStorage.getItem('LoginUser');

      setTimeout(() => {
        if (res !== undefined && res !== null) {
          setLoginInfo(JSON.parse(res));
          setIsSplashLoading(false);
        }
        setIsSplashLoading(false);
      }, 3000);
    } catch (error) {
      console.log('error while getting the LoginUserdata from storage', error);
    }
  };
  useEffect(() => {
    gettingUsers();
    IsLogin();
  }, []);

  const gettingUsers = async () => {
    try {
      const session = await EncryptedStorage.getItem('user_List');

      if (session !== undefined && session !== null) {
        setRegisterUsers(JSON.parse(session));
      }
    } catch (error) {
      console.log('error while getting the UserList from storage', error);
    }
  };

  const Logout = async () => {
    try {
      await EncryptedStorage.removeItem('LoginUser');
      setLoginInfo([]);
    } catch (error) {
      console.log('error while logout ', error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        IsSplashLoading,
        setIsSplashLoading,
        registerUsers,
        setRegisterUsers,
        loginInfo,
        setLoginInfo,
        addUser,
        LoginFinder,
        isRegister,
        Logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
const storingUsers = async i => {
  try {
    await EncryptedStorage.setItem('user_List', JSON.stringify(i));
  } catch (error) {
    console.log('error while storing userList in storage', error);
  }
};
const storingLoginUser = async i => {
  try {
    await EncryptedStorage.setItem('LoginUser', JSON.stringify(i));
  } catch (error) {
    console.log('error while storing LoginUser in storage', error);
  }
};
