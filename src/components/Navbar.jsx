import logo from '../assets/myLogo.png';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 mb-20 -mx-8 px-8 backdrop-blur-md bg-white/70 border-b border-[#7A98BF]/20'>
        <div className='flex items-center justify-between py-5'>
            <div className='flex flex-shrink-0 items-center gap-3'>
                <span className='text-lg font-semibold tracking-tight text-[#2D4473]'>Portfolio</span>
            </div>
            <div className='flex items-center justify-center gap-5 text-2xl'>
                <a
                    href="https://github.com/PhluCode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-[#7A98BF] transition-all duration-200 hover:-translate-y-0.5 hover:text-[#2D4473]'>
                    <FaGithub/>
                </a>

                <a
                    href="https://facebook.com/phlu.suwanchaicss/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-[#7A98BF] transition-all duration-200 hover:-translate-y-0.5 hover:text-[#2D4473]'>
                    <FaFacebook/>
                </a>

                <a
                    href="https://instagram.com/phlu_gz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-[#7A98BF] transition-all duration-200 hover:-translate-y-0.5 hover:text-[#2D4473]'>
                    <FaInstagram/>
                </a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
