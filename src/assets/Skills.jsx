import { useState } from "react";


import html_logo from "../Images/html_logo.jpg"
import css_logo from "../Images/CSS3_logo.jpg"
import javascript_logo from "../Images/Javascript_logo.jpg"
import bootstrap_logo from "../Images/bootstrap_logo.jpg";
import tailwind_logo from "../Images/tailwind.jpg";
import react_logo from "../Images/react_logo.jpg";

import php_logo from "../Images/php_logo.jpg";
import laravel_logo from "../Images/laravel_logo.jpg";


import github_logo from "../Images/github.png";
import mysql_logo from "../Images/mysql.jpg";
import aws_logo from "../Images/AWS_logo_dark.jpg";



import code_icon from "../Images/code_icon.jpg";
import backend_icon from "../Images/backend_icon.jpg";
import tools_icon from "../Images/tools.jpg";


import bgImage from "../Images/coding_background.jpg"

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      percentage: 80,
      type : 'frontend',
      color: "bg-orange-500",
      border: "border-orange-500",
      badge: "text-orange-600",
      icon: html_logo,
    },
    {
      name: "CSS",
      percentage: 70,
      type : 'frontend',
      color: "bg-blue-500",
      border: "border-blue-500",
      badge: "text-blue-400",
      icon: css_logo,
    },
    {
      name: "JavaScript",
      percentage: 75,
      type : 'frontend',
      color: "bg-yellow-400",
      border: "border-yellow-500",
      badge: "text-yellow-300",
      icon: javascript_logo,
    },
    {
      name: "Bootstrap",
      percentage: 80,
      type : 'frontend',
      color: "bg-violet-400",
      border: "border-violet-500",
      badge: "text-violet-300",
      icon: bootstrap_logo,
    },
    {
      name: "React",
      percentage: 68,
      type : 'frontend',
      color: "bg-cyan-300",
      border: "border-cyan-500",
      badge: "text-cyan-300",
      icon: react_logo,
    },
    {
      name: "Tailwind",
      percentage: 65,
      type : 'frontend',
      color: "bg-sky-400",
      border: "border-sky-500",
      badge: "text-sky-400",
      icon: tailwind_logo,
    },


    {
      name: "PHP",
      percentage: 85,
      type : 'backend',
      color: "bg-indigo-400",
      border: "border-indigo-500",
      badge: "text-indigo-500",
      icon: php_logo,
    },
    {
      name: "Laravel",
      percentage: 80,
      type : 'backend',
      color: "bg-red-400",
      border: "border-red-500",
      badge: "text-red-500",
      icon: laravel_logo,
    },
    

    {
      name: "MySQL",
      percentage: 80,
      type : 'tools',
      color: "bg-sky-500",
      border: "border-sky-600",
      badge: "text-sky-600",
      icon: mysql_logo,
    },
    {
      name: "github",
      percentage: 75,
      type : 'tools',
      color: "bg-white",
      border: "border-white",
      badge: "bg-black text-white",
      icon: github_logo
    },
    {
      name: "AWS",
      percentage: 60,
      type : 'tools',
      color: "bg-orange-400",
      border: "border-orange-600",
      badge: "text-orange-200 ",
      icon: aws_logo,
    },
    
  ];


  const [skill_set,skill_get] = useState('frontend');


  function skill_click_fun(event){
    skill_get(event);
  }


  
  return (
    <div className="min-h-screen bg-slate-100 p-10"  style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        
        
      }}>
      
      <div className="flex justify-center gap-6 mb-10">
       
        <button onClick={()=>skill_click_fun('frontend')} className={`px-8 py-4 rounded-3xl ${skill_set === "frontend" ? "bg-gradient-to-t from-blue-500 to-purple-500 text-white":"text-black"} bg-white font-semibold shadow-lg flex flex-col items-center justify-center gap-1 hover:cursor-pointer`}>
          <img src={code_icon} className="text-gray-50" style={{height:'30px',width:'30px'}}></img>
          <span>Frontend</span>
        </button>
        

        <button onClick={()=>skill_click_fun('backend')} className={`px-8 py-4 rounded-3xl ${skill_set === "backend" ? "bg-gradient-to-t from-blue-500 to-purple-500 text-white":"text-black"} bg-white shadow-md font-semibold flex flex-col items-center justify-center gap-1`}>
            <img src={backend_icon} className="w-6 h-6" />
            <span>Backend</span>
        </button>

        <button onClick={()=>skill_click_fun('tools')} className={`px-8 py-4 rounded-3xl  ${skill_set === "tools" ? "bg-gradient-to-t from-blue-500 to-purple-500 text-white":"text-black"} bg-white shadow-md font-semibold flex flex-col items-center justify-center gap-1`}>
          <img src={tools_icon} className="text-gray-50 items-center" style={{height:'30px',width:'30px'}}></img>
          <span>Tools & Others</span>
        </button>
      </div>

      
      
      


      <div className="space-y-8 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 ">
        {skills.map((skill) => (
          
          skill.type === skill_set ? (
          <div className="shadow-md hover:shadow-xl hover:-translate-y-1
            transition-all duration-300 ">
          <div className={`border-1 ${skill.border} p-4 m-4 rounded-lg grid grid-cols-3 bg-black`}>
            <img src={skill.icon} className="w-16 h-16 "></img>
            <div className="col-span-2">
                <p className="text-white text-xl font-semibold">{skill.name}</p>
                <div className="flex justify-center items-center gap-2">
                    
                    <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`${skill.color} h-full rounded-full transition-all duration-1000`}
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                  <p className={`${skill.badge} text-xl font-semibold`}>{`${skill.percentage}%`}</p>
                </div>
                
            </div>
            
          </div>
      </div>

          ) : null 
        )
      )
        }
      </div>
    </div>
  );
}