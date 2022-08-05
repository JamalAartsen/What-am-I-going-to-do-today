import "./container.css"
import React from "react"
import ActivityDescription from "../ActivityDescription/ActivityDescription"
import Title from "../Title/Title"
import CustomButton from "../Button/Button"

const Container = () => {
    return (
        <div className="container">
            <div className="inside-container">
                <Title title="What am I going to do today?" />
                <ActivityDescription description="Baking a cake" />
                <CustomButton buttonTitle="Next"/>
            </div>
        </div>
    )
}

export default Container