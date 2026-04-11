import { FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})


const Technologies = () => {
  return (
    <div className="pb-24">
        <motion.h2 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl text-[#2D4473]">Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
                variants={iconVariants(2.5)}
                initial='intial'
                animate='animate'
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl text-yellow-300"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(5)}
                initial='intial'
                animate='animate'
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiNextjsFill className="text-7xl text-yellow-400"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2.5)}
                initial='intial'
                animate='animate'
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-7xl text-orange-400"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(5)}
                initial='intial'
                animate='animate'
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-blue-400"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2.5)}
                initial='intial'
                animate='animate'
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaBootstrap className="text-7xl text-purple-400"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(5)}
                initial='intial'
                animate='animate'
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className="text-7xl text-cyan-400"/>
            </motion.div>
                <motion.div variants={iconVariants(2.5)}
                initial='intial'
                animate='animate'
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaReact className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(5)}
                initial='intial'
                animate='animate'
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNode className="text-7xl text-green-500"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies