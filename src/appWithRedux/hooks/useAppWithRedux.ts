import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {useCallback} from "react";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "../../state/tasks-reducer";
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC, TodolistDomainType
} from "../../state/todolists-reducer";
import {TaskStatuses, TaskType} from "../../api/todolistsAPI";
import {FilterValuesType} from "../../AppWithReducers";


export type TasksStateType = {
    [key: string]: Array<TaskType>
}
export const useAppWithRedux = () => {

    const dispatch = useDispatch()

    const  todolists = useSelector<AppRootStateType, Array<TodolistDomainType>>(state => state.todolist)

    const  tasks = useSelector<AppRootStateType, TasksStateType>(state => state.task)

    const removeTask = useCallback ((id: string, todolistId: string) => {

        const action = removeTaskAC(id, todolistId)
        dispatch(action)
    }, [])

    const addTask = useCallback ((title: string, todolistId: string) => {
        const action = addTaskAC(title, todolistId)
        dispatch(action)
    }, [])

    const changeStatus = useCallback ((id: string, status: TaskStatuses, todolistId: string) => {
        const action = changeTaskStatusAC(id, status, todolistId)
        dispatch(action)
    }, [])

    const changeTaskTitle = useCallback ((id: string, newTitle: string, todolistId: string) => {
        const action = changeTaskTitleAC(id,newTitle,todolistId)
        dispatch(action)
    }, [])

    const changeFilter = useCallback ((value: FilterValuesType, todolistId: string) => {
        const action = changeTodolistFilterAC(todolistId, value)
        dispatch(action)
    }, [])

    const removeTodolist = useCallback ((id: string) => {
        const action = removeTodolistAC( id)
        dispatch(action)
    }, [])

    const changeTodolistTitle = useCallback( (id: string, title: string) => {
        const action = changeTodolistTitleAC(id,title)
        dispatch(action)
    },[])

    const addTodolist = useCallback((title: string) =>{
        const action = addTodolistAC(title)
        dispatch(action)
    }, [])


    return{
        todolists,
        tasks,
        removeTask,
        addTask,
        changeStatus,
        changeTaskTitle,
        changeFilter,
        removeTodolist,
        changeTodolistTitle,
        addTodolist
    }
}