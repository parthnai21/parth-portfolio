function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-slate-950 text-white"
    >
      <div className="text-center px-4">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm Parth Nai
        </h1>

        <h2 className="text-2xl text-blue-400 mb-4">
          Frontend Developer
        </h2>

        <p className="max-w-2xl mx-auto text-gray-400 mb-6">
          I build responsive and user-friendly web applications
          using React, JavaScript, and Tailwind CSS.
        </p>
       
       <div className="flex gap-4 justify-center mt-6">
  <a
    href="#projects"
    className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600"
  >
    View My Work
  </a>

  <a
    href="/Parth-Nai-Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600"
  >
    Resume
  </a>
</div>
      </div>


    </section>
  );
}



export default Hero;