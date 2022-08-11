import "./socialicon.css"
import React from "react"

const SocialIcon = (props) => {
    return (
        <div>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
                <i className={props.class}></i>
            </a>
        </div>
    )
}

export default SocialIcon