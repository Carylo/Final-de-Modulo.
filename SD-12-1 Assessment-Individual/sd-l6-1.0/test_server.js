import { getServerURL } from './task1.js'; // Ajusta la ruta si es necesario

// Verifica que la función devuelve la URL correcta
const serverURL = getServerURL();
console.log('Server URL:', serverURL);

// Realiza una solicitud fetch para asegurarte de que la URL es accesible
fetch(serverURL + "/test.json")
    .then(response => response.json())
    .then(data => {
        console.log('Data from server:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });