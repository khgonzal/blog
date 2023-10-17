import React, { createContext, ReactNode, SetStateAction, useEffect, useState } from 'react';

type IUser = {
  isAuthenticated: boolean;
  toggleIsAuthenticated: () => void;
  };

const UserContext: React.Context<IUser> = createContext<IUser>({
  isAuthenticated: false,
  toggleIsAuthenticated: () => undefined,
  });

const UserProvider = ({ children }: JSX.ElementChildrenAttribute) => {
  const [isAuthenticated, setIsAuthenticatedState] = useState(false);

    const toggleIsAuthenticated = () => {
    setIsAuthenticatedState(!isAuthenticated);
  };
  
  const values = {
    isAuthenticated,
    toggleIsAuthenticated
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
