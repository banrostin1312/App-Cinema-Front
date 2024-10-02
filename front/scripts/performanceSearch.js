import renderMovies from "./renderMovies.js";

const d = document;
const inicioinfo = d.getElementById('inicioInfo');
export async function performSearch() {
  const searchTerm = searchInput.value;
  const backURL = window.location.hostname === "localhost" || window.location.hostname === '127.0.0.1' ?
    'http://localhost:3000/movies' : 'https://app-cinema-back.onrender.com/movies'

  console.log(searchTerm);

  // Verifica si se proporcionó un término de búsqueda
  if (searchTerm.trim() !== '') {
    try {
      const response = await axios.get(`${backURL}?search=${searchTerm}`);
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
