import { useAuth0 } from '@auth0/auth0-react'
import { Main } from '../../components/main/Main'
import { useEffect, } from 'react'
import { useUserContext } from '../../context/userContext'

const HomePage = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const { userFechture, movies } = useUserContext();

  useEffect(() => {
    userFechture(user, getAccessTokenSilently);
  }, [user, movies]);

  return (
    <>
    <Main/>
    </>
  )
}

export default HomePage
