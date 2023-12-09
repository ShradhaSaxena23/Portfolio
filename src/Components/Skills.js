import React from 'react'
import { Container } from 'react-bootstrap'
//import Navbar from './Navbar'

function Skills() {
  return (
    <div style={{backgroundColor:"#E6E6E6"}}>
    <Container> 
    <div style={{textAlign:"center", fontSize:"40px",fontWeight:'bold'}}> PROGRAMMING SKILLS </div>

    <h2 style={{margin:"15px", textDecoration:"underline",marginTop:"40px"}}>Programming Language</h2>
    <div>
    <img src="./Image/Python.png" style={{height:"100px"}}/>
    <img src="./Image/Java.png" style={{height:"100px"}}/>
    </div>
    <h2 style={{margin:"15px",textDecoration:"underline", marginTop:"40px"}}>Web Development</h2>
    <div>
    <img src="./Image/frontend.jpeg" style={{height:"100px" , margin:"10px"}}/>
    <img src="./Image/bootstrap.png" style={{height:"100px" , margin:"10px"}}/>
    <img src="./Image/react.png" style={{height:"100px" , margin:"10px"}}/>
    </div>
    <h2 style={{margin:"15px", textDecoration:"underline",marginTop:"40px"}}>Artificial Intelligence</h2>
    <div>
    <img src="./Image/AI.jpeg" style={{height:"100px", margin:"10px"}}/>
    <img src="./Image/ml.jpeg" style={{height:"100px" , margin:"10px"}}/>
    <img src="./Image/numpy.png" style={{height:"100px" , margin:"10px"}}/>
    <img src="./Image/matplot.png" style={{height:"100px" , margin:"10px"}}/>
    <img src="./Image/sklearn.png" style={{height:"100px", margin:"10px"}}/>
    </div>
    <h2 style={{margin:"15px",textDecoration:"underline",marginTop:"40px"}}>Database Management</h2>
    <div>
    <img src="./Image/mysql.jpeg" style={{height:"100px" , margin:"10px"}}/>
    </div>
    </Container>
    </div>
  )
}

export default Skills