import React from 'react'

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-around">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default Navbar