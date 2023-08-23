import { createContext, useContext, useState, ReactNode, FC } from 'react';
import {postApiUser,fetchAllMoviesByGenres} from '../api/user.request.fetch'
import { User } from '@auth0/auth0-react';

interface UserData {
    id: string;
    name: string;
    email: string;
  }
  interface UserFunctions {
    userData: UserData | null
    userFechture: (user: User | undefined, getAccessTokenSilently: any) => void;
    fetchUserMoviesByGenres: (genres: string[], getAccessTokenSilently: any, userId: string) => void;
  }

  interface UserContextType extends UserData, UserFunctions {
    allMovies: Record<string, any[]>;
  }


  const UserContext = createContext<UserContextType | undefined>(undefined);


  export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [allMovies, setAllMovies] = useState<Record<string, any[]>>({});
  
    const userFechture = async (user: User | undefined, getAccessTokenSilently: any) => {
      if (user) {
        const userResponse = await postApiUser(user, getAccessTokenSilently);
        setUserData(userResponse.user);
      }
    };
  
    const fetchUserMoviesByGenres = async (genres: string[], getAccessTokenSilently: any, userId: string) => {
      try {
        // Obtener todas las películas por géneros y actualizar el estado
        const moviesByGenre = await fetchAllMoviesByGenres(genres, getAccessTokenSilently, userId);
        // ... Actualizar el estado de las películas en el contexto
        console.log(moviesByGenre)
        setAllMovies(moviesByGenre);
      } catch (error) {
        console.error('Error fetching movies by genres:', error);
      }
    };
  
    const userContextValue: UserContextType = {
        userData,
        userFechture,
        fetchUserMoviesByGenres,
        allMovies,
        id: '',
        name: '',
        email: ''
    };
  
    return (
      <UserContext.Provider value={userContextValue}>
        {children}
      </UserContext.Provider>
    );
  };
 

  export const useUserContext = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error('useUserContext debe ser usado dentro de un UserProvider');
    }
    return context;
  };
  
