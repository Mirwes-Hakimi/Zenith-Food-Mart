import React from "react";
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaYelp } from 'react-icons/fa';
import '../Styles/Contact.css';
function Contact(){
  return (
    <div> 
    <section className='social-media'>
    <h1 style={{padding: '10px', marginBottom:'50px'}}>Contact</h1>
     
      <a href="tel:+19256801040"> Call Us: +1 (925) 680-1040 </a>
      
      <div className='social-media-wrap'>
        <div className='footer-logo'>
          <Link to='/' className='social-logo'>
            Zenith Food Mart (Afghan - Mediterranean Halal)
          </Link>
        </div>
       
        <div className='social-icons'>
          <a
            className='social-icon-link'
            href='https://www.yelp.com/biz/zenith-food-mart-concord'
            target='_blank'
            rel="noopener noreferrer" // Add this for security
            aria-label='Yelp'
          > 
            <FaYelp /> Yelp
          </a>
          
        </div>
        <small className='website-rights'> Web Design by Hakimi © 2023</small>
      </div>
    </section>
    </div>
  );
}

export default Contact;
