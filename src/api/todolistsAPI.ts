import axios from "axios";
import React from "react";

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "7c5f3953-7fae-4325-9a4f-8956ec3d0d04"
    }
}

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/todo-lists",
    ...settings
})

export type TodoListType = {
    id: string
    title: string
    addedDate: string
    order: number
}
type ResponseType <D = {}> ={
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
        return instance.get<TodoListType[]>("")
    },

    createTodoList(todoListTitle: string){
        return instance.post<ResponseType<{item: TodoListType}>  >("", {title: todoListTitle})
    },

    deleteTodoList(id: string){
        return  instance.delete<ResponseType>(`/${id}`)
    },

    updateTodoList(id: string, updateTitle: string){
        return instance.put<ResponseType>(`/${id}`, {title: updateTitle})
    },

    getTasks(todolistId: string){
        return instance.get<GetTypeTasksResponse>(`/${todolistId}/tasks`)
    },

    deleteTask(todoListId:string, taskId:string){
        return instance.delete<ResponseType>(`/${todoListId}/tasks/${taskId}`)
    }
}