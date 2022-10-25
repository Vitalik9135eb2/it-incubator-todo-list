import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {Btn} from "./components/Btn/Btn";

export type FilterValuesType = "all" | "active" | "completed" | "three";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    // changeFilter: (value: FilterValuesType) => void
    deleteAllTasks: () => void
    addTask: (newTitle: string) => void
}


export function Todolist(props: PropsType) {

    let [filter, setFilter] = useState<FilterValuesType>("all");

    let tasksForTodolist = props.tasks;

    if (filter === "active") {
        tasksForTodolist = props.tasks.filter(t => t.isDone === false);
    }
    if (filter === "completed") {
        tasksForTodolist = props.tasks.filter(t => t.isDone === true);
    }
    if (filter === "three") {
        tasksForTodolist = props.tasks.slice(0, 3)
    }

    const changeFilterHandler = (value: FilterValuesType)=> {
        setFilter(value);
    }

    const [newTitle, setNewTitle] = useState<string>("")

    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.currentTarget.value)

    }

    const addTaskHandler = () => {
        props.addTask(newTitle)
        setNewTitle(" ")
    }

    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter"){
            addTaskHandler()
        }
    }

    const removeTaskHandler = (id:string) => {
        props.removeTask(id)
    }



    return <div>

        <h3>{props.title}</h3>
        <div>
            <input value={newTitle}
                   onChange={onChangeInputHandler}
                   onKeyDown={onKeyDownHandler}
            />
            <Btn name={"+"} callBack={addTaskHandler}/>
        </div>
        <ul>
            {
                tasksForTodolist.map(t => {
                    return(
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <Btn name={'+'} callBack={() =>removeTaskHandler(t.id)}/>
                        </li>
                    )
                })
            }
        </ul>

        <div>
            <Btn name={"Delete all"} callBack={props.deleteAllTasks}/>
        </div>

        <div>

            <Btn name={"All"} callBack={() =>changeFilterHandler("all")}/>
            <Btn name={"Active"} callBack={() =>changeFilterHandler("active")}/>
            <Btn name={"Completed"} callBack={() =>changeFilterHandler("completed")}/>
            <Btn name={"First 3 tasks"} callBack={() =>changeFilterHandler("three")}/>

        </div>
    </div>
}

