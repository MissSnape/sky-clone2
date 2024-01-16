import React from 'react';
import AppRoutes from './routes';
import { UserContext } from './context/usercontext';
import  { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')));
  
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </UserContext.Provider>
  );
};

export default App;