import './App.css'
import About from './assets/About'
import Contact_me from './assets/Contact_me'
import Educations from './assets/Educations'
import Experience from './assets/Experience'
import Gettouch from './assets/Gettouch'

import Navbar from './assets/Navbar'
import Skills from './assets/Skills'
import Slider from './assets/Slider'
import Tech1 from './assets/Tech1'
import Tech_new from './assets/Tech_new'

function App() {
  

  return (
    <>
     
          <div className='container-fluid'>
              <Navbar />
              <Slider />
              <About />
              <Experience />
              <Educations />
              {/* <Tech1 /> */}
              {/* <Tech_new /> */}
             
              <Skills />
              {/* <Contact_me /> */}
              <Gettouch />
          </div>          
      
    </>
  )
}

export default App
