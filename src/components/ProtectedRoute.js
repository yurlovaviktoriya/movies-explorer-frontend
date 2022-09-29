import { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

function ProtectedRoute({component: Component, ...props}) {

  const { isLogged } = useContext(CurrentUserContext);

  return isLogged ? <Component {...props}/> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
