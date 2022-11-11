import React from "react";

type titlePropsType = {
    title:string
}

export const Title = (props:titlePropsType) => {

    return(
        <div>
            <h2>{props.title}</h2>


        </div>
    )
}