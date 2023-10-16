import React, { createContext, ReactNode, SetStateAction, useEffect, useState } from 'react';

type IUserData = {
  username: string;
};

type IUser = {
  isAuthenticated: boolean;
  login: (userData: IUserData) => void;
  logout: () => void;
  user: IUserData | null;
};

const UserContext: React.Context<IUser> = createContext<IUser>({
  isAuthenticated: false,
  login: (userData: IUserData) => undefined,
  logout: () => undefined,
  user: null
});

const UserProvider = ({ children }: JSX.ElementChildrenAttribute) => {
  const [user, setUser] = useState<IUserData | null>(null);

  useEffect(() => {
    const cachedUser = localStorage.getItem('cachedUser');
    const cachedUserExpiration = localStorage.getItem('cachedUserExpiration');

    if (cachedUser && cachedUserExpiration) {
      const expirationTimestamp = parseInt(cachedUserExpiration, 10);

      if (Date.now() < expirationTimestamp) {
        setUser(JSON.parse(cachedUser));
      } else {
        // Clear expired cached data
        localStorage.removeItem('cachedUser');
        localStorage.removeItem('cachedUserExpiration');
      }
    }
  }, []);

  const login = (userData: IUserData) => {
    setUser(userData);

    const expirationTime = new Date().getTime() + 60 * 60 * 1000; // 1 hour
    localStorage.setItem('cachedUser', JSON.stringify(userData));
    localStorage.setItem('cachedUserExpiration', expirationTime.toString());
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('cachedUser');
    localStorage.removeItem('cachedUserExpiration');
  };

  const isAuthenticated = Boolean(user);
  
  const values = {
    isAuthenticated,
    login,
    logout,
    user,
  };

  return (
    <UserContext.Provider value={values}>
      {children as ReactNode}
    </UserContext.Provider>
  );
};

export { UserProvider };

// Use context hook
export function useUserContext(): IUser {
  return React.useContext<IUser>(UserContext);
}
