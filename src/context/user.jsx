import React, { useContext } from 'react';

export const UserContext = React.createContext(null);

const useUserContext = () => {
  const user = useContext(UserContext);

  if (!user) {
    throw new Error('No user was found');
  }

  return user;
};
export  { useUserContext };
