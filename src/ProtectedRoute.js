import { Navigate, Outlet } from 'react-router-dom';
import React from 'react';
export const ProtectedRoute = ({ redirectPath = './login', isAllowed }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet />;
};
