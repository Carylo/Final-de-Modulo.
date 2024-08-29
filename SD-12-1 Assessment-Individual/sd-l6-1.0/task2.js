import { getServerURL } from './task1.js';

export async function listUsers() {
    try {
        const url = getServerURL();
        const response = await fetch(url + "/users");

        // Verifica si la respuesta es correcta
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const users = await response.json();

        // Formatea la lista de usuarios
        const formattedUsers = users
            .map(user => 
                `{\n  id: ${user.id},\n  first_name: '${user.first_name}',\n  last_name: '${user.last_name}',\n  email: '${user.email}'\n}`
            )
            .join(',\n');
        
        // Imprime la lista formateada
        console.log(`[\n${formattedUsers}\n]`);
    } catch (error) {
        console.error('Error:', error);
    }
}

listUsers();
