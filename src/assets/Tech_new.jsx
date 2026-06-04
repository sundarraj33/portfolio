import html_logo from "../Images/html_logo.jpg"
import css_logo from "../Images/CSS3_logo.jpg"
import javascript_logo from "../Images/Javascript_logo.jpg"
import bootstrap_logo from "../Images/bootstrap_logo.jpg";
import tailwind_logo from "../Images/tailwind.jpg";
import react_logo from "../Images/react_logo.jpg";


import "../assets/CSS/tech_new.css";


function Tech_new(){
    return(
        <>
          <div className="slidelogo m-12 bg-pink-700">
            <div className="item item1">
              <img src={html_logo} className="tech_img w-16 h-16" />
            </div>
            <div className="item item2">
            <img src={css_logo} className="tech_img w-16 h-16" />
            </div>
            <div className="item item3">
              <img src={bootstrap_logo} className="tech_img w-16 h-16" />
            </div>
            <div className="item item4">
            <img src={tailwind_logo} className="tech_img w-16 h-16" />
            </div>
            <div className="item item5">
            <img src={javascript_logo} className="tech_img w-16 h-16" />
            </div>
            <div className="item item6">
              <img src={react_logo} className="tech_img w-16 h-16" />
            </div>
            
          </div>

        </>
    )
}


export default Tech_new;