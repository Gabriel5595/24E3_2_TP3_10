import styles from "./todoItem.module.css"
import { useState } from 'react';

export default function TodoItem(props) {

    const [isCompleted, setIsCompleted] = useState(false);

    function completeTask() {
        setIsCompleted(true);
    }

    function deleteTask() {
        props.onTaskDelete(props.task)
    }

    return (
        <li style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
            {props.task}
            {!isCompleted && (
                <button onClick={() => completeTask()} style={{ marginLeft: '10px' }}>
                    Concluir
                </button>
            )}
            <button onClick={() => deleteTask()}>Delete</button>
        </li>
    )
}
