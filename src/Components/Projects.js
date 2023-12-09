import React from 'react'
//import Navbar from './Navbar'
import { Container } from 'react-bootstrap'
function Projects() {
  return (
    <div style={{backgroundColor:"#E6E6E6"}}>
      <Container>
      
        <h1 style={{textAlign:"center", margin:"13px"}}>PROJECTS AND MODELS</h1>
        <h3 style={{marginTop:"2px ",textDecoration:"underline"}}>FrontEnd Projects</h3>
    <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-spaceBetween " style={{marginTop:"5px"}}>
        
        <div>
        <div className="card" style={{width: "20rem" }}>
  <img src="./Image/Screenshot (8).png" style={{height:"200px"}} className="card-img-top" alt="..."/>
  <div className="card-body " style={{backgroundColor:"#F5F5F5"}}>
    <h5 className="card-title" style={{backgroundColor:"#F5F5F5"}}>Portfolio</h5>
    <p className="card-text" style={{backgroundColor:"#F5F5F5"}}>A comprehensive representation of work samples, projects, achievements, and experiences that showcase an individual's skills, talents, and professional or personal growth.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item" style={{backgroundColor:"#F5F5F5"}}>Skills Used: REACTJS,JAVASCRIPT,CSS,HTML5, BOOTSTRAP</li>
    </ul>
  <div className="card-body"  style={{backgroundColor:"#F5F5F5"}}>
    <div style={{backgroundColor:"#F5F5F5"}}>repository link</div>
    <a href="https://github.com/ShradhaSaxena23/Portfolio.git" className="card-link">https://github.com/ShradhaSaxena23/Portfolio.git</a>
    
  </div>
</div>
</div>
<div>
<div className="card" style={{width: "20rem"}}>
  <img src="./Image/Screenshot (4).png" style={{height:"200px"}} className="card-img-top" alt="..."/>
  <div className="card-body" style={{backgroundColor:"#F5F5F5"}}>
    <h5 className="card-title"style={{backgroundColor:"#F5F5F5"}}>Wynk Music App Clone</h5>
    <p className="card-text" style={{backgroundColor:"#F5F5F5"}}>An online music app that help users to listen to their favorite songs online.Search your favorite tracks and artists,discover new songs, and create playlist easily.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"style={{backgroundColor:"#F5F5F5"}}>Skills Used:  JAVASCRIPT ,CSS, HTML5 </li>
   
  </ul>
  <div className="card-body " style={{backgroundColor:"#F5F5F5"}}>
  <div style={{backgroundColor:"#F5F5F5"}} >repository link</div>
    <a href="https://github.com/ShradhaSaxena23/Wynk-Music-clone.git" className="card-link">https://github.com/ShradhaSaxena23/Wynk-Music-clone.git</a>
   
  </div>
</div>
</div>
<div>
<div className="card" style={{width: "20rem"}}>
  <img src="./Image/Screenshot (6).png" style={{height:"200px"}} className="card-img-top" alt="..."/>
  <div className="card-body" style={{backgroundColor:"#F5F5F5"}}>
    <h5 className="card-title">Weather App</h5>
    <p className="card-text">An application of science and technology to predict the conditions of the atmosphere for a given location and time.You can exactly know when to change in weather condition like temperateue,humidity, precipitation etc.</p>
  </div>
  <ul className="list-group list-group-flush"  style={{backgroundColor:"#F5F5F5"}}>
    <li className="list-group-item"  style={{backgroundColor:"#F5F5F5"}}>Skills Used:  API , JAVASCRIPT, HTML5 ,CSS, BOOTSTRAP</li>
    
  </ul>
  <div className="card-body"  style={{backgroundColor:"#F5F5F5"}}>
    <div>Repository Link</div>
    <a href="https://github.com/ShradhaSaxena23/Weather-App.git" className="card-link">https://github.com/ShradhaSaxena23/Weather-App.git</a>
    
  </div>
</div>
</div>
    </div>
    </Container>
    </div>
  )
}

export default Projects