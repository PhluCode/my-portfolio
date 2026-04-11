import { HERO_CONTENT } from "../constants";
import profile from '../assets/myProfile.jpg';
import { motion } from "framer-motion";

const container = (daley) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: daley}
    }
})

const Hero = () => {
  return (
    <div className='pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 mx-auto'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                        variants={container(0)}
                        initial='hidden'
                        animate='visible'
                        className="pb-8 text-5xl font-thin traking-tight lg:mt-16 lg:text-7xl text-[#2D4473]">
                        Suwanchai Chaisuwansri
                    </motion.h1>
                </div>
                    <motion.p 
                        variants={container(0.5)}
                        initial='hidden'
                        animate='visible'
                        className="bg-gradient-to-r from-sky-300 via-slate-500 to-green-500 bg-clip-text text-3xl tracking-tight text-transparent">
                        Portfolio
                    </motion.p>
                    <motion.p 
                        variants={container(1)}
                        initial='hidden'
                        animate='visible'
                        className="my-2 max-w-xl py-6 font-light text-[#7A98BF]">
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            {/* <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img 
                        initial={{x:100, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 1 ,delay: 1.3}}
                        className="rounded-3xl w-96"
                        src={profile} 
                        alt="PhluGieZ" 
                    />
                </div>
            </div> */}
        </div>
        
    </div>
  )
}

export default Hero