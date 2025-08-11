import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from './assets/pictures/logo.png'
import { Link } from "react-scroll"
 

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  
    const toggleNavbar = () => {
      setMobileDrawerOpen(!mobileDrawerOpen);
    };
  return (
    <nav className="sticky top-0 z-50 py-3  backdrop-blur-lg
     border-b border-neutral-700/80">
    <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 px-6">
          <img className=" h-10 w-15" src={logo} alt="Logo" />
           </div>
           
           <div className="hidden lg:flex justify-center space-x-5 items-center px-6">
           <Link to="about" smooth={true} duration={800} className="py-2 px-2 bebas-neue-regular cursor-pointer">About Me</Link>
           <Link to="skills" smooth={true} duration={800} className="py-2 px-2 bebas-neue-regular cursor-pointer">Skills</Link>
           <Link to="projects" smooth={true} duration={800} className="py-2 px-2 bebas-neue-regular cursor-pointer">Projects</Link>
           <Link to="contact" smooth={true} duration={800} className="py-2 px-2 bebas-neue-regular cursor-pointer">Contact Me</Link>
           <Link to="contact" smooth={true} duration={800} className="py-2 px-2 bebas-neue-regular cursor-pointer bg-purple-400  text-white border rounded-md"            >
            Hire Me
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
  <div className="fixed inset-0 z-50 bg-[#D8BFD8] bg-opacity-85 flex flex-col justify-center items-center h-screen w-full lg:hidden transition-opacity duration-300 ease-in-out opacity-100 scale-100">
    
    {/* Navigation Links */}
    <div className="flex flex-col space-y-5 text-center">
    <Link to="about" smooth={true} duration={800} className="py-2 px-2 bebas-neue-regular cursor-pointer">About Me</Link> 
    <Link to="skills" smooth={true} duration={800} className="py-2 px-2 bebas-neue-regular cursor-pointer">Skills</Link>
    <Link to="projects" smooth={true} duration={800} className="py-2 px-2 bebas-neue-regular cursor-pointer">Projects</Link>
    <Link to="contact" smooth={true} duration={800} className="py-2 px-2 bebas-neue-regular cursor-pointer">Contact Me</Link>
     <Link to="contact" smooth={true} duration={800}
        className="py-3 px-6 text-lg font-semibold bg-gradient-to-r from-purple-500 to-purple-800 text-white rounded-md"
      >
        Hire me
      </Link>
    </div>
 <button
      onClick={() => setMobileDrawerOpen(false)}
      className="absolute top-6 right-6 text-white text-3xl"
    >
      ✕
    </button>
          </div>
        )}
      </div>
       
    </nav>
     
  );
};
            
    


  
export default Navbar