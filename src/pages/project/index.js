import React from "react";
import songTranslation from "../../Images/Song-Translation-Application_SS1.jpeg";
import weatherDashboard from "../../Images/search-results.png" 
import chefKiss from "../../Images/chef-kiss-screenshot.png"

// eslint-disable-next-line no-unused-vars
import CSS from "./index.css";

function Project() {
  return (
    <div className="container body">
            <h1>Projects</h1>


      <div className="jumbotron">
            <h2>Lyric Translator </h2>   
        <img className="photo" src={songTranslation} alt="me" />
        <div className="container">
          <p>Link to application:</p>      
          <a href="https://curtis-hatter.github.io/Song-Translation-Application/">
            https://curtis-hatter.github.io/Song-Translation-Application/
          </a>
        </div>
      </div>

      <div className="jumbotron">
      <h2>Weather Dashboard </h2>   

        <img className="photo" src={weatherDashboard} alt="me" />
        <div className="container">
        <p>Link to application:</p>  
        <a href="https://mdelgado1128.github.io/Weather-Dashboard/">
                https://mdelgado1128.github.io/Weather-Dashboard/</a>
        </div>
      </div>


      <div className="jumbotron">
      <h2>Chef Kiss </h2>   

        <img className="photo" src={chefKiss} alt="me" />
        <div className="container">
        <p>Link to application:</p>  
          <a href="https://chefs-kiss.herokuapp.com/">
            https://chefs-kiss.herokuapp.com/
          </a>
        </div>
      </div>
</div>
  );
}

export default Project;
