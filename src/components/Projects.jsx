function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with React and Tailwind CSS.",
      githubLink: "https://github.com/yourusername/portfolio",
    },
    {
      title: "Weather App",
      description: "Weather application using API integration.",
      githubLink: "https://github.com/yourusername/weather-app",
    },
    {
      title: "SoundWave E-commerce",
      description: "A responsive e-commerce website for premium headphones built using HTML, CSS, JavaScript, and Bootstrap.",
      githubLink: "https://github.com/parthnai21/soundwave-ecommerce",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-900 text-white py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-6">
                {project.description}
              </p>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
              >
                View Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



export default Projects;