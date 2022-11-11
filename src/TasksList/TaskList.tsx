import React, {ChangeEvent} from "react";
import {FilterValuesType, TaskType} from "../App";

type tasksListPropsType = {
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (filter: FilterValuesType) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
}


export const TasksList = (props:tasksListPropsType) => {

    const tasksJSXItemsList = props.tasks.length
        ? <ul>
            {
                props.tasks.map((task) => {
                    const removeTask = () => props.removeTask(task.id)
                    const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(task.id, e.currentTarget.checked)
                    const isDoneClass = task.isDone ? "isDone" : ""
                    return (
                        <li key={task.id} className={isDoneClass}>
                            <input
                                type="checkbox"
                                checked={task.isDone}
                                onChange={changeTaskStatus}
                            />
                            <span>{task.title}</span>
                            <button onClick={removeTask}>x</button>
                        </li>
                    )
                })
            }
        </ul>
        : <span>Your list is empty</span>

    return(
        <>
            {tasksJSXItemsList}

        </>
    )
}