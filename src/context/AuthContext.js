import React, {createContext, useEffect, useState} from 'react';
import SimpleToast from 'react-native-simple-toast';
import {ValidateEmail} from '../utils';

export const AuthContext = createContext();
import EncryptedStorage from 'react-native-encrypted-storage';

export const AuthProvider = ({children}) => {
  const [IsSplashLoading, setIsSplashLoading] = useState(true);
  const [registerUsers, setRegisterUsers] = useState([]);
  const [loginInfo, setLoginInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
      storingLoginUser([{email, password}]);
      return true;
    }

    return false;
  };
  const IsLogin = async () => {
    try {
      const res = await EncryptedStorage.getItem('LoginUser');
      console.log('retrieving from storage', res);
      setTimeout(() => {
        if (res !== undefined && res !== null) {
          setLoginInfo(JSON.parse(res));
          setIsSplashLoading(false);
          console.log('retrieving from storage... inside');
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
      setIsLoading(true);
      await EncryptedStorage.removeItem('LoginUser');
      setLoginInfo([]);
      setIsLoading(false);
      SimpleToast.show('Logout Successfull', SimpleToast.SHORT);
    } catch (error) {
      console.log('error while logout ', error);
    }
  };

  const DeleteAccount = async () => {
    const email = loginInfo[0]?.email;
    try {
      setIsLoading(true);
      let b = registerUsers.filter(i => i.email != email);
      setRegisterUsers(b);
      storingUsers(b);
      await EncryptedStorage.removeItem('LoginUser');
      setLoginInfo([]);
      SimpleToast.show('Account Deleted ', SimpleToast.SHORT);
    } catch (error) {}
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
        DeleteAccount,
        isLoading,
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
    console.log('stored in storage');
  } catch (error) {
    console.log('error while storing LoginUser in storage', error);
  }
};
