import React from 'react';
import HomeStyle from './Home.css';
import People from './peopleIcon.png';
import Arrow from './rightArrow.png';
import Book from './book.png';
import BookMark from './bookmark.png';
export default function Home() {
  return  <div className='container'>
    <div className='containerContents'>
      
       <nav className='navbar'>
      <div className='menu'>
          <div className='brand'>BrandName</div>
              <ul className='navbarcontents'>
              <li><a href="#home" class="contents-btn">Home</a></li>
                <li><a href="#Product" class="contents-btn">Product</a></li>
                <li><a href="#Pricing" class="contents-btn">Pricing</a></li>
                <li><a href="#Contact" class="contents-btn">Contact</a></li></ul></div>
          <div className='LoginDetails'>
          <div className='login'>Login</div>
          <div className='Wmember'>
          <div className='member'>Become a member
          </div>
          <div className='imageMember'>
          <img src={Arrow}></img>
          </div>
          </div>
          </div> </nav> 
          <div className='instruct'>
          <div className='home' id='home'>
          
          <div className='hContents'>  
      <h1>We Ensure A Best Insurance Policy</h1>
      <p>we know how large objects will act,
           but things on a small scale just do not act
            that way</p>
           
           
           <div className='extraInstruct'>
             <div className='quote'>
               Get Quote Now
             </div>
             <div className='learn'>Learn More</div>
             </div>
             </div>
           </div>
           <div className='hBottom'>
             <div className='mind'>
             <img src={People}></img>
               <h3>Peace of Mind</h3>
               <p>the quick fox jumps over the lazy dog</p>
             </div>
             <div className='life'>
             <img src={People}></img>
               <h3>Set For Life</h3>
               <p>the quick fox jumps over the lazy dog</p>
             </div>
             <div className='satisfaction'>
               <img src={People}></img>
               <h3>100% Satisfaction</h3>
               <p>the quick fox jumps over the lazy dog</p>
             </div>
           </div>
           </div>

           </div>
           <div className='newDetails'>
             <div className='peace'>
             <img src={Book}></img>
             <h3>Peace of Mind</h3>
               <p>So it really behaves like neither.
                 Now we have given up.
               </p>
             </div>
             <div className='set'>
             <img src={BookMark}></img>
             <h3>Set for Life</h3>
               <p>They were used to create the machines that launched</p>
             </div>
             <div className='satis'>
             <img src={People}></img>
             <h3>100% Satisfaction</h3>
               <p>So it really behaves like neither.
                 Now we have given up.</p>

             </div>
           </div>
      </div>
      
  }
