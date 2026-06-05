import html_logo from "../Images/html_logo.jpg"
import css_logo from "../Images/CSS3_logo.jpg"
import javascript_logo from "../Images/Javascript_logo.jpg"
import bootstrap_logo from "../Images/bootstrap_logo.jpg";
import tailwind_logo from "../Images/tailwind.jpg";
import react_logo from "../Images/react_logo.jpg";

function Tech1(){
    return(
        <>
<div className="tech_section flex flex-wrap justify-center gap-x-10 gap-y-2 w-[80%] mx-auto mt-16">

    <div className="hex_border" style={{"--hover-color":"#ff6b2b"}}>
        <div className="hex_box flex flex-col items-center justify-center">
            <img src={html_logo} className="tech_img w-14 h-14" />
            <span className="font-semibold pt-4 tech_img">HTML</span>
        </div>
    </div>

    <div className="hex_border" style={{"--hover-color":"#2b44ff"}}>
        <div className="hex_box flex flex-col items-center justify-center">
            <img src={css_logo} className="tech_img w-14 h-14" />
            <span className="font-semibold pt-4 tech_img">CSS</span>
        </div>
    </div>

    <div className="hex_border" style={{"--hover-color":"#ffe32b"}}>
        <div className="hex_box flex flex-col items-center justify-center">
            <img src={javascript_logo} className="tech_img w-14 h-14" />
            <span className="font-semibold pt-4 tech_img">Javascript</span>
        </div>
    </div>

    <div className="hex_border" style={{"--hover-color":"#784ee4"}}>
        <div className="hex_box flex flex-col items-center justify-center">
            <img src={bootstrap_logo} className="tech_img w-14 h-14" />
            <span className="font-semibold pt-4 tech_img">Bootstrap</span>
        </div>
    </div>

    <div className="hex_border" style={{"--hover-color":"#11d4e6"}}>
        <div className="hex_box flex flex-col items-center justify-center">
            <img src={tailwind_logo} className="tech_img w-16 h-16" />
            <span className="font-semibold pt-4 tech_img">Tailwind CSS</span>
        </div>
    </div>

    <div className="hex_border" style={{"--hover-color":"#11d4e6"}}>
        <div className="hex_box flex flex-col items-center justify-center">
            <img src={react_logo} className="tech_img w-16 h-16" />
            <span className="font-semibold pt-4 tech_img">React</span>
        </div>
    </div>

</div>
        
        </>
    )
}

export default Tech1;