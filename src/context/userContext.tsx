import { createContext, useContext, useState, ReactNode, FC } from 'react';
import {
  postApiUser, fetchAllMoviesByGenres, savetMoviesUser
  , updateMoviesUser, deleteMoviesUser, putUpdateUsers, deleteUserById, deleteUserByAuth0
} from '../api/user.request.fetch'
import { User } from '@auth0/auth0-react';

interface UserData {
  id: string;
  name: string;
  email: string;
  movies: Movie[];
}
interface userUpdate {
  name: string;
  email: string
}

interface Movie {
  id: string;
  title: string;
  year: number;
  language: string;
  genre?: string;
  description: string;
 image: {
  public_id?: string | undefined;
  secure_url: string;
 }

}


interface allMoviesByGenres {
  allMovies: {
    [genre: string]: Movie[]
  };
}
interface UserContextType {
  userData: UserData | null
  updateUser: userUpdate | null
  allMovies: allMoviesByGenres | null
  movies: Response | null
  movieUpdate:  Response | null
  moviesDelete: Response | null
  userFechture: (user: User | undefined, getAccessTokenSilently: () => Promise<string>) => void;
  fetchUserMoviesByGenres: (genres: string[], getAccessTokenSilently: () => Promise<string>, userId: string) => void;
  moviesSave: ( userId: string ,getAccessTokenSilently: () => Promise<string>,newMovieData: FormData) => Promise<Response>
  moviesUpdate: (movieId: string, getAccessTokenSilently: () => Promise<string>, movieUpdate:FormData) => Promise<Response>
  movieDelete: (movieId: string, getAccessTokenSilently: () => Promise<string>) => void
  updateUsersData: (userId: string, getAccessTokenSilently: () => Promise<string>, userUpdate: userUpdate) => void
  deleteUsersData: (userId: string, getAccessTokenSilently: () => Promise<string>) => Promise<Response>;
  deleteUsersAuth0: (id: string) => Promise<Response>;
}



const UserContext = createContext<UserContextType | undefined>(undefined);


export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [allMovies, setAllMovies] = useState<allMoviesByGenres | null>(null);
  const [movies, setNewMovies] = useState<Response | null>(null);
  const [updateUser, setupdateUser] = useState<userUpdate | null>(null);
  const [movieUpdate, setMovieUpdate] = useState<Response | null>(null);
  const [moviesDelete, setMovieDelete] = useState<Response | null>(null);


  const userFechture = async (user: User | undefined, getAccessTokenSilently: () => Promise<string>) => {
    if (user) {
      const userResponse = await postApiUser(user, getAccessTokenSilently);
      setUserData(userResponse.user);
    }
  };

  const fetchUserMoviesByGenres = async (genres: string[], getAccessTokenSilently: () => Promise<string>, userId: string) => {
    try {
      // Obtener todas las películas por géneros y actualizar el estado
      const moviesByGenre = await fetchAllMoviesByGenres(genres, getAccessTokenSilently, userId);
      // ... Actualizar el estado de las películas en el contexto
      console.log(moviesByGenre)
      setAllMovies({ allMovies: moviesByGenre });
    } catch (error) {
      console.error('Error fetching movies by genres:', error);
    }
  };

  const moviesSave = async (userId: string,getAccessTokenSilently: () => Promise<string>, newMovieData: FormData): Promise<Response> => {
    try {
      //enviar la película creada del usuario a la base de datos
      const newMovieCreated = await savetMoviesUser(userId, getAccessTokenSilently, newMovieData);
      // ... Actualizar el estado de las películas en el contexto
  
      setNewMovies(newMovieCreated);
      return newMovieCreated;
    } catch (error) {
      console.error('Error saving movie:', error);
      throw error;
    }
  }
  
  const moviesUpdate = async (movieId: string, getAccessTokenSilently: () => Promise<string>, updateMovieData: FormData): Promise<Response> => {
    try {
      //enviar la movie creada del user a la base de datos
      const newMovieUpdate = await updateMoviesUser(movieId, getAccessTokenSilently, updateMovieData);

      // ... Actualizar el estado de las películas en el contexto
      setMovieUpdate(newMovieUpdate);
      return newMovieUpdate
    } catch (error) {
      console.error('Error delete user:', error);
      throw error;
    }
  }
  const movieDelete = async (movieId: string, getAccessTokenSilently: () => Promise<string>) => {
    try {
      // Eliminar la película del usuario en la base de datos
      const response = await deleteMoviesUser(movieId, getAccessTokenSilently);
        setMovieDelete(response);
    } catch (error) {
      console.error('Error delete movie:', error);
    }
  };

  const updateUsersData = async (userId: string, getAccessTokenSilently: () => Promise<string>, userUpdate: userUpdate) => {
    try {
      // Update user data on the server
     const response = await putUpdateUsers(userId, getAccessTokenSilently, userUpdate);
     setupdateUser(response);
      // No response to update state with
    } catch (error) {
      console.error('Error updating user:', error);
    }
  }
  const deleteUsersData = async (userId: string, getAccessTokenSilently: () => Promise<string>): Promise<Response> => {
    try {
      // delete user data on the server
      const response = await deleteUserById(userId, getAccessTokenSilently);
      return response;
    } catch (error) {
      console.error('Error delete user:', error);
      throw error;
    }
  }
  const deleteUsersAuth0 = async (id: string): Promise<Response> => {
    try {
      // delete user data on the server
      const response = await deleteUserByAuth0(id);
      return response;
    } catch (error) {
      console.error('Error delete user:', error);
      throw error;
    }
  }


  return (
    <UserContext.Provider value={{
      allMovies, userData, movies, movieUpdate, moviesDelete, userFechture,
      fetchUserMoviesByGenres,updateUser, moviesSave, moviesUpdate, movieDelete, updateUsersData,
      deleteUsersData, deleteUsersAuth0
    }}>
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

