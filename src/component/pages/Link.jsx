import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';

const About = () => {
  return (
    <>
    <div >
      <h2 className='yy'>welcome again</h2>
      <p className="hh">A linked list is a sequence of data structures, which are connected together via links. <br />yy
         Linked List is a sequence of links which contains items.</p>
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
 <Link to="/">Return Home</Link>
 

    
    </>
    
    
  )
}

export default About