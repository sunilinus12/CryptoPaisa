import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isSplashLoading, setIsSplashLoading] = useState(true);
  const [registerInfo, setRegisterInfo] = useState([]);
  const [loginInfo, setLoginInfo] = useState([]);

  const handleRegister = ({email, password}) => {
    setRegisterInfo({email, password});
  };
  return (
    <AuthContext.Provider
      value={{
        isSplashLoading,
        setIsSplashLoading,
        registerInfo,
        setRegisterInfo,
        loginInfo,
        setLoginInfo,
        handleRegister,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
