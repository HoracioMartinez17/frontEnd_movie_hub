import  Routing  from './routers/Routing'
import { UserProvider } from './context/userContext';

function App() {

  return (
    <>
    <UserProvider>
      <Routing/>
    </UserProvider>
    </>
  )
}

export default App
