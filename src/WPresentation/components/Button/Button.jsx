import "./button.css"
import React from "react"
import Button from "react-bootstrap/Button"
import { motion } from "framer-motion"

const CustomButton = (props) => {
    return (
        <motion.div whileHover={{ scale: 1.1 }}  initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            <Button onClick={props.updateActivity} id="button" disabled={props.disabled}>{props.buttonTitle}</Button>
        </motion.div>
    )
}

export default CustomButton