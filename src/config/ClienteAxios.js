import axios from 'axios';

export const ClienteAxios = axios.create({
    baseURL: 'http://127.0.0.1:8000/api', // Asegúrate de que esta URL apunte correctamente a tu backend y a la ruta API
    headers: {
        'Content-Type': 'application/json', // Configura los encabezados según tus necesidades
        // Puedes agregar más encabezados aquí si es necesario
    },
    withCredentials: true, // Si necesitas enviar cookies con las solicitudes (por ejemplo, para autenticación)
});