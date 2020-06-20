import React from 'react';
import { useState } from 'react';
import { DisplayTask } from './DisplayTask';
import { useEffect } from 'react';
import { getTasksByUser, deleteTask } from '../../core/api/tasks.api';

export function TasksByUser() {

    const [userTasks, setUserTasks] = useState([]);

    const onTaskDelete = (id) => {
        deleteTask(id).then(() => {
            setUserTasks((prevState) => {
                return prevState.filter(t => t.id !== id);
            })
        }).catch((err) => console.error(err))
    }

    useEffect(() => {
        getTasksByUser().then((tasks) => {
            setUserTasks(tasks);
        })
    }, []);

    return (
        <div className="container">
            <div className="row">
                {userTasks.map(ut => <DisplayTask task={ut} key={ut.id} onDelete={onTaskDelete}></DisplayTask>)}
            </div>
        </div>
    )
}