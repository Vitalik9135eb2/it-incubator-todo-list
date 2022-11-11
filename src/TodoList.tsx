import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType, TaskType} from "./App";
import {Title} from "./Title/Title";
import {TasksList} from "./TasksList/TaskList";
import {Btn} from "./Btn/Btn";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    filter: FilterValuesType
    addTask: (title: string) => void
    removeTask: (taskId: string) => void
    changeFilter: (filter: FilterValuesType) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
}

const TodoList = (props: TodoListPropsType) => {
    const [error, setError] = useState<boolean>(false)
    const [title, setTitle] = useState("")

    const onClickAddTask = () => {
        const trimmedTitle = title.trim()
        if(trimmedTitle){
            props.addTask(trimmedTitle)
        } else {
            setError(true)
        }
        setTitle("")
    }
    const onChangeSetLocalTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }
    const changeFilterHandlerCreator = (filter: FilterValuesType) => () => {
        props.changeFilter(filter)
    }
    const onKeyDownEnterAddTask = (e: KeyboardEvent<HTMLInputElement>)=> e.key === "Enter" && onClickAddTask()
    const allBtnClass = props.filter === "all" ? "btn-active" : ""
    const activeBtnClass = props.filter === "active" ? "btn-active" : ""
    const completedBtnClass = props.filter === "completed" ? "btn-active" : ""

    const [show, setShow] = useState<boolean>(true)

    const showListHandler = () => {
        setShow(!show)
    }

    const btnName = show ? "hide" : "show"

    return (
        <div>

            <div className="titleWrap">
                <Title title="What to learn"/>
                <Btn onClick={showListHandler} name={btnName}/>
            </div>

            {
                show &&

                <div>
                    <div>
                        <input
                            value={title}
                            onChange={onChangeSetLocalTitle}
                            onKeyDown={onKeyDownEnterAddTask}
                            className={error ? "error" : ""}
                        />
                        <Btn onClick={onClickAddTask} name="+"/>
                        {error && <div style={{fontWeight: "bold", color: "hotpink"}}>Title is required</div>}
                    </div>


                    <TasksList
                        tasks={props.tasks}
                        removeTask={props.removeTask}
                        changeTaskStatus={props.changeTaskStatus}
                        changeFilter={props.changeFilter}
                    />

                    <div>
                        <Btn onClick={changeFilterHandlerCreator("all")} name="All"/>
                        <Btn onClick={changeFilterHandlerCreator("active")} name="Active"/>
                        <Btn onClick={changeFilterHandlerCreator("completed")} name="completed"/>

                    </div>

                </div>

            }

        </div>
    );
};

export default TodoList;