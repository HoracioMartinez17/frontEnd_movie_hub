import { USER_URL } from "../global/serverUrl";
import { GENRES_URL } from "../global/serverUrl";
import { MOVIES_URL } from "../global/serverUrl";
import { auth0Domain } from "../global/serverUrl";


export const getUser = async (userId: string, getToken: () => Promise<string>) => {
  try {
    const token = await getToken();
    const response = await fetch(`${USER_URL}/${userId}`, {
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
export const deleteUserById = async (userId: string, getToken: () => Promise<string>): Promise<Response> => {
  try {
    const token = await getToken();
    const response = await fetch(`${USER_URL}/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      // Manejar errores aquí
      const errorData = await response.json(); // analizar la respuesta como JSON si es un error JSON
      throw new Error(`Error deleting movie: ${errorData.message}`);
    }

    return response; // Devuelve la respuesta completa
  } catch (error) {
    console.error('Error deleting movie:', error);
    throw error; // Lanza el error para que se maneje en el código que llama a esta función
  }
};


export const deleteUserByAuth0 = async (id: string): Promise<Response> => {
  try {
    const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRITTJQdHVKbWY4eFpoM09uY01MMyJ9.eyJpc3MiOiJodHRwczovL2Rldi00azY3Z2Z2OG55OGlzcjNsLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiI2TlJLWldUSUtuZHlkckV1VE1Kb1FMQkNNZ0h5YW1rMUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9kZXYtNGs2N2dmdjhueThpc3IzbC51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTY5MzQ5MTQ4MSwiZXhwIjoxNjkzNTc3ODgxLCJhenAiOiI2TlJLWldUSUtuZHlkckV1VE1Kb1FMQkNNZ0h5YW1rMSIsInNjb3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkYXRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgcmVhZDp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfY3VzdG9tX2Jsb2NrcyBkZWxldGU6dXNlcl9jdXN0b21fYmxvY2tzIGNyZWF0ZTp1c2VyX3RpY2tldHMgcmVhZDpjbGllbnRzIHVwZGF0ZTpjbGllbnRzIGRlbGV0ZTpjbGllbnRzIGNyZWF0ZTpjbGllbnRzIHJlYWQ6Y2xpZW50X2tleXMgdXBkYXRlOmNsaWVudF9rZXlzIGRlbGV0ZTpjbGllbnRfa2V5cyBjcmVhdGU6Y2xpZW50X2tleXMgcmVhZDpjb25uZWN0aW9ucyB1cGRhdGU6Y29ubmVjdGlvbnMgZGVsZXRlOmNvbm5lY3Rpb25zIGNyZWF0ZTpjb25uZWN0aW9ucyByZWFkOnJlc291cmNlX3NlcnZlcnMgdXBkYXRlOnJlc291cmNlX3NlcnZlcnMgZGVsZXRlOnJlc291cmNlX3NlcnZlcnMgY3JlYXRlOnJlc291cmNlX3NlcnZlcnMgcmVhZDpkZXZpY2VfY3JlZGVudGlhbHMgdXBkYXRlOmRldmljZV9jcmVkZW50aWFscyBkZWxldGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGNyZWF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgcmVhZDpydWxlcyB1cGRhdGU6cnVsZXMgZGVsZXRlOnJ1bGVzIGNyZWF0ZTpydWxlcyByZWFkOnJ1bGVzX2NvbmZpZ3MgdXBkYXRlOnJ1bGVzX2NvbmZpZ3MgZGVsZXRlOnJ1bGVzX2NvbmZpZ3MgcmVhZDpob29rcyB1cGRhdGU6aG9va3MgZGVsZXRlOmhvb2tzIGNyZWF0ZTpob29rcyByZWFkOmFjdGlvbnMgdXBkYXRlOmFjdGlvbnMgZGVsZXRlOmFjdGlvbnMgY3JlYXRlOmFjdGlvbnMgcmVhZDplbWFpbF9wcm92aWRlciB1cGRhdGU6ZW1haWxfcHJvdmlkZXIgZGVsZXRlOmVtYWlsX3Byb3ZpZGVyIGNyZWF0ZTplbWFpbF9wcm92aWRlciBibGFja2xpc3Q6dG9rZW5zIHJlYWQ6c3RhdHMgcmVhZDppbnNpZ2h0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOmxvZ3NfdXNlcnMgcmVhZDpzaGllbGRzIGNyZWF0ZTpzaGllbGRzIHVwZGF0ZTpzaGllbGRzIGRlbGV0ZTpzaGllbGRzIHJlYWQ6YW5vbWFseV9ibG9ja3MgZGVsZXRlOmFub21hbHlfYmxvY2tzIHVwZGF0ZTp0cmlnZ2VycyByZWFkOnRyaWdnZXJzIHJlYWQ6Z3JhbnRzIGRlbGV0ZTpncmFudHMgcmVhZDpndWFyZGlhbl9mYWN0b3JzIHVwZGF0ZTpndWFyZGlhbl9mYWN0b3JzIHJlYWQ6Z3VhcmRpYW5fZW5yb2xsbWVudHMgZGVsZXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGNyZWF0ZTpndWFyZGlhbl9lbnJvbGxtZW50X3RpY2tldHMgcmVhZDp1c2VyX2lkcF90b2tlbnMgY3JlYXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgZGVsZXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgcmVhZDpjdXN0b21fZG9tYWlucyBkZWxldGU6Y3VzdG9tX2RvbWFpbnMgY3JlYXRlOmN1c3RvbV9kb21haW5zIHVwZGF0ZTpjdXN0b21fZG9tYWlucyByZWFkOmVtYWlsX3RlbXBsYXRlcyBjcmVhdGU6ZW1haWxfdGVtcGxhdGVzIHVwZGF0ZTplbWFpbF90ZW1wbGF0ZXMgcmVhZDptZmFfcG9saWNpZXMgdXBkYXRlOm1mYV9wb2xpY2llcyByZWFkOnJvbGVzIGNyZWF0ZTpyb2xlcyBkZWxldGU6cm9sZXMgdXBkYXRlOnJvbGVzIHJlYWQ6cHJvbXB0cyB1cGRhdGU6cHJvbXB0cyByZWFkOmJyYW5kaW5nIHVwZGF0ZTpicmFuZGluZyBkZWxldGU6YnJhbmRpbmcgcmVhZDpsb2dfc3RyZWFtcyBjcmVhdGU6bG9nX3N0cmVhbXMgZGVsZXRlOmxvZ19zdHJlYW1zIHVwZGF0ZTpsb2dfc3RyZWFtcyBjcmVhdGU6c2lnbmluZ19rZXlzIHJlYWQ6c2lnbmluZ19rZXlzIHVwZGF0ZTpzaWduaW5nX2tleXMgcmVhZDpsaW1pdHMgdXBkYXRlOmxpbWl0cyBjcmVhdGU6cm9sZV9tZW1iZXJzIHJlYWQ6cm9sZV9tZW1iZXJzIGRlbGV0ZTpyb2xlX21lbWJlcnMgcmVhZDplbnRpdGxlbWVudHMgcmVhZDphdHRhY2tfcHJvdGVjdGlvbiB1cGRhdGU6YXR0YWNrX3Byb3RlY3Rpb24gcmVhZDpvcmdhbml6YXRpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVycyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGRlbGV0ZTpvcmdhbml6YXRpb25fbWVtYmVycyBjcmVhdGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBjcmVhdGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgY3JlYXRlOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyByZWFkOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIHJlYWQ6b3JnYW5pemF0aW9uc19zdW1tYXJ5IGNyZWF0ZTphY3Rpb25zX2xvZ19zZXNzaW9ucyBjcmVhdGU6YXV0aGVudGljYXRpb25fbWV0aG9kcyByZWFkOmF1dGhlbnRpY2F0aW9uX21ldGhvZHMgdXBkYXRlOmF1dGhlbnRpY2F0aW9uX21ldGhvZHMgZGVsZXRlOmF1dGhlbnRpY2F0aW9uX21ldGhvZHMgcmVhZDpzY2ltX2NvbmZpZyBjcmVhdGU6c2NpbV9jb25maWcgdXBkYXRlOnNjaW1fY29uZmlnIGRlbGV0ZTpzY2ltX2NvbmZpZyBjcmVhdGU6c2NpbV90b2tlbiByZWFkOnNjaW1fdG9rZW4gZGVsZXRlOnNjaW1fdG9rZW4gcmVhZDpjbGllbnRfY3JlZGVudGlhbHMgY3JlYXRlOmNsaWVudF9jcmVkZW50aWFscyB1cGRhdGU6Y2xpZW50X2NyZWRlbnRpYWxzIGRlbGV0ZTpjbGllbnRfY3JlZGVudGlhbHMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.TH-kLQfHlYANhIrZg9BeiNytq78rMOlcxZNCWA5DgfHdD9foEr519fvkcIlT71liQSqrQcbvJtVsAxRFrlVMnONYaT-aTNHYpNfo57a5TyVCKCj_Z0xLnWEg9I91cXL2ejiA8zvYYfJ3W_aU4wSu99WnmFGeDnAqTAku3ykiLSMRk1OaIsHmLrS065Y5IGt_ZQBhowsq6BPphyTgX3dkCWrZTejxpjucv-gqK8xkLurF4teLBtCSYi87WdEl3b2HX3HNye6ybk4cWlPXo4IukCKY5gFwc5B-BaR_Dl7R1WkHpW0VSIiZL0eXYytJf41QwVV2iknxLKQqEL8VaEukUg"; // aquí puedes asignar el token a una variable
    const response = await fetch(`https://${auth0Domain}/api/v2/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      redirect: 'follow'
    })


    console.log(response)

    return response;

  } catch (error) {
    console.error("There was a problem with the request:", error);
    throw error;
  }
};

interface userUpdate {
  name: string;
  email: string;
}
export const putUpdateUsers = async (userId: string, getToken: () => Promise<string>, userUpdate: userUpdate) => {

  try {
    const token = await getToken();
    const response = await fetch(`${USER_URL}/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userUpdate),
    });

    if (response.ok) {
      // La actualización fue exitosa, puedes manejar la respuesta o devolverla si es necesario
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      // La actualización no fue exitosa, maneja el error (por ejemplo, muestra un mensaje de error)
      console.error('Error updating movie:', response.statusText);
    }
  } catch (error) {
    console.error('Error updating movie:', error);
  }
};



export const postApiUser = async (user: {}, getToken: () => Promise<string>) => {

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
    if (response.ok) {
      // La actualización fue exitosa, puedes manejar la respuesta o devolverla si es necesario
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      // La actualización no fue exitosa, maneja el error (por ejemplo, muestra un mensaje de error)
      console.error('Error updating movie:', response.statusText);
    }
  } catch (error) {
    console.error('Error updating movie:', error);
  }
};
interface Movie {
  id: string;
  title: string;
  year: number;
  language: string;
  description: string;
 image: {
  public_id?: string | undefined;
  secure_url: string;
 }
}

interface GenreMovies {
  [genre: string]: Movie[];
}


export const fetchAllMoviesByGenres = async (genres: string[], getToken: () => Promise<string>, userId: string) => {
  const allMovies: GenreMovies = {};
  try {
    for (const genre of genres) {
      const token = await getToken();
      const response = await fetch(`${GENRES_URL}/${genre}/${userId}`,
        {
          method: "GET", headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        });
      const data = await response.json();
      allMovies[genre] = data.movies;

    }
    return allMovies;
  } catch (error) {
    console.error('Error fetching movies by genres:', error);
    return {};
  }
};




export const savetMoviesUser = async (userId: string, getToken: () => Promise<string>, formData: FormData): Promise<Response> => {
  try {
    const token = await getToken();
    const response = await fetch(`${MOVIES_URL}/${userId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    });
      // La actualización fue exitosa, puedes manejar la respuesta o devolverla si es necesario
      const data = await response.json();
      console.log(data);
      return data;
   
  } catch (error) {
    console.error('Error updating movie:', error);
    throw error;
  }
};


export const updateMoviesUser = async (movieId: string, getToken: () => Promise<string>, formData: FormData): Promise<Response> => {
  try {
    const token = await getToken();
    const response = await fetch(`${MOVIES_URL}/${movieId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body:formData
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error updating movie:', error);
    throw error;
  }
};
export const deleteMoviesUser = async (movieId: string, getToken: () => Promise<string>) => {
  try {
    const token = await getToken();
    const response = await fetch(`${MOVIES_URL}/${movieId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      // Manejar errores aquí
      const errorData = await response.json(); // analizar la respuesta como JSON si es un error JSON
      throw new Error(`Error deleting movie: ${errorData.message}`);
    }

    return response
  } catch (error) {
    console.error('Error posting movie:', error);
    throw error; // Lanza el error para que se maneje en el código que llama a esta función

  }
}



