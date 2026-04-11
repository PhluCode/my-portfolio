import workImg from '../assets/working.jpg'
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className='pb-4'>
        <h1 className='my-20 text-center text-4xl text-[#7A98BF]'>About 
            <span className='text-[#2D4473]'> Me</span>
        </h1>
        <div className='flex flex-wrap'>
            <motion.div 
            whileInView={{opacity: 1, x:0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 0.5}}
            className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className='w-96 rounded-2xl'src={workImg} alt="ME" />
                </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity: 1, x:0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 0.5}}
            className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start'>
                    <p className='my-2 max-w-xl py-6 text-[#7A98BF]'>{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About