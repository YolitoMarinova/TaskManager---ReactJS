import axios from 'axios';

const usersUrl = 'http://localhost:3003/users';

export function getAllUsers() {
    return axios.get(usersUrl);
}

export function getUserById(id) {
    return axios.get(`${usersUrl}/${id}`);
}