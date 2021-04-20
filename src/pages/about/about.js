import React from "react";
import me from "../../Images/me3.png"
// eslint-disable-next-line no-unused-vars
import CSS from "./about.css";


function About (){

return (
<div className="jumbotron container body">
    <div>
        <h1>About Me</h1>
    </div>
        
     <div className="left">
         <img className="meImage" src={me} alt="me" />

     </div>
    
    <div className="right">
       <p>
                    Hello my name is Mark Delgado and I am a computer science major at San Bernardino Valley College.
                    Im in my second year at San Bernardino Valley College and plan on transfering to University of Riverside California. 
                    I am also currently enrolled in a coding bootcamp at UCR extension for web development.
                    I love to program and I plan on pursuing a graduate degree. The fields of machinne learning and AI fascinate me and I plan to study them.
                    I program in javascript and C++ but am interested in learning more programing languages. 
                    I live in Highland, California with my Wfie and four kids. 
                     </p>
   
    </div>
                   

        
 </div>
      
    );
}

export default About;
