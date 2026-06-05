function About(){
    return(
        <>
        
   <section
  id="about"
  className="py-20 bg-gradient-to-b from-white to-blue-50"
>
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <p className="text-blue-600 font-semibold tracking-widest">
        ABOUT ME
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-2">
        Turning Ideas Into Reality
      </h2>

      <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
    </div>

    {/* Main Content */}
    <div className="grid lg:grid-cols-2 gap-10">

      {/* Left Card */}
      <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">

        <h3 className="text-3xl font-bold mb-6 text-blue-600">
          Who Am I?
        </h3>

        <p className="text-gray-600 leading-8">
          I'm Sundar Raj, a Full Stack Developer with 4+ years of
          experience in building scalable web applications using
          React, Laravel, JavaScript, MySQL and REST APIs.
        </p>

        <p className="text-gray-600 leading-8 mt-4">
          I enjoy creating modern user interfaces, solving complex
          problems and delivering high-quality software solutions.
        </p>

      </div>

      {/* Right Card */}
      <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">

        <h3 className="text-3xl font-bold mb-6 text-blue-600">
          Quick Information
        </h3>

        <div className="space-y-5">

          <div className="flex justify-between border-b pb-3">
            <span className="font-semibold">Experience</span>
            <span>4+ Years</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span className="font-semibold">Role</span>
            <span>Full Stack Developer</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span className="font-semibold">Location</span>
            <span>Chennai</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span className="font-semibold">Technologies</span>
            <span>React, Laravel</span>
          </div>

        </div>

      </div>

    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

      <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:-translate-y-2 transition-all">
        <h3 className="text-4xl font-bold text-blue-600">4+</h3>
        <p className="mt-2">Years</p>
      </div>

      <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:-translate-y-2 transition-all">
        <h3 className="text-4xl font-bold text-blue-600">20+</h3>
        <p className="mt-2">Projects</p>
      </div>

      <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:-translate-y-2 transition-all">
        <h3 className="text-4xl font-bold text-blue-600">10+</h3>
        <p className="mt-2">Technologies</p>
      </div>

      <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:-translate-y-2 transition-all">
        <h3 className="text-4xl font-bold text-blue-600">100%</h3>
        <p className="mt-2">Dedication</p>
      </div>

    </div>

  </div>
</section>
        
        
        </>
    )
}

export default About;