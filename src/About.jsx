import React,{useState} from "react";
import one from './assets/pictures/one.jpg'
import ViewCV from './ViewCV'

    const About = () => {

      const [isModalOpen, setIsModalOpen] = useState(false);

  

      return (
        <div className="w-full bg-[#FFFAFA] px-0 lg:px-6 py-10 ">
           
<div className="container mx-auto px-6 lg:px-10 ">
{/* Title */}
<h2 className="bebas-neue-goals text-left my-2 text-2xl font-bold text-black">
About Me</h2>

  {/* Line Section */}
  <div className="relative w-4/4 mx-auto">
    {/* Black Line (Bottom) */}
    <div className="w-full h-0.5 bg-gray-200 " ></div>
    {/* White Line (Top) */}
    <div className="w-32 mb-0.5 h-0.5 bg-purple-500"></div>

  </div>
  </div>
   
        <div className="flex flex-col lg:flex-row mt-10 items-center gap-12">
          
            {/* Left Section - 60% */}
            {/* <div className="w-full lg:w-[60%]"> */}
            <div className="w-full lg:w-1/2">

            <div className=" overflow-hidden rounded-4xl shadow-lg group">
                      <img
                        src={one}
                        className="w-screen h-auto object-cover transition-all duration-500 grayscale "

                       />
                      </div>
            </div>
    
            {/* Right Section - 40% */}
            <div className="w-full lg:w-1/2 space-y-6">
          <div className="bebas-neue-goals text-lg font-semibold uppercase tracking-wider">
          <span className="bg-gradient-to-r from-[#D8BFD8] to-purple-500 text-transparent bg-clip-text">

            Queen_Codes
            </span>
          </div>

          <h2 className="text-4xl font-extrabold text-gray-400 leading-tight">
            Innovate. Build. Scale.  
            <span className="bg-gradient-to-r from-purple-200 to-purple-400 text-transparent bg-clip-text">
            {" "}I Turn Ideas into Reality.
            </span>
          </h2>

          <p className="text-lg text-gray-500">
         Hi, I’m Queen Samuel a Full Stack Developer with a strong focus on backend systems.
I build scalable, secure APIs and services using Node.js, Express, and modern databases. While I’m comfortable across the stack, I thrive in crafting efficient server-side logic and robust backend architectures. Outside of work, I enjoy exploring new backend technologies and contributing to personal projects.


          </p>
          <button
                     className="mt-2 p-4 bg-purple-500 text-white py-2 rounded-full hover:bg-purple-700"
                     onClick={() => setIsModalOpen(true)}>
                     View my C.V

                  </button>

        </div>
       
      </div>
      {isModalOpen && (
        <ViewCV
        isOpen ={isModalOpen}
        onClose={() => setIsModalOpen(false)}

        />
      )}
    </div>
  
      );
    };
    
    export default About;