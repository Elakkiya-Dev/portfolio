import React from 'react'

function Skills() {
    const skills = ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"];
  return (
    <section id="skills" className="p-10 bg-white text-gray-800">
      <h2 className="text-3xl font-bold">Skills</h2>
      <ul className="flex flex-wrap mt-3">
        {skills.map((skill) => (
          <li key={skill} className="bg-gray-200 rounded p-2 m-1">{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills