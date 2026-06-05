import linkedin from "../Images/linkedin.png";
import github from "../Images/github1.jpg";
import profile from "../Images/sundar_img_2.jpg";

function Slider() {
  return (
   <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">

  {/* Background Blur Effects */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>

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

  {/* Floating Balls */}
  <div className="absolute top-40 right-1/4 w-5 h-5 bg-blue-400 rounded-full animate-bounce"></div>

  <div className="absolute bottom-32 left-10 w-4 h-4 bg-blue-300 rounded-full animate-pulse"></div>

  <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Left Side */}
      <div className="text-center lg:text-left">

        <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-4">
          👋 Hello, I'm
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold">
          Sundar{" "}
          <span className="text-blue-600">
            Raj
          </span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold text-blue-600 mt-4">
          Full Stack Developer
        </h2>

        {/* Skills */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6">

          {[ "Laravel", "JavaScript", "MySQL", "REST API"].map(
            (skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white rounded-full shadow hover:shadow-lg transition"
              >
                {skill}
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
            Download Resume
          </button>

          <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
            Contact Me
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

        </div>

      </div>

      {/* Right Side */}
      <div className="flex justify-center">

        <div className="relative">

          {/* Glow */}
          <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 rounded-full"></div>

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