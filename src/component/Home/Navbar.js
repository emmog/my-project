import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function ContainerOutsideExample() {
  return (
    <>
    <Navbar expand="lg" variant="light" bg="light">
    <Container>
      <Navbar.Brand href="doctor">Home</Navbar.Brand>
      <Navbar.Brand href="link">Doctor</Navbar.Brand>
      <Navbar.Brand href="service">Link</Navbar.Brand>
      <Navbar.Brand href="#">Servvice</Navbar.Brand>
    </Container>
  </Navbar>
 <div className="container">
 <div className="content">
     <h2>welcome to music websites</h2>
     <p className="where">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam laudantium laborum quaerat nostrum quam facere voluptate earum laboriosam. Praesentium, minima?</p>
     <p className="why">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat autem quasi, cupiditate, dolorem soluta sint dolor necessitatibus illo, esse obcaecati earum expedita perferendis quos deleniti ea dicta accusamus velit sequi iusto! Unde impedit distinctio cumque nemo placeat obcaecati delectus corporis sapiente consequatur facere! Unde praesentium illo aspernatur veniam. Ad tempore saepe laboriosam quidem ipsam totam, tenetur deserunt magni quod accusamus?</p>
     
     <button className="btn">sign up</button>
 </div>
 <div className="image">
     <img className="img" src="./images/doctor.jpg"/>
 </div>
 <div/>
 </div>
 <div className="container">
 <div bg-blue className="image">
     <img className="img" src="./images/bwg.jpg"/>
 </div>
 <div className="content">
     <p className="where">Headquartered in Durban, the gateway to Southern Africa, we are ideally placed to orchestrate the movement of large, heavy and voluminous cargo throughout the sub region and to the world.

With a close-knit family of partners situated in almost every strategic location around the globe, we have the capability to serve your unique logistical needs.

We go beyond the scope of a traditional Forwarder with a truly hands-on approach that includes physical cargo operations, personal supervision, cargo cradle design and construction, bio-security cleaning as well as multimodal transport, lifts and rigging.

Over a decade in existence and staffed by the most highly experienced professionals, Afriguide Logistics is your dependable partner in Africa</p>
   
     
 </div>
 <div/>
 </div>

</> 
  
  );
}

export default ContainerOutsideExample;