import { USER_URL } from "../global/serverUrl";
import { GENRES_URL } from "../global/serverUrl";
import { MOVIES_URL } from "../global/serverUrl";


export const getUser = async (userId: string, getToken: any) => {
    console.log(userId)
    const {VITE_API_URL:URL_USER} = import.meta.env
      try {
          const token = await getToken();
          const response = await fetch(`${URL_USER}/:${userId}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
              },
          });
  
          if (!response.ok) {
              throw new Error("Network response was not ok.");
          }
  
      } catch (error) {
          console.error("There was a problem with the request:", error);
      }
  };




export const postApiUser= async (user:{}, getToken:any) => {

    const URL_USER = USER_URL;

    try {
        const token = await getToken();
        const response = await fetch(URL_USER, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(user),
        });
        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error("There was a problem with the request:", error);
    }
};
interface Movie {
  id: string;
  title: string;
  year: number;
  language: string;
  description: string;
  image: string;
}

interface GenreMovies {
  [genre: string]: Movie[];
}


export const fetchAllMoviesByGenres = async (genres: string[], getToken: any, userId: string) => {
    const allMovies: GenreMovies = {};
    try {
      for (const genre of genres) {
        const token = await getToken();
        const response = await fetch(`${GENRES_URL}/${genre}/${userId}`, { method: "GET", headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        } });
        const data = await response.json();
        allMovies[genre] = data.movies;

      }
      return allMovies;
    } catch (error) {
      console.error('Error fetching movies by genres:', error);
      return {};
    }
};

export const savetMoviesUser = async(userId: string, getToken:any, newMovieData: {}) => {
  try {
    const token = await getToken();
    const response = await fetch(`${MOVIES_URL}/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(newMovieData)
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error posting movie:', error);
  }
}
export const updateMoviesUser = async(movieId: string, getToken:any, updateMovieData: {}) => {
  try {
    const token = await getToken();
    const response = await fetch(`${MOVIES_URL}/${movieId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(updateMovieData)
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error posting movie:', error);
  }
}
export const deleteMoviesUser = async(movieId: string, getToken:any) => {
  try {
    const token = await getToken();
    const response = await fetch(`${MOVIES_URL}/${movieId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error posting movie:', error);
  }
}



