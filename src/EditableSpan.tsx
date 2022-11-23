import React, {ChangeEvent, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import {TextField} from "@material-ui/core";
import input = Simulate.input;

type EditableSpanPropsType = {
    title: string
    callBack:(newTitle: string) => void
}

export const  EditableSpan = (props: EditableSpanPropsType) => {

    const[edit, setEdit] = useState<boolean>(false)
    const [updateTitle, setUpdateTitle] = useState<string>(props.title)

    const addTask = () =>{
        props.callBack(updateTitle)
    }

    const onDoubleClickHandler = () => {
        setEdit(!edit)
       edit && addTask()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>{
        setUpdateTitle(e.currentTarget.value)
    }

    return(
        edit
            // ? <input
            //     value={updateTitle}
            //     onBlur={onDoubleClickHandler}
            //     autoFocus
            //     onChange={onChangeHandler}
            // />

            ? <TextField
                value={updateTitle}
                    onBlur={onDoubleClickHandler}
                    autoFocus
                    onChange={onChangeHandler}
            />
            :<span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
    )
}