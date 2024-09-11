import renderMovies from './renderMovies.js';
const d = document;

const backendURL = process.env.REACT_APP_BACKEND_URL;

export default async function explorePelis (){
    try {
     const response = await axios.get(`${backendURL}/movies`);
     const dataMovies = response.data;
     renderMovies(dataMovies);
    } catch (error) {
     console.log(`Error al conseguir las peliculas: ${error}`);
    }
   }

   