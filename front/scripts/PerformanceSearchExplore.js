import renderMovies from "./renderMovies.js";
// import config from "../config.js";

const d = document;
const backUrl = window.location.hostname === "localhost" || window.location.hostname === '127.0.0.1' ?
'http://localhost:3000/movies':'https://app-cinema-back.onrender.com'

export default async function performSearchExplore() {
 
  const searchTerm = searchInput.value;
  console.log(searchTerm);

  // Verifica si se proporcionó un término de búsqueda
  if (searchTerm.trim() !== '') {
    try {
      const response = await axios.get(`${backUrl}?search=${searchTerm}`);
      const apiData = response.data;
      renderMovies(apiData);
      searchInput.value = '';

    } catch (error) {
      console.error(error.message);
    }
  } else {
    alert('Por favor, ingresa un título de búsqueda válido.');
  }
}
