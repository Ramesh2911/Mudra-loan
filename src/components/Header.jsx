// src/components/Heading.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Heading = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleRedirect = (section) => {
    if (section === 'status' || section === 'apply') {
      navigate(`/${section}`);
    } else {
      navigate('/', { state: { section } });
    }
    setMenuOpen(false);
  };

  return (
    <header className="relative flex items-center justify-between px-4 py-2 bg-white shadow md:px-6">
      {/* Logo - left */}
      <div className="flex items-center">
        <img
          src="https://www.mudraloanindia.org.in/public/front/img/logo.png"
          alt="Dhani Logo"
          className="w-auto h-14 md:h-20"
        />
      </div>

      {/* Hamburger Icon - right on mobile */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Desktop Navigation - hidden on small */}
      <nav className="items-center hidden ml-auto space-x-6 font-bold text-gray-700 md:flex">
        <button onClick={() => handleRedirect('home')} className="hover:text-orange-700">HOME</button>
        <button onClick={() => handleRedirect('aboutus')} className="hover:text-orange-700">ABOUT US</button>
        <button onClick={() => handleRedirect('services')} className="hover:text-orange-700">SERVICES</button>
        <button onClick={() => handleRedirect('status')} className="hover:text-orange-700">CHECK STATUS</button>
        <button onClick={() => handleRedirect('contact')} className="hover:text-orange-700">CONTACT US</button>
        <button
          onClick={() => handleRedirect('apply')}
          className="px-5 py-2 font-bold text-white bg-orange-700 rounded hover:bg-orange-800"
        >
          Apply
        </button>
      </nav>

      {/* Mobile Navigation - visible when menuOpen */}
      {menuOpen && (
        <div className="absolute left-0 right-0 z-50 flex flex-col items-start px-6 py-5 space-y-4 text-base font-bold text-gray-700 bg-white shadow-md top-[68px] md:hidden">
          <button onClick={() => handleRedirect('home')} className="hover:text-orange-600">HOME</button>
          <button onClick={() => handleRedirect('aboutus')} className="hover:text-orange-600">ABOUT US</button>
          <button onClick={() => handleRedirect('services')} className="hover:text-orange-600">SERVICES</button>
          <button onClick={() => handleRedirect('privacy')} className="hover:text-orange-600">PRIVACY</button>
          <button onClick={() => handleRedirect('status')} className="hover:text-orange-600">CHECK STATUS</button>
          <button
            onClick={() => handleRedirect('apply')}
            className="px-5 py-2 font-bold text-white bg-orange-700 rounded hover:bg-orange-900"
          >
            Apply
          </button>
        </div>
      )}
    </header>
  );
};

export default Heading;
