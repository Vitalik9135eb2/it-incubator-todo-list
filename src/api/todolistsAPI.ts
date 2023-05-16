import axios from "axios";
import React from "react";

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "7c5f3953-7fae-4325-9a4f-8956ec3d0d04"
    }
}
export const todolistsAPI = {

    getTodoLists(){
        return axios.get("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)
    },

    createTodoList(todoListTitle: string){
        return axios.post("https://social-network.samuraijs.com/api/1.1/todo-lists", {title: todoListTitle}, settings)
    },

    deleteTodoList(id: string){
        return  axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, settings)
    },

    updateTodoList(id: string, updateTitle: string){
        return axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, {title: updateTitle}, settings)
    }
}