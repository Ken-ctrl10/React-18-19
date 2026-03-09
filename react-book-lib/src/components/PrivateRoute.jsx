import { Navigate } from "react-router-dom";

export const PrivateRoute = ({Component}) => {
  const isAuth = false;

  return isAuth ? Component : <Navigate to="/" />
};