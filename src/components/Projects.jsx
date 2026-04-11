import { PROJECTS } from "../constants"
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pb-4">
        <motion.h2 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 0.5}}
        className="my-20 text-center text-4xl text-[#2D4473]">Projects</motion.h2>
        {PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div 
                whileInView={{opacity: 1, x:0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 0.5}}
                className="w-full lg:w-1/4">
                    <img 
                    src={project.image} 
                    width={150}
                    height={150}
                    alt={project.title} 
                    className="mb-6 rounded"
                    />
                </motion.div>
                <motion.div 
                whileInView={{opacity: 1, x:0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 0.5}}
                className="w-full max-x-xl lg:w-3/4">
                    <a href={`https://phlucode.github.io/${project.linktag}`} target="_blank" rel="noopener noreferrer">
                        <h6 className="mb-2 font-semibold text-[#7A98BF] underline">{project.title}</h6>
                    </a>
                    <p className="mb-4 text-[#2D4473]">{project.description}</p>
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="mr-2 rounded bg-cyan-100 px-2 py-1 text-sm font-medium text-black">{tech}</span>
                    ))}
                </motion.div>
            </div>
        ))}
    </div>
  )
}

export default Projects