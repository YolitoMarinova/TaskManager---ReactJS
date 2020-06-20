import React, { useState, useEffect } from 'react';
import { getAllTasks, deleteTask } from '../../core/api/tasks.api';
import { DisplayTask } from './DisplayTask';

export function TasksList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getAllTasks().then((result) => {
            setTasks(result.data);
        })
    }, []);

    const onTaskDelete = (id) => {
        deleteTask(id).then(() => {
            setTasks((prevState) => {
                return prevState.filter(t => t.id !== id);
            })
        }).catch((err) => console.error(err))
    }
    return (
        <div className="container">
            <div className="row">
                {tasks.map(t => <DisplayTask task={t} key={t.id} onDelete={onTaskDelete}></DisplayTask>)}
            </div>
        </div>
    )
}