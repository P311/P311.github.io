import React, { useState, useEffect } from 'react';

const NavBar = () => {

  const [scrollY, setScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsNavVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const sections = ["Header", "Experience", "Skills", "Projects", "Contact"];

  return (      
  <nav 
    className={`
      fixed top-10 md:left-10 md:right-10 lg:left-40 
      lg:right-40 z-50 transition-all duration-300 invisible lg:visible md:visible
      ${isNavVisible 
        ? 'translate-y-0 opacity-100' 
        : '-translate-y-full opacity-0'}
      `}
  > 
    <div className="bg-slate-800 backdrop-blur-lg rounded-3xl shadow-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className= "text-white font-bold">Linhao Liu</span>
        <div className="flex gap-8">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              {id}
            </button>
          ))}
        </div>
      </div>
    </div>
  </nav>);
}

export default NavBar;