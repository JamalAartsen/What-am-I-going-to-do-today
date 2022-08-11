import "./footer.css"
import React from "react"
import SocialIcon from "../SocialIcons/SocialIcon"
import { motion } from "framer-motion"
import CopyrightIcon from "../CopyrightIcon/CopyrightIcon"

const Footer = () => {
    return (
        <motion.div className="footer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="social-container-footer">
                <SocialIcon url="https://github.com/JamalAartsen" class="fab fa-github social-icon-footer" />
                <SocialIcon url="https://www.linkedin.com/in/jamal-aartsen-35a47615b/" class="fab fa-linkedin social-icon-footer" />
                <SocialIcon url="https://www.instagram.com/ijamall_/" class="fab fa-instagram social-icon-footer" />
            </div>
            <p className="copyright-text">Copyright © 2022 Design & Development by Jamal Aartsen</p>
        </motion.div>
    )
}

export default Footer