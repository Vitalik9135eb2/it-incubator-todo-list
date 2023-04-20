import React from "react";
import {Provider} from "react-redux";
import {AppRootStateType, store} from "../../state/store";
import {combineReducers, createStore} from "redux";
import {todolistId1, todolistId2, todolistsReducer} from "../../state/todolists-reducer";
import {tasksReducer} from "../../state/tasks-reducer";
import {v1} from "uuid";


const rootReducer = combineReducers({
    todolist: todolistsReducer,
    task: tasksReducer
})

const initialGlobalState = {
    todolist: [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ],
    task: {
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true}
        ],
        [todolistId2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "React Book", isDone: true}
        ]
    }
}


const storyBookStore = createStore(rootReducer,initialGlobalState as AppRootStateType)

export const ReduxStoreProviderDecorator = (storyFn: any) => {
    return <Provider store={storyBookStore}>{storyFn()}</Provider>
}