import React from 'react';
import ContactStyle from './Contact.css';
import Wing from './pngwing.png';
import Picture from './contact-cover.2.png';
import Call from './call.png';
import Email from './email.png';
import Location from './location.png';
import Twitter from './twitter.png';
import Facebook from './facebook.png';
import Instagram from './instagram.png';
function Contact() {
  return(

   <div className='Contact' id='Contact'>
       <div className='contact-contents'>
           <div className='text'>
               <div className='textImage'>
                   <div className='imageInfo'>
                   <h2>We Have Branches All Over The world</h2>
                   <p>The gradual accumulation of information about 
                   atomic and small-scale behaviour during the first
                    quarter  of the 20th Century, which gave 
                    some indications about how small things do behave,
                     produced an increasing
                    confusion which was Heinseiberg , and Born</p>
                   </div>
                   <div className='Photo'>
                       <img src={Wing}></img>
                   </div>
                   </div>

                   <div className='appointment'>
                   <div className='picture'>
                    <img src={Picture}></img>
                   </div>
                   <div className='Form'>
                       <h2>Book Appointment</h2>
                       Name*<br></br><input type='text' placeholder='Full Name*' required></input><br></br>
                       Email Address*<br></br><input type='email' placeholder='example@gmail.com' required></input><br></br>
                       Department*<br></br><input type='text' placeholder='Please select' required></input><br></br>
                       Time*<br></br><input type='text' placeholder='4:00 Available' required></input>
                       <div className='FormButton'>
                       <h4>Book Appointment</h4>
                   </div>
                   </div>
                   
               
               </div>
               </div>
            <div className='extraBottom'>
                <div className='InBottom'>
               <h3>Consulting Agency For Your Business</h3>
           <p>the quick fox jumps over the lazy dog</p>
           </div>
           <div className='Cont'>
               <h3>Contact</h3>
           </div>
           </div>
           <div className='beforeBottom'>
           <div className ='bottom'>
               <div className='contInfo'>
                   <h3>Company Info</h3>
                   <p>About Us</p>
                   <p>Carrier</p>
                   <p>We are Hiring</p>
                   <p>Blog</p>
               </div>
               <div className='legal'>
                   <h3>Legal</h3>
                   <p>About Us</p>
                   <p>Carrier</p>
                   <p>We are Hiring</p>
                   <p>Blog</p>
               </div>
               <div className='Features'>
                   <h3>Features</h3>
                   <p>Business Marketing</p>
                   <p>User Analytic</p>
                   <p>Live Chat</p>
                   <p>Unlimited Support</p>
               </div>
               <div className='Resources'>
                   <h3>Resources</h3>
                   <p>IOS & Android</p>
                   <p>Watch a Demo</p>
                   <p>Customers</p>
                   <p>API</p>
               </div>
               <div className='Get'>
                   <div className='GetHead'>
                    <h3>Get In Touch</h3></div>
                    <div className='callMain'>
                    <div className='call'><img src ={Call}></img></div>
                    <div className='callText'><p>(480) 555-0103</p></div>
                    </div>
                    <div className='locationMain'>
                    <div className='location'><img src ={Location}></img></div>
                    <div className='locationText'><p>4517 Washington Ave</p></div>
                    </div>
                    <div className='emailMain'>
                    <div className='email'><img src ={Email}></img></div>
                    <div className='emailText'><p>debra.holt@example.com</p></div>
                    </div>
                    
               </div>
           </div>
           </div>
           <div className='floatMain'>
                   <div className='float'>
                   <h4>Made with love By Figmaland All Rights Reserved</h4>
                   </div>
                   <div className='floatPhoto'>
                       <img src={Facebook}></img>
                       <img src={Instagram}></img>
                       <img src={Twitter}></img>
                   </div>
               </div>





           </div>
       </div>
   
  );
  
}

export default Contact;
