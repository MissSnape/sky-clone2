import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/Login/login';
import Collections from './pages/Collections/Collections';
import Hits from './pages/hits/hits';
import NotFound from './pages/NotFound/NotFound';
import MyPlayList from './pages/MyPlayList/MyPlayList';
import { ProtectedRoute } from './ProtectedRoute';
import Indie from './pages/indie/indie';
import Layout from './components/layout';
const AppRoutes = () => {
  const [isLoading, setLoadingStatus] = useState(true);
  const [newApiError, setNewApiError] = useState(null);
  return (
    <Routes>
       <Route
        element={
          <ProtectedRoute isAllowed={Boolean(localStorage.getItem('user'))} />
        }
      ></Route>
     <Route
          path="/"
          element={
            <Layout
              isLoading={isLoading}
              setLoadingStatus={setLoadingStatus}
              setNewApiError={setNewApiError}
            />
          }
        >
        <Route
            index
            element={<Home isLoading={isLoading} newApiError={newApiError} />}
          />
        <Route path="/Collections" element={<Collections />} />
        <Route path="/MyPlayList" element={<MyPlayList />} />
        <Route path="/Hits" element={<Hits/>} />
        <Route path='/Indie' element={<Indie />}/>
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login isLoginMode={true} />} />
      <Route path="/register" element={<Login isLoginMode={false}/>} />
    </Routes>
  );
};

export default AppRoutes;
