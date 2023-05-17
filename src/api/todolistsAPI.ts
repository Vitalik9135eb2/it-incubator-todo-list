import axios from "axios";
import React from "react";

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "7c5f3953-7fae-4325-9a4f-8956ec3d0d04"
    }
}


export type TodoListType = {
    id: string
    title: string
    addedDate: string
    order: number
}

type ResponseType <D> ={
    resultCode: number
    message: string[]
    data:D
}

export type TaskType ={
    description:string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}
type GetTypeTasksResponse = {
    error: string | null
    totalCount: number
    items: TaskType[]
}
export const todolistsAPI = {

    getTodoLists(){
        return axios.get<TodoListType[]>("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)
    },

    createTodoList(todoListTitle: string){
        return axios.post<ResponseType<{item: TodoListType}>  >("https://social-network.samuraijs.com/api/1.1/todo-lists", {title: todoListTitle}, settings)
    },

    deleteTodoList(id: string){
        return  axios.delete<ResponseType<{}>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, settings)
    },

    updateTodoList(id: string, updateTitle: string){
        return axios.put<ResponseType<{}>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, {title: updateTitle}, settings)
    },

    getTasks(todolistId: string){
        return axios.get<GetTypeTasksResponse>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}/tasks`, settings)
    }
}