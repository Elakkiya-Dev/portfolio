import React from 'react'

function Home() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold">Hi, I'm [Your Name]</h1>
      <p className="text-xl mt-4">Front End Developer | React | TailwindCSS</p>
      <a href="#projects" className="bg-blue-600 text-white p-2 mt-4 rounded">View My Projects</a>
    </section>
  );
}

export default Home