import React from "react";
import {AddItemForm} from "../../AddItemForm";
import {action} from "@storybook/addon-actions";

export default {
    title: "AddItemForm"
}


const callback = action("Value in input form")
export const AddItemFormBaseExample = () =>{


    return  <>
        <AddItemForm addItem={callback}/>
    </>
}