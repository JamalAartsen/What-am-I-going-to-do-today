import "./title.css"
import React from "react"

const Title = (props) => {
    return (
        <div>
            <h1 id="title">{props.title}</h1>
        </div>
    )
}

export default Title