import React from 'react';
import './Contact.css';

export default function Home() {
   
      
     return(
        <div>
        <div className="card">
            <img src="img.jpg" alt="John" ></img>
            <h1>Uwezo</h1>
            <p className="title">CEO & Founder, Example</p>
            <p>Harvard University</p>
            <a href="#"><i className="fa fa-dribbble"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
            <p><button>Contact</button></p>
      </div>
        
        <div className="navbar">
        <a href="#Home" className="active">Home</a>
        <a href="#profile">Profile</a>
        <a href="Contact.html">Contact</a>
      </div>
      </div>
       
    );
}




