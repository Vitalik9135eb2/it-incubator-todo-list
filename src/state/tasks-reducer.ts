import {v1} from 'uuid';
import {AddTodolistActionType, RemoveTodolistActionType, todolistId1, todolistId2} from './todolists-reducer';
import {TaskStatuses, TaskType} from "../api/todolistsAPI";

export type RemoveTaskActionType = ReturnType<typeof removeTaskAC>
export type AddTaskActionType = ReturnType<typeof addTaskAC>
export type ChangeTaskStatusActionType = ReturnType<typeof changeTaskStatusAC>
export type ChangeTaskTitleActionType = ReturnType<typeof changeTaskTitleAC>


type ActionsType = RemoveTaskActionType
    | AddTaskActionType
    | ChangeTaskStatusActionType
    | ChangeTaskTitleActionType
    | AddTodolistActionType
    | RemoveTodolistActionType

const initialState: TaskType = {
    [todolistId1]: [
        // {id: v1(), title: "HTML&CSS", isDone: true},
        // {id: v1(), title: "JS", isDone: true}
    ],
    [todolistId2]: [
        // {id: v1(), title: "Milk", isDone: true},
        // {id: v1(), title: "React Book", isDone: true}
    ]
};

export const tasksReducer = (state: TaskType = initialState, action: ActionsType): TaskType => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return {
                ...state,
                [action.todolistId]: state[action.todolistId]
                    .filter(t => t.id !== action.taskId)
            }
        case 'ADD-TASK':
            return {
                ...state,
                [action.todolistId]: [{id: v1(), title: action.title, isDone: TaskStatuses.New}, ...state[action.todolistId]]
            }
        case 'CHANGE-TASK-STATUS':
            return {
                ...state,
                [action.todolistId]: state[action.todolistId]
                    .map(t => t.id === action.taskId
                        ? {...t, isDone: action.isDone}
                        : t
                    )
            }
        case 'CHANGE-TASK-TITLE':
            return {
                ...state,
                [action.todolistId]: state[action.todolistId]
                    .map(t => t.id === action.taskId
                        ? {...t, title: action.title}
                        : t
                    )
            }
        case 'ADD-TODOLIST': {
            return {
                ...state,
                [action.todolistId]: []
            }
        }

        case 'REMOVE-TODOLIST': {
            //let copyState = {...state}
            //delete copyState[action.id]
            const {[action.id]: [], ...rest} = {...state}
            return rest
        }

        default:
            // throw new Error("I don't understand this type")
            return state;
    }
}

export const removeTaskAC = (taskId: string, todolistId: string) => {
    return {type: 'REMOVE-TASK', taskId, todolistId} as const
}
export const addTaskAC = (title: string, todolistId: string) => {
    return {type: 'ADD-TASK', todolistId, title} as const
}
export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string) => {
    return {type: 'CHANGE-TASK-STATUS', todolistId, isDone, taskId} as const
}
export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string) => {
    return {type: 'CHANGE-TASK-TITLE', todolistId, title, taskId} as const
}
