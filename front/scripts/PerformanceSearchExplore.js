import renderMovies from "./renderMovies.js";
import config from "../config.js";

const d = document;
export default async function performSearchExplore() {
 
  const searchTerm = searchInput.value;
  console.log(searchTerm);

  // Verifica si se proporcionó un término de búsqueda
  if (searchTerm.trim() !== '') {
    try {
      const response = await axios.get(`${config.BACKEND_URL}?search=${searchTerm}`);
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
