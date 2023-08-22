// import { USER_URL } from "../global/serverUrl";



// export const postApiUser= async (user:{}, getToken:any) => {

//     const URL_USER = USER_URL;

//     try {
//         const token = await getToken();
//         const response = await fetch(URL_USER, {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//                 Authorization: `Bearer ${token}`,
//             },
//             body: JSON.stringify(user),
//         });
//         if (!response.ok) {
//             throw new Error("Network response was not ok.");
//         }
//         const data = await response.json()
//         console.log (data)
//         return data
//     } catch (error) {
//         console.error("There was a problem with the request:", error);
//     }
// };
