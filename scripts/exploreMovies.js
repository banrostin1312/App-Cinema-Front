import renderMovies from './renderMovies.js';
const d = document;
const inicioinfo = d.getElementById('inicioInfo');
const backendURL = process.env.REACT_APP_BACKEND_URL;

export default async function exploreMovies (){
    try {
     const response = await axios.get(`${backendURL}/movies`);
     const dataMovies = response.data;
     inicioinfo.innerHTML = '';
     renderMovies(dataMovies);
    } catch (error) {
     console.log(`Error al conseguir las peliculas: ${error}`);
    }
   }

   