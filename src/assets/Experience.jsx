function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold tracking-widest">
            EXPERIENCE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Professional Experience
          </h2>

          <p className="text-gray-500 mt-4">
            My journey as a Full Stack Developer
          </p>
        </div>

        {/* Experience Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-8 text-white">

            <div className="flex flex-col lg:flex-row lg:justify-between gap-4">

              <div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  Full Stack Developer
                </h3>

                <p className="mt-2 text-blue-100 text-lg">
                  National Instructional Media Institute
                </p>
              </div>

              <div className="text-left lg:text-right">
                <p className="text-blue-100">
                  📍 Chennai, India
                </p>

                <p className="text-blue-100">
                  📅 Mar 2022 - Present
                </p>
              </div>

            </div>

          </div>

          {/* Body */}
          <div className="p-8">

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-8">

              {[
                "PHP",
                "Laravel",
                "JavaScript",
                "MySQL",
                "REST API",
                "Analytics",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium"
                >
                  {tech}
                </span>
              ))}

            </div>

            {/* Responsibilities */}
            <div className="grid md:grid-cols-2 gap-5">

              <div className="bg-slate-50 rounded-xl p-5 hover:bg-blue-50 transition">
                ✓ Developed scalable full-stack web applications using
                PHP, Laravel and MySQL.
              </div>

              <div className="bg-slate-50 rounded-xl p-5 hover:bg-blue-50 transition">
                ✓ Secure REST API integration and backend optimization.
              </div>

              <div className="bg-slate-50 rounded-xl p-5 hover:bg-blue-50 transition">
                ✓ JavaScript form validation and DOM manipulation.
              </div>

              <div className="bg-slate-50 rounded-xl p-5 hover:bg-blue-50 transition">
                ✓ Event handling and real-time user input validation.
              </div>

              <div className="bg-slate-50 rounded-xl p-5 hover:bg-blue-50 transition">
                ✓ MySQL database design and query optimization.
              </div>

              <div className="bg-slate-50 rounded-xl p-5 hover:bg-blue-50 transition">
                ✓ Analytics, code reviews and technical training.
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;