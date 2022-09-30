import React from 'react';
import { UserContext } from '../../database/firebase/UserAuth';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { login } = React.useContext(UserContext);
  console.log(login);
  return login ? children : <Navigate to="/login" replace={true} />;
};

export default ProtectedRoute;
