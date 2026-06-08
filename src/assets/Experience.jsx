import javascript_logo from "../Images/Javascript_logo.jpg"
import laravel_logo from "../Images/laravel_logo.jpg";
import mysql_logo from "../Images/mysql.jpg";
import api_logo from "../Images/API.jpg";
import react_logo from "../Images/react_logo.jpg";
import data_analysis from "../Images/data_analysis.jpg";


import Experience_logo from "../Images/exp.jpg";

function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
         
         <div className="flex items-center gap-2 text-center mx-auto bg-violet-200 text-center w-fit p-2 rounded-lg shadow shadow-violet-200 hover:cursor-pointer">
            <img src={Experience_logo} className="w-6 h-6 text-violet-600"></img>
            <p className="text-blue-600 font-semibold tracking-widest text-violet-600 ">            
              EXPERIENCE
            </p>
         </div>
          

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Professional <span className="text-violet-600">Experience</span>
          </h2>

          <p className="text-gray-500 mt-4">
            My journey as a Full Stack Developer
          </p>
        </div>

        {/* Experience Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-sky-600 p-8 text-white">
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
                <p className="text-blue-100 text-xl">
                  📍 Chennai, India
                </p>

                <p className="text-blue-100 text-xl">
                  📅 Mar 2022 - Present
                </p>
                <div className="text-right">                  
                  <p className="text-md font-semibold text-right text-green-700 bg-green-100 w-fit p-1 rounded-lg shadow"><span className="animate-ping rounded-full bg-sky-400 gap-2 text-green-100 gap-2">.</span> Current</p>
                </div>
                
              </div>

            </div>

          </div>

          {/* Body */}
          <div className="p-8">

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-8">

              {[ 
                        {
                          title : "Laravel",
                          title_img : laravel_logo
                        },
                        {
                          title : "JavaScript",
                          title_img : javascript_logo
                        },
                        {
                          title : "MySQL",
                          title_img : mysql_logo
                        },
                        {
                          title : "REST API",
                          title_img : api_logo
                        },
                        {
                          title : "React",
                          title_img : react_logo
                        },
                        {
                          title : "Analytics",
                          title_img : data_analysis
                        },
                        
                      ].map(
                          (skill) => (
                            
                           <span
                              key={skill.title}
                              className="px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg border border-blue-100 transition hover:cursor-pointer"
                            >
                            <div className="flex items-center w-24 ">
                              <img src={skill.title_img} className="w-8 h-8"></img>  
                              <p >{skill.title}</p>
                            </div>
                            </span>
                          )
                        )}

            </div>

            {/* Responsibilities */}
            <div className="grid md:grid-cols-2 gap-5">

              <div className="bg-slate-50 rounded-xl p-5 hover:bg-blue-50 transition hover:cursor-pointer">
                <i className="fa-regular fa-circle-check gap-2 text-purple-500"></i> Developed scalable full-stack web applications using
                PHP, Laravel and MySQL.
              </div>

              <div className="bg-slate-50 rounded-xl p-5 hover:bg-blue-50 transition hover:cursor-pointer">
                <i className="fa-regular fa-circle-check gap-2 text-purple-500"></i>  Secure REST API integration and backend optimization.
              </div>

              <div className="bg-slate-50 rounded-xl p-5 hover:bg-blue-50 transition hover:cursor-pointer">
                <i className="fa-regular fa-circle-check gap-2 text-purple-500"></i> JavaScript form validation and DOM manipulation.
              </div>

              <div className="bg-slate-50 rounded-xl p-5 hover:bg-blue-50 transition hover:cursor-pointer">
                <i className="fa-regular fa-circle-check gap-2 text-purple-500"></i> Event handling and real-time user input validation.
              </div>

              <div className="bg-slate-50 rounded-xl p-5 hover:bg-blue-50 transition hover:cursor-pointer">
                <i className="fa-regular fa-circle-check gap-2 text-purple-500"></i> MySQL database design and query optimization.
              </div>

              <div className="bg-slate-50 rounded-xl p-5 hover:bg-blue-50 transition hover:cursor-pointer">
                <i className="fa-regular fa-circle-check gap-2 text-purple-500"></i>  Analytics, code reviews and technical training.
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;