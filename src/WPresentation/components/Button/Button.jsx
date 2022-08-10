import "./button.css"
import React from "react"
import Button from "react-bootstrap/Button"

const CustomButton = (props) => {
    return (
        <div>
            <Button onClick={props.updateActivity} id="button">{props.buttonTitle}</Button>
        </div>
    )
}

export default CustomButton