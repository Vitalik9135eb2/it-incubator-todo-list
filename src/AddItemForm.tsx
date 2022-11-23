import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button, TextField} from "@material-ui/core";
import {AddBoxOutlined} from "@material-ui/icons";


type AddItemFormPropsType ={
    addItem: (title: string) => void
}

export const AddItemForm = (props:AddItemFormPropsType ) => {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if (title.trim() !== "") {
            props.addItem( title.trim());
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addTask();
        }
    }


    return(
        <div>
            <TextField label={"Task name"}
                       variant={"outlined"}
                       value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       // className={error ? "error" : ""}
                        error={!!error}
                       helperText={error}
                       size={"small"}
            />
            <Button onClick={addTask} variant={"contained"} color={"secondary"}>
                <AddBoxOutlined/>
            </Button>

            {/*{error && <div className="error-message">{error}</div>} helperText*/}
        </div>
    )
}