import "./activitydescription.css"
import React from "react"
import { motion } from "framer-motion"

const ActivityDescription = (props) => {
    return (
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            <p id="description">{props.description}</p>
        </motion.div>
    )
}

export default ActivityDescription