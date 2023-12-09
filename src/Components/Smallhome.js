import React from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedin, faSquareGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Smallhome() {
  return (
    < div  style={{ backgroundColor:"black"}}>
     <Container>   
  <div className="card-body" style={{ backgroundColor:"black"}} >
    <h1 style={{color:"#D98F66",marginLeft:"10px"}}>Hi, I am Shradha Saxena</h1>
   
    <p className="card-text" style={{color:"white", fontSize:"20px",marginLeft:"10px"}}>I am into frontend development. I am deeply passionate about creating exceptional websites that seamlessly blend aesthetics with functionality. I am actively seeking opportunities to gain hands-on experience and contribute to innovative web development projects. My round-the-clock dedication to coding reflects not just a profession but a genuine love for the craft.</p>
    <button type="button" className="btn btn-warning" style={{fontSize:"20px",fontFamily:"Roboto" ,fontWeight:"300px",marginLeft:"10px" }}>HIRE ME</button>
    <div style={{backgroundColor:"black" ,height:"50px",marginTop:"20px",marginLeft:"10px"}}><span style={{ margin: "5px" ,color:"blue" ,backgroundColor: "lightgray",borderRadius:" 50%",border:" 1px solid grey",padding:"15px"}}><a  href="https://www.linkedin.com/in/shradha-saxena-875743224"><FontAwesomeIcon icon={faLinkedin} size='2x' /></a></span><span style={{ margin: "5px",backgroundColor: "lightgray",borderRadius:" 50%",border:" 1px solid grey",padding: "15px" }}><a style={{color:"black"}} href="https://github.com/ShradhaSaxena23" ><FontAwesomeIcon icon={faSquareGithub} size='2x' /></a></span><span style={{ margin: "5px" ,backgroundColor: "lightgray",borderRadius:" 50%",border:" 1px solid grey",padding: "15px"}}><a style={{color:"black"}}href="https://x.com/ShradhaSaxena_?t=BVKt1EWjsmCpN5UuuOnmKg&s=08"><FontAwesomeIcon icon={faXTwitter} size='2x' /></a></span></div>
   
    < div className="card" style={{width: "20rem" ,backgroundColor:"black"}}>
    
       
    <Container>  
    <img src="./Image/try.png" style={{backgroundColor:"black" ,marginTop:"15px" }} className="card-img-top" alt="..."></img>
    </Container>

  </div>
 
  
</div>
</Container>
    </div>
  )
}

export default Smallhome