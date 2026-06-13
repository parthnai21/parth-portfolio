function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Responsive Design",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-950 text-white py-20"
    >
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          My Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-lg text-center hover:bg-blue-500 transition duration-300"
            >
              <h3 className="text-lg font-semibold">
                {skill}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


export default Skills;