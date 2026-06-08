import linkedin from "../Images/linkedin.png";
import github from "../Images/github1.jpg";
import email from "../Images/Email.jpg";
import profile from "../Images/sundar_img_2.jpg";

import javascript_logo from "../Images/Javascript_logo.jpg"
import laravel_logo from "../Images/laravel_logo.jpg";
import mysql_logo from "../Images/mysql.jpg";
import api_logo from "../Images/API.jpg";

import blob1 from "../Images/blob1.jpg";

function Slider() {
  return (
   <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-200">

  {/* Background Blur Effects */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl"></div>


  {/* <div className="absolute bottom-40 left w-72 h-72  ">
    <img src={blob1}></img>
  </div> */}

  <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

  {/* Dots Pattern */}
  <div className="absolute top-24 right-10 md:right-32 grid grid-cols-5 gap-3 opacity-30">
    {[...Array(25)].map((_, i) => (
      <div
        key={i}
        className="w-2 h-2 bg-blue-500 rounded-full"
      ></div>
    ))}
  </div>

  <div className="absolute bottom-25 right-1 md:right-12 grid grid-cols-5 gap-3 opacity-30 animate-bounce">
    {[...Array(25)].map((_, i) => (
      <div
        key={i}
        className="w-2 h-2 bg-blue-500 rounded-full"
      ></div>
    ))}
  </div>
  {/* Floating Balls */}
  <div className="absolute top-40 left-4/5 w-5 h-5 bg-purple-500 rounded-full animate-bounce"></div>

  <div className="absolute bottom-20 left-2/5 w-5 h-5 bg-blue-600 rounded-full animate-bounce"></div>
  <div className="absolute bottom-32 left-10 w-4 h-4 bg-blue-300 rounded-full animate-pulse"></div>

  <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Left Side */}
      <div className="text-center lg:text-left">

        <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-4">
          👋 Hello, I'm
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold">
          <span className="text-pink-600">S</span>undar{" "}
          <span className="text-pink-600">
            R
          </span>aj
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold  mt-4 bg-gradient-to-r from-blue-600 to-purple-6  00 bg-clip-text text-transparent ">
          Full Stack Developer
        </h2>

        {/* Skills */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6">



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
          }].map(
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

        <p className="text-gray-700 mt-6 leading-8 max-w-xl mx-auto lg:mx-0">
          Experienced Full Stack Developer with 4+ years of expertise in
          designing, developing and maintaining scalable web applications.
          Proficient in PHP, Laravel, JavaScript, MySQL and REST API.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">

          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
           <i className="fa-solid fa-download"></i> Download Resume 
          </button>

          <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
            <i className="fa-regular fa-paper-plane"></i> Contact Me
          </button>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start gap-4 mt-8">

        
          <img
            src={linkedin}
            className="w-10 h-10 hover:scale-110 transition cursor-pointer"
          />
        

        
            <img
              src={github}
              className="w-10 h-10 hover:scale-110 transition cursor-pointer"
            />
         
       
          <img
            src={email}
            className="w-10 h-10 hover:scale-110 transition cursor-pointer"
          />
         

        </div>

      </div>

      {/* Right Side */}
      <div className="flex justify-center">

        <div className="relative">

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-l from-blue-500 to-purple-500 blur-3xl opacity-30 rounded-full"></div>

          {/* Circle */}
          <div className="relative p-4 rounded-full border-8 border-white shadow-2xl">

            <img
              src={profile}
              alt="Sundar"
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full"
            />

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
  );
}


export default Slider;