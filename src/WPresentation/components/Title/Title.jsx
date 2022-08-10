import "./title.css"
import React from "react"
import { motion } from "framer-motion"

const Title = (props) => {
    return (
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            <h1 id="title">{props.title}</h1>
        </motion.div>
    )
}

export default Title