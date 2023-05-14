import React, {useEffect, useState} from "react";
import axios from "axios";


export default {
    title: "API"
}


const settings = {
    withCredentials: true
}
export const GetTodolist = () =>{

    const [state, setState] = useState<any>(null)

    useEffect( () => {

        axios.get("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)
            .then(response => setState(response.data))

    }, [])


    return <div> {JSON.stringify(state)}</div>
}


export const CreateTodolist = () =>{

    const [state, setState] = useState<any>(null)

    useEffect( () => {

        axios.post("https://social-network.samuraijs.com/api/1.1/todo-lists",{title: "dsaasdf"}, settings)
            .then(response => setState(response.data))

    }, [])


    return <div> {JSON.stringify(state)}</div>
}


export const DeleteTodolist = () =>{

    const [state, setState] = useState<any>(null)

    useEffect( () => {

        axios.post("https://social-network.samuraijs.com/api/1.1/todo-lists",{title: "dsaasdf"}, settings)
            .then(response => setState(response.data))

    }, [])


    return <div> {JSON.stringify(state)}</div>
}