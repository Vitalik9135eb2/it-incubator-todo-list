import React from 'react';
import {TextField, IconButton} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";
import {useAddItemForm} from "./hooks/useAddItemForm";


type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export const AddItemForm = React.memo( (props: AddItemFormPropsType) => {
    console.log("Add item form")

    const {
        addItem,
        title,
        error,
        onChangeHandler,
        onKeyPressHandler
    } = useAddItemForm(props.addItem)



    return <div>
        <TextField variant="outlined"
                   error={!!error}
                   value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   label="Title"
                   helperText={error}
        />
        <IconButton color="primary" onClick={addItem}>
            <AddBox />
        </IconButton>
    </div>
})
