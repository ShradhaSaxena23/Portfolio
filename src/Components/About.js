import React from 'react'
//import Navbar from './Navbar'
//import { circleFill } from 'bootstrap-icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap'

function About() {
  return (
    <div style={{backgroundColor:"#E6E6E6"}} >
      <Container>
      <h1 style={{textAlign:"center",fontWeight:"bold"}}>About Me</h1>

      <p style={{marginLeft:"30px", fontSize:"17px"}}>Hi everyone,I am Shradha Saxena from University of Lucknow,India. I am currently a pre-final year Bachelor's of Technology student specializing in Artificial Intelligence. My academic journey has been marked by a hands-on approach to coding, and I am dedicated to staying abreast of the latest developments in AI.In addition to my AI focus, I am proficient in front-end development.My work involves translating complex algorithms into visually appealing and user-friendly interfaces.As a hardworking and highly committed individual, I bring a unique perspective to problem-solving and innovation in the dynamic field of technology.I am excited about the intersection of AI and front-end development, and I look forward to contributing my skills to the ever-evolving landscape of technology.</p>
    <h2 style={{marginLeft:"30px", fontWeight:"bold",textDecoration:"underline"}}>Education</h2>

    
    <div className="row row-cols-1 row-cols-md-4 g-4" style={{marginLeft:"23px"}}>
  <div className="col" style={{ width:"20rem"}}>
    <div className="card h-100">
      <img src="./Image/lu.jpeg" className="card-img-top" alt="..."/>
      <div className="card-body-warning"  style={{backgroundColor:"#F5F5F5"}}>
      <ul className="list-group list-group-flush" style={{backgroundColor:"#F5F5F5"}}>
    <li className="list-group-item" style={{backgroundColor:"#F5F5F5"}}>Bachelor's of Technology </li>
    <li className="list-group-item"style={{backgroundColor:"#F5F5F5"}}>Computer Science and Engineering and Artificial Intelligence</li>
    <li className="list-group-item"style={{backgroundColor:"#F5F5F5"}}>University of Lucknow</li>
    <li className="list-group-item"style={{backgroundColor:"#F5F5F5"}}>Nov 2021-Present</li>
  </ul>
        
        <p className="card-text" style={{marginLeft:"13px"}}>I hold Bachelor's of Technology in Computer Science and Engineering and Artificial Intelligence with a notable CGPA of 8.56 </p>
       
      </div>
    </div>
  </div>
  
  <div className="col" style={{ width:"20rem"}}>
    <div className="card h-100">
      <img src="./Image/Kvs.png" className="card-img-top" alt="..." style={{height:"270px"}}/>

      <div className="card-body"style={{backgroundColor:"#F5F5F5"}}>
      <ul className="list-group list-group-flush">
    <li className="list-group-item" style={{backgroundColor:"#F5F5F5"}}>Senior Secondary Education</li>
    <li className="list-group-item" style={{backgroundColor:"#F5F5F5"}}>Kendriya Vidhyalaya AFS BKT Lucknow</li>
    <li className="list-group-item"style={{backgroundColor:"#F5F5F5"}}>2020-2021</li>
  </ul>
        
        <p className="card-text" style={{marginLeft:"13px"}}>In the AISSCE-2021 examination conducted by CBSE, I have studied under the PCM stream and achieved score of 82.6%.</p>
        
      </div>
    </div>
  </div>
  
  

</div>




  
  
   

  <h2 style={{marginLeft:"30px",marginTop:"10px",fontWeight:"bold",textDecoration:"underline"}}>Achievements and Certificates</h2>
  
  <ul style={{listStyle:"none"}}>
    
    <li>CODEKAZE sep'23 with AIR 4224 and College rank 1</li> 
    <li>CODEKAZE june'23 with AIR 11228 and college rank 4</li>
    <li>LEETCODE Submission 200+</li>
  </ul>

<h2 style={{marginLeft:"30px",fontWeight:"bold",textDecoration:"underline"}}>Language</h2>

  <h4 style={{marginLeft:"30px"}}>Proficiency</h4>
  <ul style={{listStyle:"none"}}>
    <li>Hindi <span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span></li>
    <li>English <span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span></li>
    
    

    
  </ul>
  </Container>
    </div>
  )
}

export default About