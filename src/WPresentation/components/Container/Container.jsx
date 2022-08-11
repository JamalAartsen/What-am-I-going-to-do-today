import "./container.css"
import React from "react"
import ActivityDescription from "../ActivityDescription/ActivityDescription"
import Title from "../Title/Title"
import CustomButton from "../Button/Button"
import ActivityViewModel from "../../ViewModels"
import { motion } from "framer-motion"
import LoadingImage from "../LoadingIcon/LoadingIcon"
import Footer from "../Footer/Footer"
import Card from 'react-bootstrap/Card';

const Container = () => {
    const { getActivity, activity, loading, setLoading, disable, setDisable } = ActivityViewModel()

    function updateActivity() {
        setDisable(true)
        setLoading(true)
        getActivity()
    }

    return (
        <motion.div className="head-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Card className="card-container">
                <Card.Body>
                    <Card.Title>
                        <Title title="What am I going to do today?" />
                    </Card.Title>
                    <Card.Text>
                        {loading ? (<LoadingImage />) : (<ActivityDescription description={activity} />)}
                    </Card.Text>
                    <CustomButton disabled={disable} updateActivity={updateActivity} buttonTitle="Next" />
                </Card.Body>
            </Card>
            <Footer />
        </motion.div>
    )
}

export default Container