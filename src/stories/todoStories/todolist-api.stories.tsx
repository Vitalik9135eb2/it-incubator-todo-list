import React, {useEffect, useState} from "react";
import axios from "axios";
import {todolistsAPI} from "../../api/todolistsAPI";


export default {
    title: "API"
}

export const GetTodolist = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {

        todolistsAPI.getTodoLists()
            .then(resp => setState(resp.data))


    }, [])


    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {

    const [state, setState] = useState<any>(null)
    const [title, setTitle] = useState<string>("")
    const onclickHandler = () => {
        todolistsAPI.createTodoList(title)
            .then(response => setState(response.data))
    }
    const onChangeHandler = (e:any) => {
        setTitle(e.currentTarget.value)
     }


    return <div> {JSON.stringify(state)}

        <input value={title} onChange={onChangeHandler}/>
        <button onClick={onclickHandler}>Create Todolist</button>

    </div>
}
export const DeleteTodolist = () => {

    const [state, setState] = useState<any>(null)
    const [id, setId] = useState<string>("")

    const onChangeHandler = (e: any) =>{
        setId(e.currentTarget.value)
    }

    const onclickHandler = () =>{
        todolistsAPI.deleteTodoList(id)
            .then(response => setState(response.data))
    }

    return <div> {JSON.stringify(state)}
        <input value={id} onChange={onChangeHandler}/>
        <button onClick={onclickHandler}>delete</button>
    </div>
}
export const UpdateTodolist = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const todolistId = "cf52ffdb-fa5f-45a3-be16-7207618d7946"
        const title = "!!!!!!!!!"
        todolistsAPI.updateTodoList(todolistId, title)
            .then(response => setState(response.data))

    }, [])


    return <div> {JSON.stringify(state)}</div>
}


export const GetTasks = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {

        const todolistId = "bf9cf9f6-5d98-48ba-91e4-8766fc67ab9c"

        todolistsAPI.getTasks(todolistId)
            .then(resp => setState(resp.data))

    }, [])


    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTasks = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {

        const todolistId = "20dbb5c9-e893-416a-afc1-b736e810dcf0"
        const taskId = ""

        todolistsAPI.deleteTask(todolistId, taskId)
            .then(response => setState(response.data))

    }, [])


    return <div> {JSON.stringify(state)}</div>
}