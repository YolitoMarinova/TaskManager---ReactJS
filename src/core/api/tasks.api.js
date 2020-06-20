import axios from 'axios';
import { getLoggeduser } from './users.api';

const tasksUrl = 'http://localhost:3003/tasks';

export function getAllTasks() {
    return axios.get(tasksUrl)
}

export function getTaskById(id) {
    return axios.get(`${tasksUrl}/${id}`)
}

export async function getTasksByUser() {
    const userId = getLoggeduser().id;
    const alltasks = (await getAllTasks()).data;

    return alltasks.filter(t => t.authorId === userId);
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

export function deleteTask(id) {
    return axios.delete(`${tasksUrl}/${id}`);
}