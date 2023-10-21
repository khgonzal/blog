import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from 'react';

type IUserData = {
  cachedUser: string;
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
  user: null,
});

const UserProvider = ({ children }: JSX.ElementChildrenAttribute) => {
  const [user, setUser] = useState<IUserData | null>(null);

  // Check if there is a cached user in local storage
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
    // Set the user in the state
    setUser(userData);

    // Cache the user data for a certain amount of time (e.g., 1 hour)
    const expirationTime = new Date().getTime() + 60 * 60 * 1000; // 1 hour
    localStorage.setItem('cachedUser', userData.cachedUser);
    localStorage.setItem('cachedUserExpiration', expirationTime.toString());
  };

  const logout = () => {
    // Remove the user from the state and clear the cache
    setUser(null);
    localStorage.removeItem('cachedUser');
    localStorage.removeItem('cachedUserExpiration');
  };

  const isAuthenticated = Boolean(user);

  const values = {
    isAuthenticated,
    user,
    login,
    logout,
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
