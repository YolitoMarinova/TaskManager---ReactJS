import React, { useState } from 'react';
import { saveNote, getNoteById } from '../../core/api/notes.api';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';

export function EditNote(props) {

    const [currNote, setCurrNote] = useState({ title: '', content: '', authorId: '', authorName: '', date: '' });
    const [isSucces, setIsSucces] = useState(false);

    useEffect(() => {
        if (props.computedMatch.params.id){
            getNoteById(props.computedMatch.params.id)
        }
    })

    const onInputChange = (event) => {
        event.persist();
        setCurrNote((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    const onNoteSave = (event) => {
        event.preventDefault();
        saveNote(currNote).then(() => {
            setIsSucces(true);
        }).catch((err) => console.error(err));
    }

    return (
        <>
            {isSucces && <Redirect to="/notes"></Redirect>}
            <div className="note-edit-wapper">
                <form action="" className="user-edit-form" onSubmit={onNoteSave}>
                    <input type="text" id="title" name="title" placeholder="title" onChange={onInputChange} value={currNote.title} />
                    <input type="text" id="content" name="content" placeholder="content" onChange={onInputChange} value={currNote.content} />
                    <input type="submit" value="Update" />
                </form>
            </div>
        </>
    )
}