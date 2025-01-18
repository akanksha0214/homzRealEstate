import React from 'react';
import { motion } from "framer-motion";
import {GiHamburgerMenu} from "react-icons/gi";

const Navbar = ({sidebar,setSidebar}) => {
    return (
        <nav className="absolute top-0 left-0 w-full pt-10 z-20">
            <div className="container">
                <div className="flex justify-between items-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            delay: 0.2
                        }} className="text-2xl font-semibold">
                        <span className="text-white">Travel bUddy</span>
                    </motion.h1>
                    <motion.div
                    initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            delay: 0.2
                        }} 
                        onClick={()=>setSidebar(!sidebar)}>
                        <GiHamburgerMenu className="text-3xl cursor-pointer " />
                    </motion.div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar