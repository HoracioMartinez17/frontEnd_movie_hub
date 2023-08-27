import { createContext, useContext, useState, ReactNode, FC } from 'react';
import {postApiUser,fetchAllMoviesByGenres,savetMoviesUser,updateMoviesUser,deleteMoviesUser} from '../api/user.request.fetch'
import { User } from '@auth0/auth0-react';

interface UserData {
    id: string;
    name: string;
    email: string;
    movies: Movie[];
  }

  interface Movie {
    id: string;
    title: string;
    year: number;
    language: string;
    description: string;
    image: string;
  }
  interface MovieCreated {
    title: string;
    year: number;
    language: string;
    description: string;
    image: string;
  }

  interface allMoviesByGenres {
    allMovies: {
      [genre: string]: Movie[]
    };
  }
  interface UserContextType {
    userData: UserData | null
    allMovies: allMoviesByGenres |null
    movies: MovieCreated[] | null
    movieUpdate: MovieCreated[] | null
    moviesDelete:string | null
    userFechture: (user: User | undefined, getAccessTokenSilently: any) => void;
    fetchUserMoviesByGenres: (genres: string[], getAccessTokenSilently: any, userId: string) => void;
    moviesSave: (movies: MovieCreated, getAccessTokenSilently: any, userId: string) => void;
    moviesUpdate:(movieId:string,getAccessTokenSilently: any,movieUpdate:MovieCreated) => void
    movieDelete:(movieId:string,getAccessTokenSilently: any) => void
   
  }



  const UserContext = createContext<UserContextType | undefined>(undefined);


  export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [allMovies, setAllMovies] = useState<allMoviesByGenres | null>(null);
    const [movies, setNewMovies] = useState<Movie[] | null>(null);
    const [movieUpdate, setMovieUpdate] = useState<Movie[] | null>(null);
    const [moviesDelete, setMovieDelete] = useState< null>(null);



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
        setAllMovies({ allMovies: moviesByGenre });
      } catch (error) {
        console.error('Error fetching movies by genres:', error);
      }
    };

    const moviesSave = async (newMovieData: {}, getAccessTokenSilently: any, userId: string) => {
      try {
          //enviar la movie creada del user a la base de datos
          const newMovieCreated = await savetMoviesUser(userId, getAccessTokenSilently, newMovieData);
          // ... Actualizar el estado de las películas en el contexto
          setNewMovies(newMovieCreated);
      } catch (error) {
          console.error('Error saving movie:', error);
      }
  }
    const moviesUpdate = async (movieId: string,getAccessTokenSilently: any,updateMovieData: {}) => {
      try {
          //enviar la movie creada del user a la base de datos
          const newMovieUpdate = await updateMoviesUser(movieId, getAccessTokenSilently, updateMovieData);
  
          // ... Actualizar el estado de las películas en el contexto
          setMovieUpdate(newMovieUpdate);
      } catch (error) {
          console.error('Error saving movie:', error);
      }
  }
    const movieDelete = async (movieId: string,getAccessTokenSilently: any) => {
      try {
          //eliminar la movie creada del user a la base de datos
          const moviesDelete = await deleteMoviesUser(movieId, getAccessTokenSilently);
  
          // ... Actualizar el estado de las películas en el contexto
          setMovieDelete(moviesDelete);
      } catch (error) {
          console.error('Error saving movie:', error);
      }
  }
  

    return (
      <UserContext.Provider value={{ allMovies, userData,movies,movieUpdate,moviesDelete, userFechture,
       fetchUserMoviesByGenres, moviesSave,moviesUpdate,movieDelete }}>
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

