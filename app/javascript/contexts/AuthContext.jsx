import React, { useState } from 'react';
import { fetchData } from '../utils/Api';

const authContext = React.createContext();

function useAuth() {
  const [authed, setAuthed] = useState(false);
  const [currentUser, setUser] = useState({});

  return {
    authed,
    currentUser,
    login() {
      if (authed) {
        return new Promise((res) => {
          res(true);
        });
      }
      async function fetchUser() {
        const response = await fetchData('/api/users/current');
        const userData = response.data;
        if (!userData) {
          return { userSignedIn: false };
        }
        const user = { id: userData.id, ...userData.attributes };
        setUser(user);
        return user;
      }
      return fetchUser()
        .then((user) => setAuthed(user.userSignedIn));
    },
    logout() {
      return new Promise((res) => {
        setAuthed(false);
        res();
      });
    },
  };
}

export const AuthProvider = function ({ children }) {
  const auth = useAuth();

  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
};

export default function AuthConsumer() {
  return React.useContext(authContext);
}
