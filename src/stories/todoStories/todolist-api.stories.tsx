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
    const onChangeHandler = (e: any) => {
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

    const onChangeHandler = (e: any) => {
        setId(e.currentTarget.value)
    }

    const onclickHandler = () => {
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
    const [todolistId, setTodoListID] = useState<string>("")
    const [title, setTitle] = useState<any>(null)

    const onClickHandler = () => {
        todolistsAPI.updateTodoList(todolistId, title)
            .then(response => setState(response.data))
    }

    const onChangeIdHandler = (e: any) => {
        setTodoListID(e.currentTarget.value)
    }

    const onChangeTitleHandler = (e: any) => {
        setTitle(e.currentTarget.value)
    }

    return <div> {JSON.stringify(state)}
        <input placeholder={"Title"} value={title} onChange={onChangeTitleHandler}/>
        <input placeholder={"Id"} value={todolistId} onChange={onChangeIdHandler}/>
        <button onClick={onClickHandler}>update</button>
    </div>
}


export const GetTasks = () => {

    const [state, setState] = useState<any>(null)
    const [id, setId] = useState<string>("")

    const onClickHandler = () => {
        todolistsAPI.getTasks(id)
            .then(resp => setState(resp.data))
    }

    const onChangeHandler = (e: any) => {
        setId(e.currentTarget.value)
    }


    return <div> {JSON.stringify(state)}
        <input value={id} onChange={onChangeHandler}/>
        <button onClick={onClickHandler}>Get task</button>
    </div>
}
export const DeleteTasks = () => {

    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<string>("")
    const [todolistId, setTodolistId] = useState<string>("")

    const onClickHandler = () => {
        todolistsAPI.deleteTask(todolistId, taskId)
            .then(response => setState(response.data))
    }
    const onChangeTaskIdHandler = (e: any) => {
        setTaskId(e.currentTarget.value)
    }
    const onChangeTodolistIdHandler = (e: any) => {
        setTodolistId(e.currentTarget.value)
    }

    return <div> {JSON.stringify(state)}
        <input placeholder={"Task Id"} value={taskId} onChange={onChangeTaskIdHandler}/>
        <input placeholder={"Todolist Id"} value={todolistId} onChange={onChangeTodolistIdHandler}/>
        <button onClick={onClickHandler}>Delete</button>
    </div>
}
export const CreateTasks = () => {

    const [state, setState] = useState<any>(null)
    const [id, setId] = useState<string>("")
    const [title, setTitle] = useState<string>("")

    const onClickHandler = () => {
        todolistsAPI.createTask(id, title)
            .then(resp => setState(resp.data))
    }

    const onChangeIdHandler = (e: any) => {
        setId(e.currentTarget.value)
    }
    const onChangeTitleHandler = (e: any) => {
        setTitle(e.currentTarget.value)
    }

    return <div> {JSON.stringify(state)}
        <input placeholder={"Todolist Id"} value={id} onChange={onChangeIdHandler}/>
        <input placeholder={"Task Title"} value={title} onChange={onChangeTitleHandler}/>
        <button onClick={onClickHandler}>Create task</button>
    </div>
}
export const UpdateTasks = () => {

    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<string>("")
    const [todolistId, setTodolistId] = useState<string>("")

    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<number>(0)
    const [priority, setPriority] = useState<string>("")
    const [startDate, setStartDate] = useState<string>("")
    const [status, setStatus] = useState<number>(0)

    const onClickHandler = () => {
        todolistsAPI.updateTask(todolistId, taskId,{
            title: title,
            description: description,
            priority: priority,
            startDate: startDate,
            status: status
        })
            .then(response => setState(response.data))
    }



    return <div> {JSON.stringify(state)}
        <br/>
        <input placeholder={"Task Id"} value={taskId} onChange={(e)=>setTaskId(e.currentTarget.value)}/>
        <br/>
        <input placeholder={"Todolist Id"} value={todolistId} onChange={(e)=>setTodolistId(e.currentTarget.value)}/>
        <br/>
        <input placeholder={"Title"} value={title} onChange={(e) => setTitle(e.currentTarget.value)}/>
        <br/>
        <input placeholder={"Description"} value={description} onChange={(e) => setDescription(+e.currentTarget.value)}/>
        <br/>
        <input placeholder={"Priority"} value={priority} onChange={(e)=>setPriority(e.currentTarget.value)}/>
        <br/>
        <input placeholder={"StartDate"} value={startDate} onChange={(e)=>setStartDate(e.currentTarget.value)}/>
        <br/>
        <input placeholder={"Status"} value={status} onChange={(e)=>setStatus(+e.currentTarget.value)}/>
        <br/>
        <button onClick={onClickHandler}>Update</button>
    </div>
}

