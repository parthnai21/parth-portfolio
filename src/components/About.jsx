function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-900 text-white flex items-center"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-center">
          About Me
        </h2>

        <p className="text-gray-300 text-lg leading-8 text-center">
          Hello! I'm a passionate Frontend Developer who loves
          building responsive and user-friendly websites using
          React, JavaScript, and Tailwind CSS.
        </p>

        <p className="text-gray-300 text-lg leading-8 mt-4 text-center">
          I'm constantly learning new technologies and working on
          projects to improve my skills and create better user
          experiences.
        </p>
      </div>
    </section>
  );
}

export default About;