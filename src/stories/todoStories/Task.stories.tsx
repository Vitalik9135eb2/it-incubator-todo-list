import React from "react";
import {action} from "@storybook/addon-actions";
import {Task} from "../../Task";

export default {
    title: "Task"
}


const removeTaskCallback = action("Task removed")
const changeTaskStatusCallback = action("Changed status")
const changeTaskTitleCallback = action("Changed title")
export const TaskBaseExample = () => {


    return (
        <>
            <Task removeTask={removeTaskCallback}
                  changeTaskStatus={changeTaskStatusCallback}
                  changeTaskTitle={changeTaskTitleCallback}
                  task={{id: '1', isDone: true, title: "CSS"}}
                  todolistId={"todoList1"}
            />

            <Task removeTask={removeTaskCallback}
                  changeTaskStatus={changeTaskStatusCallback}
                  changeTaskTitle={changeTaskTitleCallback}
                  task={{id: '2', isDone: false, title: "JS"}}
                  todolistId={"todoList2"}
            />
        </>


    )
}