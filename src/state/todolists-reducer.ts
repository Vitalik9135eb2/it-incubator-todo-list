import {v1} from 'uuid';
import {TodoListType} from "../api/todolistsAPI";

export type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST',
    id: string
}
export type AddTodolistActionType = {
    type: 'ADD-TODOLIST',
    title: string
    todolistId: string
}
export type ChangeTodolistTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE',
    id: string
    title: string
}
export type ChangeTodolistFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER',
    id: string
    filter: FilterValuesType
}

export type SetTodolistsActionType = {
    type: 'SET-TODOLISTS',
    todolists: Array<TodolistDomainType>
}

export type FilterValuesType = "all" | "active" | "completed";


export type TodolistDomainType = TodoListType & {
    filter:FilterValuesType
}

export let todolistId1 = v1()
export let todolistId2 = v1()

const initialState: Array<TodolistDomainType> = [
    // {id: todolistId1, title: "What to learn", filter: "all"},
    // {id: todolistId2, title: "What to buy", filter: "all"}
]
type ActionsType = RemoveTodolistActionType | AddTodolistActionType | ChangeTodolistTitleActionType | ChangeTodolistFilterActionType | SetTodolistsActionType;

export const todolistsReducer = (state: Array<TodolistDomainType> = initialState, action: ActionsType): Array<TodolistDomainType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(tl => tl.id != action.id)

        case 'ADD-TODOLIST':
            // return [...state, {id: action.todolistId, title: action.title, filter: "all"}]
            const newTodoListId:string = action.todolistId
            let newTodoList: TodolistDomainType = {
                id: newTodoListId,
                filter: "all",
                addedDate:"",
                order:0,
                title: action.title
            }

            return [newTodoList, ...state];

        case 'CHANGE-TODOLIST-TITLE': {
            const todolist = state.find(tl => tl.id === action.id);
            if (todolist) {
                // если нашёлся - изменим ему заголовок
                todolist.title = action.title;
            }
            return [...state];
        }
        case 'CHANGE-TODOLIST-FILTER': {
            const todolist = state.find(tl => tl.id === action.id);
            if (todolist) {
                // если нашёлся - изменим ему заголовок
                todolist.filter = action.filter;
            }
            return [...state];
        }

        case 'SET-TODOLISTS':{
            return action.todolists
        }
        default:
            // throw new Error("I don't understand this type")
            return state;
    }
}

export const removeTodolistAC = ( todolistId: string): RemoveTodolistActionType => {
    return { type: 'REMOVE-TODOLIST', id: todolistId}
}
export const addTodolistAC = (title: string): AddTodolistActionType => {
    return { type: 'ADD-TODOLIST', title: title, todolistId: v1()}
}
export const changeTodolistTitleAC = (todolistId: string, title: string): ChangeTodolistTitleActionType => {
    return { type: 'CHANGE-TODOLIST-TITLE', title: title, id: todolistId}
}
export const changeTodolistFilterAC = (todolistId: string, filter: FilterValuesType): ChangeTodolistFilterActionType => {
    return { type: 'CHANGE-TODOLIST-FILTER', filter: filter, id: todolistId}
}

export const setTodolistsAC = (todolists: Array<TodolistDomainType>): SetTodolistsActionType => {
    return { type: 'SET-TODOLISTS', todolists:todolists}
}
