import axios from 'axios';
import { getLoggeduser } from './users.api';

const notesUrl = 'http://localhost:3003/notes';

export function getAllNotes() {
    return axios.get(notesUrl)
}

export function getNoteById(id) {
    return axios.get(`${notesUrl}/${id}`)
}

export function saveNote(noteData) {
    const loggedUser = getLoggeduser();

    if (noteData.id) {
        return axios.put(`${notesUrl}/${noteData.id}`, noteData);
    }

    noteData.authorId = loggedUser.id;
    noteData.authorName = loggedUser.name;
    noteData.date = new Date();

    return axios.post(notesUrl, noteData);
}