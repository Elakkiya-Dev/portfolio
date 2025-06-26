import React from 'react'

function Projects() {
    const projects = [
    {
      title: "Project One",
      description: "Description of project one.",
      link: "#"
    },
    {
      title: "Project Two",
      description: "Description of project two.",
      link: "#"
    },
  ];
  return (
    <section id="projects" className="p-10 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="text-blue-600">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects