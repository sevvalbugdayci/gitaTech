import Logo from "../ui/Logo";
import { AiOutlineMail,AiOutlineClose,AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Header = () => {

  const [isMenuOpen,setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="flex justify-around items-center h-20 bg-slate-600 fixed bg-opacity-50 w-full z-10">
      <div className="flex justify-center items-center gap-3">
        <div className="w-12 h-14 md:hidden">
           <Logo/> 
        </div>
        <p className="text-white">Gita Teknoloji</p>
      </div>
      <nav>
        <ul  className="flex justify-between items-center gap-11 font-poppins text-white">
            <li>Innovation</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
      </nav>
      <div className="flex justify-between items-center gap-1 text-white md:hidden">
      <AiOutlineMail />
        <p><a href="mailto:info@gitateknoloji.com"> info@gitateknoloji.com</a></p>
      </div>

      <div className="md:block">
        <button onClick={toggleMenu}>
          {
            isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />
          }
        </button>
      </div>

     {
      isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-slate-600 bg-opacity-75">
          <ul>
            <li>Innovation</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      )
     }


    </div>
  );
}

export default Header
