import React, {useEffect, useState} from "react";
import axios from "axios";
import {todolistsAPI} from "../../api/todolistsAPI";


export default {
    title: "API"
}


// const settings = {
//     withCredentials: true,
//     headers: {
//         "API-KEY": "7c5f3953-7fae-4325-9a4f-8956ec3d0d04"
//     }
// }
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

    useEffect(() => {

        todolistsAPI.createTodoList("NEW")
            .then(response => setState(response.data))

    }, [])


    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {

        const todolistId = "6817b264-a303-46e7-b70b-d54989657063"

            todolistsAPI.deleteTodoList(todolistId)
            .then(response => setState(response.data))

    }, [])


    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolist = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const todolistId = "aa0d72e3-4851-4c3d-a576-fb08c8a409ca"
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
