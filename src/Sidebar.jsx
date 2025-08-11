// Sidebar.jsx
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import one from './assets/pictures/one.jpg'

import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About Me", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Contact Me", to: "contact" },
];

export default function Sidebar({ one }) {
  const [open, setOpen] = useState(false);

  const linkClasses = "cursor-pointer py-2 px-3 rounded transition-all duration-200";
  const activeClasses = "bg-white/20 font-semibold";

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex fixed inset-y-0 left-0 w-64 bg-purple-950 backdrop-blur z-50 flex-col p-6 gap-8">
        {/* Top image/logo */}
        <div className="flex-shrink-0 flex justify-center">
          <img
            src={one}
            alt="Logo"
            className="h-40 w-auto rounded-full object-cover border-2 border-white/90"
          />
          
        </div>
        <div className=" item-center justify-center text-center text-2xl text-white font-semibold">
Queen Samuel
        </div>

        {/* Nav links */}
        <nav className="flex-1 flex flex-col space-y-3 text-white text-base">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth
              duration={700}
              spy
              offset={-80}
              activeClass={activeClasses}
              className={`${linkClasses} flex items-center justify-start`}
            >
              <span className="w-full">{item.label}</span>
            </ScrollLink>
          ))}
        </nav>

        {/* Hire Me button */}
        <div>
          <ScrollLink
            to="contact"
            smooth
            duration={700}
            className="block text-center py-3 px-6 font-semibold bg-gradient-to-r from-purple-500 to-purple-800 text-white rounded-md"
          >
            Hire Me
          </ScrollLink>
        </div>
      </div>

      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-black/50 backdrop-blur">
        <div className="flex items-center gap-3">
          <img src={one} alt="Logo" className="h-10 w-auto rounded-full object-cover" />
        </div>
        <button onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu className="text-white" />
        </button>
      </div>

      {/* Mobile drawer with animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-60 bg-[#D8BFD8]/90 flex flex-col p-8 lg:hidden"
          >
            <div className="flex justify-between items-center mb-8">
              <img src={one} alt="Logo" className="h-14 w-auto rounded-full object-cover" />
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="text-white" size={28} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col space-y-6 text-center text-lg">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth
                  duration={700}
                  spy
                  offset={-80}
                  activeClass="underline font-semibold"
                  className="cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </ScrollLink>
              ))}
            </nav>
            <div className="mt-8">
              <ScrollLink
                to="contact"
                smooth
                duration={700}
                className="block mx-auto w-fit py-3 px-8 font-semibold bg-gradient-to-r from-purple-500 to-purple-800 text-white rounded-md"
                onClick={() => setOpen(false)}
              >
                Hire Me
              </ScrollLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer so page content doesn’t underlap desktop sidebar */}
      <div className="hidden lg:block w-[16rem]" />
    </>
  );
}
