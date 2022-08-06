import "./container.css"
import React, { useEffect, useState } from "react"
import ActivityDescription from "../ActivityDescription/ActivityDescription"
import Title from "../Title/Title"
import CustomButton from "../Button/Button"
import ActivityViewModel from "../../ViewModels"

const Container = () => {
    const { error, getActivity, activity } = ActivityViewModel()

    useEffect(() => {
        getActivity()
        console.log(error)
    })

    return (
        <div className="container">
            <div className="inside-container">
                <Title title="What am I going to do today?" />
                <ActivityDescription description={activity} />
                <CustomButton buttonTitle="Next" />
            </div>
        </div>
    )
}

export default Container