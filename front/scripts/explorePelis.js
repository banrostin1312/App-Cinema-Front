import renderMovies from './renderMovies.js';
const d = document;

 const backURL = window.location.hostname === "localhost" || window.location.hostname === '127.0.0.1' ?
    'http://localhost:3000/movies' : 'https://app-cinema-back.onrender.com/movies'

export default async function explorePelis (){
    try {
     const response = await axios.get(`${backURL}`);
     const dataMovies = response.data;
     renderMovies(dataMovies);
    } catch (error) {
     console.log(`Error al conseguir las peliculas: ${error}`);
    }
   }

   