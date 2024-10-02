// config.js
const config = {
    BACKEND_URL: window.location.hostname === 'localhost' 
        ? 'http://localhost:3000/movies' 
        : 'https://app-cinema-back.onrender.com'
};

export default config;
