

import React,  {useEffect} from "react";
import Queen from './assets/Queen.pdf'

const ViewCV = ({ isModalOpen, onClose }) => {
    useEffect(() => {
        if (isModalOpen) {
          document.documentElement.classList.add("overflow-hidden"); // Prevent scrolling
        } else {
          document.documentElement.classList.remove("overflow-hidden"); // Allow scrolling
        }
    
        return () => {
          document.documentElement.classList.remove("overflow-hidden"); // Cleanup
        };
      }, [isModalOpen]);
    
    
      return (
        <div className="fixed inset-0 bg-[#D1D5DB9C] backdrop-blur-[3px] flex justify-center items-center z-50 p-2">
          <div className="relative bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 max-h-[95vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">My CV</h2>
    

        {/* CV Preview */}
        <iframe
          src={Queen}
          className="w-full h-[500px] border"
          title="CV Preview"
        ></iframe>

        {/* Close Button */}
        <button
className="mt-2 w-[40%] mx-auto flex justify-center bg-red-400 text-white p-2 rounded-md hover:bg-red-600"
onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewCV;
