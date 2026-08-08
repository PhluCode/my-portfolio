import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className='w-full lg:w-1/2'>
      <h1 className='mb-8 text-4xl text-[#7A98BF]'>About
        <span className='text-[#2D4473]'> Me</span>
      </h1>
      <p className='max-w-xl text-[#7A98BF]'>{ABOUT_TEXT}</p>
    </motion.div>
  )
}

export default About
