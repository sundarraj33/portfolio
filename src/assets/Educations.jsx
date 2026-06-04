import Education_img from "../Images/education.jpg";
function Educations(){
    return(
        <>
        
      <section
      id="experience"
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
    >
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-12">

      <div className="flex items-center justify-center gap-3">
        <img
          src={Education_img}
          alt="Education"
          className="w-10 h-10"
        />

        <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
          Education
        </h2>
      </div>

      <p className="text-gray-500 mt-4">
        Academic Background & Qualifications
      </p>

    </div>

    {/* Education Card */}
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-8 text-white">

        <h3 className="text-2xl md:text-3xl font-bold">
          Bachelor of Science in Computer Science
        </h3>

      </div>

      {/* Body */}
      <div className="p-8">

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <p className="text-sm text-gray-500 mb-2">
              Institution
            </p>

            <p className="text-lg font-semibold">
              Rajapalayam Rajus College
            </p>

            <p className="text-blue-600">
              Madurai Kamaraj University
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-2">
              Duration
            </p>

            <p className="text-lg font-semibold">
              Jun 2018 - Apr 2021
            </p>
          </div>

        </div>

        {/* Extra Info */}

        <div className="mt-8 grid sm:grid-cols-2 gap-4">

          <div className="bg-blue-50 p-4 rounded-xl">
            🎓 Computer Science Graduate
          </div>

          <div className="bg-blue-50 p-4 rounded-xl">
            📚 Strong Foundation in Programming
          </div>

        </div>

      </div>

    </div>

  </div>
</section>
        
        </>
    )
}

export default Educations;