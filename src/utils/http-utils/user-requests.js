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

export function deleteUser(id) {
    return axios.delete(`${apiUrl}/${id}`);
}

export function createUser(user) {
    if(!user.picture)
        user.picture = `https://picsum.photos/200/300?random=${Math.random()}`;

    return axios.post(apiUrl, user);
}