import React from "react";
import LoadingIcon from "../../images/todo.svg"
import "./loadingicon.css"

const LoadingImage = () => {
    return (
        <div className="image-container">
            <img className="loading-image" src={LoadingIcon} alt="Loading image" />
        </div>
    )
}

export default LoadingImage