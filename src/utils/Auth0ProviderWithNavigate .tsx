import { AppState, Auth0Provider, } from "@auth0/auth0-react";
import {FC,ReactNode} from "react";
import { useNavigate } from "react-router-dom";

export const Auth0ProviderWithNavigate:FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  const {VITE_AUTH0_DOMAIN:domain, VITE_AUTH0_CLIENT_ID:clientId, VITE_AUTH0_AUDIENCE:audience} = import.meta.env
  const redirectUri = window.location.origin +"/home"
  const onRedirectCallback = (appState:AppState | undefined) =>  {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        audience: audience,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};