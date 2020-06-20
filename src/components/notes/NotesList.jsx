import React, { useEffect } from 'react';
import { getAllNotes } from '../../core/api/notes.api';
import { useState } from 'react';
import { DisplayNote } from './DisplayNote';

export function NotesList() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getAllNotes().then((result) => {
            setNotes(result.data);
        })
    }, []);

    return (
        <div>
            {notes.map(n => <DisplayNote note={n} key={n.id}></DisplayNote>)}
        </div>
    )
}