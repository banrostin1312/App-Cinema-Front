import renderMovies from "./renderMovies.js";
import config from "../../config.js"

const d = document;
const inicioinfo = d.getElementById('inicioInfo');
export async function performSearch() {
  const searchTerm = searchInput.value;
  console.log(searchTerm);

  // Verifica si se proporcionó un término de búsqueda
  if (searchTerm.trim() !== '') {
    try {
      const response = await axios.get(`${config.BACKEND_URL}?search=${searchTerm}`);
      const apiData = response.data;
      renderMovies(apiData);
      searchInput.value = '';
      inicioinfo.innerHTML = '';
    } catch (error) {
      console.error(error.message);
    }
  } else {
    alert('Por favor, ingresa un título de búsqueda válido.');
  }
}
