import axios from 'axios';
import { getLoggeduser } from './users.api';

const tasksUrl = 'http://localhost:3003/tasks';

export function getAllTasks() {
    return axios.get(tasksUrl)
}

export function getTaskById(id) {
    return axios.get(`${tasksUrl}/${id}`)
}

export function saveTask(taskData) {
    const loggedUser = getLoggeduser();

    if (taskData.id) {
        return axios.put(`${tasksUrl}/${taskData.id}`, taskData);
    }

    taskData.authorId = loggedUser.id;
    taskData.authorName = loggedUser.name;
    taskData.status = 
    taskData.date = new Date();

    return axios.post(tasksUrl, taskData);
}