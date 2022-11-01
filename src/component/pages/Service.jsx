import React from 'react'
import { Link } from 'react-router-dom';
const Service = () => {
  return (
    <>
    <form className='gg' action="">
        <p>Name</p>
        <input type="text" />
        <p>email</p>
        <input type="email" />
        <p>Password</p>
        <input type="password" />
        <Link to="/">Return Home</Link>
    </form>
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
    </>
    
  )
}

export default Service