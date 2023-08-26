import { Navigate, Outlet } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoutes = () => {
  const { isAuthenticated } = useAuth0();


  if (!isAuthenticated) {
    // Si no está autenticado, redirigir a la página de inicio de sesión
    console.log(isAuthenticated)
    return <Navigate to="/" />;
  }

 

  return (
     
 
          <>
          <Header />
          <Outlet />
          <Footer />
          </>

  );
};

export default PrivateRoutes;