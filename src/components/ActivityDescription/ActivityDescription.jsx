import "./activitydescription.css"
import React from "react"

const ActivityDescription = (props) => {
    return (
        <div>
            <p id="description">{props.description}</p>
        </div>
    )
}

export default ActivityDescription