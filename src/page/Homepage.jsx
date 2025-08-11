import React from 'react';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import About from '../About';
import Skills from '../Skills';
import ContactForm from '../form';
import FlexDisplay from '../Projects';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import one from '../assets/pictures/one.jpg'
function HomePage() {
  return (
    <>
    <Sidebar one = {one}/>
          <div className="lg:pl-[16rem]">

      {/* <Navbar /> */}
      <section id="hero"><HeroSection /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><FlexDisplay /></section>
      <section id="contact"><ContactForm /></section>
      <Footer/>
      </div>
    </>
    
    );
  }
  
  export default HomePage;