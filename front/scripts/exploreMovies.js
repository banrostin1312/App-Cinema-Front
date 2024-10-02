import renderMovies from './renderMovies.js';
const d = document;
const inicioinfo = d.getElementById('inicioInfo');

 const backURL = window.location.hostname === "localhost" || window.location.hostname === '127.0.0.1' ?
    'http://localhost:3000/movies' : 'https://app-cinema-back.onrender.com/movies'

export default async function exploreMovies (){
    try {
     const response = await axios.get(`${backURL}`);
     const dataMovies = response.data;
     inicioinfo.innerHTML = '';
     renderMovies(dataMovies);
    } catch (error) {
     console.log(`Error al conseguir las peliculas: ${error}`);
    }
   }

   