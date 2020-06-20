import React, { useState } from 'react';
import { saveTask, getTaskById } from '../../core/api/tasks.api';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';

export function EditTask(props) {

    const [currTask, setCurrTask] = useState({ title: '', content: '', authorId: '', authorName: '', date: '' });
    const [isSucces, setIsSucces] = useState(false);

    useEffect(() => {
        if (props.computedMatch.params.id) {
            getTaskById(props.computedMatch.params.id).then((result) => {
                setCurrTask(result.data);
            })
        }
    }, [props.computedMatch.params.id])

    const onInputChange = (event) => {
        event.persist();
        setCurrTask((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    const onTaskSave = (event) => {
        event.preventDefault();
        saveTask(currTask).then(() => {
            setIsSucces(true);
        }).catch((err) => console.error(err));
    }

    return (
        <>
            {isSucces && <Redirect to="/tasks"></Redirect>}
            <div className="container">
                <div className="task-edit-wapper">
                    <form action="" className="user-edit-form" onSubmit={onTaskSave}>
                        <input type="text" id="title" name="title" placeholder="title" onChange={onInputChange} value={currTask.title} />
                        <input type="text" id="content" name="content" placeholder="content" onChange={onInputChange} value={currTask.content} />
                        <input type="text" id="status" name="status" placeholder="status" onChange={onInputChange} value={currTask.status} />
                        <input type="submit" value="Update" />
                    </form>
                </div>
            </div>
        </>
    )
}