import "./container.css"
import React from "react"
import ActivityDescription from "../ActivityDescription/ActivityDescription"
import Title from "../Title/Title"
import CustomButton from "../Button/Button"
import ActivityViewModel from "../../ViewModels"
import { motion } from "framer-motion"
import LoadingImage from "../LoadingIcon/LoadingIcon"

const Container = () => {
    const { getActivity, activity, loading, setLoading, disable, setDisable } = ActivityViewModel()

    function updateActivity() {
        setDisable(true)
        setLoading(true)
        getActivity()
    }

    return (
        <div className="head-container">
            <motion.div className="container">
                <div className="inside-container">
                    <Title title="What am I going to do today?" />

                    {loading ? (<LoadingImage />) : (<ActivityDescription description={activity} />)}

                    <CustomButton disabled={disable} updateActivity={updateActivity} buttonTitle="Next" />
                </div>
            </motion.div>
        </div>
    )
}

export default Container