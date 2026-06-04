function Gettouch() {
  return (
    <section className="min-h-screen bg-slate-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-900">
            Get In Touch
          </h1>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            I'm currently available for freelance work. If you have
            a project or opportunity, feel free to contact me.
          </p>
        </div>

        

        <div className="bg-white rounded-[30px] shadow-xl overflow-hidden grid md:grid-cols-2">
          
          {/* Left Side */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-10">
            <h2 className="text-4xl font-bold mb-4">
              Contact Information
            </h2>

            <div className="w-20 h-1 bg-white rounded-full mb-8"></div>

            <p className="text-lg text-gray-100 mb-10">
              Feel free to contact me. I will get back to you as
              soon as possible.
            </p>

            <div className="space-y-8">

                


              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 border-2 border-white rounded-full">
                    <i className="fa-solid fa-phone-volume text-xl"></i>
                </div>
                <span>+91 9486947738</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 border-2 border-white rounded-full">
                    <i class="fa-regular fa-envelope"></i>
                </div>
                <span>sundarrajcs1@gmail.com</span>
              </div>


              <div className="flex items-center gap-4">                
                <div className="flex items-center justify-center w-12 h-12 border-2 border-white rounded-full">
                    <i class="fa-solid fa-location-dot"></i>
                </div>
                <span>Chennai, Tamil Nadu</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-12">
              <div className="p-2 h-12 w-12 flex justify-center items-center border-1 rounded-full">
                {/* <Linkedin /> */}
                <i class="fa-brands fa-linkedin"></i>
              </div>

              <div className="p-2 h-12 w-12 flex justify-center items-center border-1 rounded-full">
                <i class="fa-brands fa-github"></i>
              </div>

              <div className="p-2 h-12 w-12 flex justify-center items-center border-1 rounded-full">
                {/* <Twitter /> */}
                <i class="fa-brands fa-x-twitter"></i>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="p-10">
            
            <div className="p-10">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-medium">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full mt-2 border rounded-xl p-4 outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="font-medium">
                    Your Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full mt-2 border rounded-xl p-4 outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter your subject"
                  className="w-full mt-2 border rounded-xl p-4 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="font-medium">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full mt-2 border rounded-xl p-4 outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>
          </div>
        </div>


        
      </div>
    </section>
  );
}

export default Gettouch;