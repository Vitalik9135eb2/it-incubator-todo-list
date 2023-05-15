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

//
// export const CreateTodolist = () => {
//
//     const [state, setState] = useState<any>(null)
//
//     useEffect(() => {
//
//         axios.post("https://social-network.samuraijs.com/api/1.1/todo-lists", {title: "dsaasdf"}, settings)
//             .then(response => setState(response.data))
//
//     }, [])
//
//
//     return <div> {JSON.stringify(state)}</div>
// }
// export const DeleteTodolist = () => {
//
//     const [state, setState] = useState<any>(null)
//
//     useEffect(() => {
//
//         const todolistId = "874e1452-b41e-4a25-a52e-ba045b47a564"
//
//         axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
//             .then(response => setState(response.data))
//
//     }, [])
//
//
//     return <div> {JSON.stringify(state)}</div>
// }
// export const UpdateTodolist = () => {
//
//     const [state, setState] = useState<any>(null)
//
//     useEffect(() => {
//         const todolistId = "874e1452-b41e-4a25-a52e-ba045b47a564"
//
//         axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title: "121212"}, settings)
//             .then(response => setState(response.data))
//
//     }, [])
//
//
//     return <div> {JSON.stringify(state)}</div>
// }
