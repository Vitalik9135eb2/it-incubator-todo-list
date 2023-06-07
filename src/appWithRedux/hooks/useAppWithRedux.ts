import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {useCallback} from "react";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "../../state/tasks-reducer";
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC
} from "../../state/todolists-reducer";
import {TaskType} from "../../Todolist";





export type FilterValuesType = "all" | "active" | "completed";

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}
export const useAppWithRedux = () => {

    const dispatch = useDispatch()

    const  todolists = useSelector<AppRootStateType, Array<TodolistType>>(state => state.todolist)

    const  tasks = useSelector<AppRootStateType, TasksStateType>(state => state.task)

    const removeTask = useCallback ((id: string, todolistId: string) => {

        const action = removeTaskAC(id, todolistId)
        dispatch(action)
    }, [])

    const addTask = useCallback ((title: string, todolistId: string) => {
        const action = addTaskAC(title, todolistId)
        dispatch(action)
    }, [])

    const changeStatus = useCallback ((id: string, isDone: boolean, todolistId: string) => {
        const action = changeTaskStatusAC(id, isDone, todolistId)
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