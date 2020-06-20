import axios from 'axios';

const usersUrl = 'http://localhost:3003/users';

export function getAllUsers() {
    return axios.get(usersUrl);
}

export function getUserById(id) {
    return axios.get(`${usersUrl}/${id}`);
}

export function getLoggeduser() {
    return JSON.parse(localStorage.getItem('loggedUser'));
}

export async function register(userData) {
    const users = (await getAllUsers()).data;

    if (users.find(u => u.email === userData.email)) {
        throw new Error("Email already exist!");
    }

    userData = {
        ...userData,
        isActive: true,
        isAdmin: false,
        picture: "https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=ji6Xj8tv"
    };

    return axios.post(usersUrl, userData)
}

export async function login(userData) {
    const users = (await getAllUsers()).data;

    const loggedUser = users.find(u => u.email === userData.email && u.password.toString() === userData.password);

    if (loggedUser) {
        localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
        return;
    }
    throw new Error('Incorrect password or username!');
}

export function logOut() {
    localStorage.removeItem('loggedUser');
}

export function editUser(userData) {
    return axios.put(`${usersUrl}/${userData.id}`, userData)
}