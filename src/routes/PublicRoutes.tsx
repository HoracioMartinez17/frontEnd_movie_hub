import { useAuth0 } from '@auth0/auth0-react';
import {Navigate, Outlet} from 'react-router-dom'

export const PublicRoutes = () => {
  const {isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    // Si está autenticado, redirigir a la página de home
    console.log(isAuthenticated);
    return <Navigate to="/home"/>;
  }

 
  return <Outlet />;
};

export default PublicRoutes
