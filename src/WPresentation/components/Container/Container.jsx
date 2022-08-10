import "./container.css"
import React, { useEffect, useRef } from "react"
import ActivityDescription from "../ActivityDescription/ActivityDescription"
import Title from "../Title/Title"
import CustomButton from "../Button/Button"
import ActivityViewModel from "../../ViewModels"

const Container = () => {
    const { getActivity, activity } = ActivityViewModel()
    const shouldCalled = useRef(true)

    useEffect(() => {
        if (shouldCalled.current) {
            getActivity()
            shouldCalled.current = false
        }
    }, [getActivity]);

    function updateActivity() {
        getActivity()
    }

    return (
        <div className="container">
            <div className="inside-container">
                <Title title="What am I going to do today?" />
                <ActivityDescription description={activity} />
                <CustomButton updateActivity={updateActivity} buttonTitle="Next" />
            </div>
        </div>
    )
}

export default Container