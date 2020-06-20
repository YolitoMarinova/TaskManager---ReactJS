import React, { useEffect } from 'react';
import { getAllTasks } from '../../core/api/tasks.api';
import { useState } from 'react';
import { DisplayTask } from './DisplayTask';

export function TasksList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getAllTasks().then((result) => {
            setTasks(result.data);
        })
    }, []);

    return (
        <div className="container">
            <div className="row">
                {tasks.map(t => <DisplayTask task={t} key={t.id}></DisplayTask>)}
            </div>
        </div>
    )
}