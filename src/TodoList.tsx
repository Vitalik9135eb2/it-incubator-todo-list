import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    todoListId:string
    title: string
    tasks: Array<TaskType>
    removeTask: (todoListId: string,taskId: string) => void
    changeFilter: (todoListId: string, value: FilterValuesType) => void
    addTask: (todoListId:string,title: string) => void
    changeTaskStatus: (todoListId:string,taskId: string, isDone: boolean) => void
    filter: FilterValuesType
    updateTask:(todolistId:string, taskId:string,  updateTitle: string) => void
    updateTodolist:(todolistId:string,  updateTitle: string) => void
}

export function Todolist(props: PropsType) {


    const onAllClickHandler = () => props.changeFilter(props.todoListId,"all");
    const onActiveClickHandler = () => props.changeFilter(props.todoListId,"active");
    const onCompletedClickHandler = () => props.changeFilter(props.todoListId,"completed");

    const addTask = (title: string) => {
        props.addTask(props.todoListId, title)
    }

    const updateTodoListHandler = (updateTitle: string) =>{
        props.updateTodolist(props.todoListId, updateTitle)
    }





    return <div>
        <h3>
            {/*{props.title}*/}
            <EditableSpan title={props.title} callBack={updateTodoListHandler}/>
        </h3>

        <AddItemForm  addItem={addTask} />

        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(props.todoListId, t.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(props.todoListId, t.id, e.currentTarget.checked);
                    }

                    const updateTaskHandler =(updateTitle: string) =>{
                        props.updateTask(props.todoListId, t.id, updateTitle)
                    }

                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox"
                               onChange={onChangeHandler}
                               checked={t.isDone}
                        />

                        <EditableSpan title={t.title} callBack={updateTaskHandler}/>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>

        <div>
            <button className={props.filter === 'all' ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All</button>
            <button className={props.filter === 'active' ? "active-filter" : ""}
                onClick={onActiveClickHandler}>Active</button>
            <button className={props.filter === 'completed' ? "active-filter" : ""}
                onClick={onCompletedClickHandler}>Completed</button>
        </div>
    </div>
}
