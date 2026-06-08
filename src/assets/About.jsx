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
<div className="absolute top-20 left-10 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl"></div>
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

        <div className="m-3 bg-indigo-100 rounded-lg p-1 flex items-center gap-2 w-fit shadow-lg">
          <div className="text-blue-600 items-center p-2">
            <i className="fa-solid fa-arrow-trend-up"></i>
          </div>
          <p className="text-pink-500 font-semibold p-2">Always learning. Always building.</p>
        </div>
      </div>

      {/* Right Card */}
      <div className="bg-white p-8 rounded-3xl shadow-xl shadow-blue-100 hover:shadow-xl transition-all">

      <div className="flex items-center gap-4 mb-4 ">

        <div className=" h-10 w-10 flex items-center justify-center rounded bg-blue-100 text-blue-600">
          <i className="fa-solid fa-border-all"></i>
        </div>
        
        <h3 className="text-3xl font-bold"> Quick Information</h3>

      </div>
      

        <div className="space-y-5">

          <div className="flex justify-between border-b pb-3">
              <div className="flex items-center gap-4">
                <i className="fa-regular fa-calendar"></i>
                <span className="font-semibold">Experience</span>
              </div>
            <span className="text-blue-600">4+ Years</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-briefcase gap-2"></i>
              <span className="font-semibold">Role</span>
            </div>
            <span className="text-pink-600">Full Stack Developer</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-location-dot gap-2"></i>
              <span className="font-semibold">Location</span> 
            </div>
            
            <span className="text-blue-600">Chennai</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-code"></i>
              <span className="font-semibold">Technologies</span>
            </div>
            
            <span className="text-pink-600">React, Laravel</span>
          </div>

        </div>

      </div>

    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

   

      <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:-translate-y-2 transition-all flex items-center gap-5 hover:cursor-pointer">
        <div className="bg-blue-100 h-14 w-14 flex items-center justify-center shadow-lg rounded-full gap-2 text-blue-600">
          <i class="fa-regular fa-calendar"></i>
        </div>
        <div className="flex flex-col justify-center">
            <h3 className="text-4xl font-bold text-blue-600">4+</h3>
            <p className="mt-2">Years</p>
            <div className="w-full h-1 bg-blue-600 mt-4 rounded-full "></div>
        </div>
        
      </div>



      
      <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:-translate-y-2 transition-all flex items-center gap-5 hover:cursor-pointer">
        <div className="bg-purple-100 h-14 w-14 flex items-center justify-center shadow-lg rounded-full gap-2 text-purple-600">
          <i className="fa-regular fa-folder-open"></i>
        </div>
        <div className="flex flex-col justify-center">
            <h3 className="text-4xl font-bold text-purple-600">10+</h3>
            <p className="mt-2">Projects</p>
            <div className="w-full h-1 bg-purple-600 mt-4 rounded-full "></div>
        </div>
        
      </div>





      <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:-translate-y-2 transition-all flex items-center gap-5 hover:cursor-pointer">
        <div className="bg-yellow-100 h-14 w-14 flex items-center justify-center shadow-lg rounded-full gap-2 text-yellow-600">
          <i className="fa-solid fa-code"></i>
        </div>
        <div className="flex flex-col justify-center">
            <h3 className="text-4xl font-bold text-yellow-600">10+</h3>
            <p className="mt-2">Technologies</p>
            <div className="w-full h-1 bg-yellow-600 mt-4 rounded-full "></div>
        </div>
        
      </div>




      
  <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:-translate-y-2 transition-all flex items-center gap-5 hover:cursor-pointer">
        <div className="bg-green-100 h-14 w-14 flex items-center justify-center shadow-lg rounded-full gap-2 text-green-600">
          <i className="fa-solid fa-trophy"></i>
        </div>
        <div className="flex flex-col justify-center">
            <h3 className="text-4xl font-bold text-green-600">100%</h3>
            <p className="mt-2">Dedication</p>
            <div className="w-full h-1 bg-green-600 mt-4 rounded-full "></div>
        </div>
        
      </div>


    </div>

  </div>
</section>
        
        
        </>
    )
}

export default About;