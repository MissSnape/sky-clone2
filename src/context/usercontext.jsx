import React, { useContext } from 'react';

export const UserContext = React.createContext(null);

export const useUserContext = () => {
  const user = useContext(UserContext);

  if (!user) {
    throw new Error('No user was found');
  }

  return user;
};