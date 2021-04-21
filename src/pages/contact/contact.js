import React from "react";
import resumeIcon from "../../Images/resumeicon.png";

import css from "./contact.css";
import resume from "../../components/resume/resume";





function Contact () {

return (
<div className=" jumbotron">
        <h1>Contact Information </h1>
      
        <ul> 
            <li>Email: markdelgado94@gmail.com <a href="Mark:markdelgado94@gmail.com">Send email</a></li>
            <li>Phone Number: (909)591-1999</li>
            <li>github: <a href="https://github.com/mdelgado1128">https://github.com/mdelgado1128</a></li>
            <li>linkedin:  <a href="https://www.linkedin.com/in/mark-delgado-80a2a81b6/">https://www.linkedin.com/in/mark-delgado-80a2a81b6/</a>   </li>
         < resume />
  
        </ul>
{/* <div className="contactFrom">
  <h1> Contact </h1>


<div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroup-sizing-default">Email:</span>
  </div>
  <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
</div>

<div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroup-sizing-default">Name:</span>
  </div>
  <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
</div>

<div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroup-sizing-default">message</span>
  </div>
  <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
</div>

<button className="btn btn-primary">submit</button> */}

<div className="input-group input-group-sm mb-3">

<div> Name </div>
<div className="input-group mb-3">
    <div className="input-group-prepend">
        <span id="inputGroup-sizing-default"></span>
    </div>
    <input type="text" className="form-control" placeholder="name" aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"></input>
</div>

<div> Email </div>
<div className="input-group mb-3">
    <div className="input-group-prepend">
        <span id="inputGroup-sizing-default"></span>
    </div>
    <input type="text" className="form-control" placeholder="email" aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"></input>
</div>

<div> message </div>
<div className="input-group mb-3">
    <div className="input-group-prepend">
        <span id="inputGroup-sizing-default"></span>
    </div>
    <input type="text" className=" message" placeholder="message" aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"></input>
</div>


<div className="btn btn-primary"  role="button">submit </div>
</div>







 </div>      
)
};

export default Contact;