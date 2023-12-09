import React from 'react';
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faInstagram, faLinkedin, faSquareGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'


export default function Home() {
  return (
    
    <div style={{backgroundColor:"black"}}>
        <Container>
        <div style={{backgroundColor:"black"}} >
         
<div className="card mb-3 " style={{ maxWidth: "100%" , height: "720px" , backgroundColor:"black"}}>
  <div className="row g-0">
    <div className="col-md-4 ">
      <img src="./Image/try.png" style={{height:"400px", width:"800px",marginLeft:"120px", marginTop:"50px", borderTopLeftRadius: "50px"
, borderTopRightRadius: "50px",borderBottomLeftRadius:" 0px" , borderBottomRightRadius: "0px"}} className="img-fluid rounded-start" />
    </div>
    <div className="col-md-8 ">
      <div className="card-body " style={{margin:"100px"}}>
        <h5 className="card-title " style={{fontSize:"40px",fontFamily:"Roboto" ,fontWeight:"bold" ,color:"#D98F66" ,marginLeft:"50px"}}>I'm Shradha Saxena</h5>
        <p className="card-text" style={{fontSize:"20px",fontFamily:"Roboto" ,fontWeight:"300px",color:"white" ,marginLeft:"50px"  }}>I am into frontend development I am deeply passionate about creating exceptional websites that seamlessly blend aesthetics with functionality I am actively seeking opportunities to gain hands-on experience and contribute to innovative web development projects .My round-the-clock dedication to coding reflects not just a profession, but a genuine love for the craft.</p>
       
        <button type="button" className="btn btn-warning" style={{fontSize:"20px",fontFamily:"Roboto" ,fontWeight:"300px" ,marginLeft:"50px" }}>HIRE ME</button>
        <div className="socialmedia" style={{marginTop:"30px", marginLeft:"30px" }}>
        <div style={{backgroundColor:"black" ,height:"50px",marginTop:"20px",marginLeft:"10px"}}><span style={{ margin: "5px" ,color:"yellow" ,backgroundColor: "lightgray",borderRadius:" 50%",border:" 1px solid grey",padding: "15px"}}>< a href="https://www.linkedin.com/in/shradha-saxena-875743224"><FontAwesomeIcon icon={faLinkedin} size='2x' /></a></span><span style={{ margin: "5px",backgroundColor: "lightgrey",borderRadius:" 50%",border:" 1px solid grey",padding: "15px" }}><a style={{color:"black"}} href="https://github.com/ShradhaSaxena23" ><FontAwesomeIcon icon={faSquareGithub} size='2x' /></a></span><span style={{ margin: "5px" ,backgroundColor: "lightgray",borderRadius:" 50%",border:" 1px solid grey",padding: "15px"}}><a style={{color:"black"}}href="https://x.com/ShradhaSaxena_?t=BVKt1EWjsmCpN5UuuOnmKg&s=08"><FontAwesomeIcon icon={faXTwitter} size='2x' /></a></span></div>

  </div>
      </div>
    </div>
  </div>
  <div style={{backgroundColor:"black"}}></div>
</div>

</div>

<div >



  </div>
</Container>
</div>

  )
}
