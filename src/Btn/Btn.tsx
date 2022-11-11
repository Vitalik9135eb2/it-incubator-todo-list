import React from "react";

type btnPropsType ={
    onClick: () => void
    name: string
}
export const Btn = (props:btnPropsType) => {

    const onclickBtnHandler = () =>{
        // props.onClick()
        console.log("aaasd")
    }
    return(
        <button onClick={props.onClick}>{props.name}</button>
    )
}