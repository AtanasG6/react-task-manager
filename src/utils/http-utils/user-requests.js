import axios from "axios";

const apiUrl = 'http://localhost:3005/users';

// .then => resolved correctly
// .catch => error
// .finally => always executed
export function getAllUsers() {
    return axios.get(apiUrl);
}

export function getUserById(id) {
    return axios.get(`${apiUrl}/${id}`);
}

async function getUserByEmail(email) {
    const response = await axios.get(`${apiUrl}?email=${email}`);
    return response.data[0];
}

export function deleteUser(id) {
    return axios.delete(`${apiUrl}/${id}`);
}

export function saveUser(user) {
    if (!user.picture)
        user.picture = `https://picsum.photos/200/300?random=${Math.random()}`;

    if (user.id) {
        return axios.put(`${apiUrl}/${user.id}`, user);
    }

    return axios.post(apiUrl, user);
}

export async function registerUser(user) {
    const existingUser = await getUserByEmail(user.email);

    if (existingUser) {
        throw new Error('User with this email already exists');
    }

    // Here we already have some validation logic
    return saveUser(user);
}