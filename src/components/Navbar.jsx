import logo from '../assets/myLogo.png';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-10'src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://github.com/PhluCode" target="_blank" rel="noopener noreferrer">
                <FaGithub className='text-[#7A98BF]'/>
            </a>

            <a href="https://facebook.com/phlu.suwanchaicss/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className='text-[#7A98BF]'/>
            </a>

            <a href="https://instagram.com/phlu_gz/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className='text-[#7A98BF]'/>
            </a>
        </div>
    </nav>
  )
}

export default Navbar