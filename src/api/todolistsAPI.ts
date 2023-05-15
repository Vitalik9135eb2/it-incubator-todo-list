import axios from "axios/index";


const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "7c5f3953-7fae-4325-9a4f-8956ec3d0d04"
    }
}
export const todolistsAPI = {

    getTodoLists(){
        return axios.get("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)

    }
}