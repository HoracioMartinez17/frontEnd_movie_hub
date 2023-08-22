import { Route, Routes } from "react-router-dom";
import PublicRoutes from "../routes/PublicRoutes";
import PrivateRoutes from "../routes/PrivateRoutes";
import HomePage from "../pages/privatesPages/HomePage";
import LoginPage from "../pages/publicPages/LoginPage";
import { useAuth0 } from "@auth0/auth0-react";

const Routing = () => {
  const { isAuthenticated } = useAuth0();
 
  
  return (
    <Routes>
      {isAuthenticated ? (
        <Route path="/home" element={<PrivateRoutes />}>
          <Route index element={<HomePage />} />
        </Route>
      ) : (
        <Route path="/" element={<PublicRoutes />}>
          <Route index element={<LoginPage />} />
        </Route>
      )}
    </Routes>
  );
};

export default Routing;
