import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter } from 'react-router-dom';
const {VITE_AUTH0_DOMAIN:domain, VITE_AUTH0_CLIENT_ID:clientId, VITE_AUTH0_AUDIENCE:audience} = import.meta.env
const redirectUri = window.location.origin +"/home"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
     <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        audience: audience
      }}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>
)
