import { Route, Routes } from "react-router-dom";
import PublicRoutes from "../routes/PublicRoutes";
import PrivateRoutes from "../routes/PrivateRoutes";
import HomePage from "../pages/privatesPages/HomePage";
import LoginPage from "../pages/publicPages/LoginPage";


const Routing = () => {


  return (
    <Routes>
    <Route path="/home" element={<PrivateRoutes />}>
      <Route index element={<HomePage />} />
    </Route>
  
    <Route path="/" element={<PublicRoutes />}>
      <Route path="login" element={<LoginPage />} />
    </Route>
  </Routes>
  );
};

export default Routing;
