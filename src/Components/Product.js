import React from 'react';
import ProductStyle from './Product.css';
import User1 from'./user.1.png';
import User2 from'./user.2.png';
import User3 from'./user.3.png';
import Rating from './Rating.webp';
// import Vector from './Vector.png';
// import Vector1 from './Vector-1.png';
// import Vector2 from './Vector-2.png';
// import Vector3 from './Vector-3.png';
// import Vector4 from './Vector-4.png';
// import Vector5 from './Vector-5.png';
export default function Product() {
  return <div className='product' id='product'>
  <div className='industry'>
      <h2>Industry</h2>
      <p>Problems trying to resolve the conflict 
          between <br></br>the two major realms of classsical 
          physics: Newtonian mechanics</p>
          </div>
          <div className='slate'>
            <div className ="slate1">
              <div className='User'><img src={User1}/></div>
              <p>Slate helps you see how many 
                more days you need to work to reach 
                your financial goal for the month and year.</p>
             <div className='Image'> <img src={Rating}/></div> 
            </div>
            <div className ="slate2">
            <div className='User'><img src={User2}/></div>
            <p>Slate helps you see how many 
                more days you need to work to reach 
                your financial goal for the month and year.</p>
                <div className='Image'> <img src={Rating}/></div> 

            </div>
            <div className ="slate3">
            <div className='User'><img src={User3}/></div>
            <p>Slate helps you see how many 
                more days you need to work to reach 
                your financial goal for the month and year.</p>
                <div className='Image'> <img src={Rating}/></div> 

            </div>
          </div>
          {/* <div className='Weirdo'>
            <img src={Vector}></img>
            <img src={Vector1}></img>
            <img src={Vector2}></img>
            <img src={Vector3}></img>
            <img src={Vector4}></img>
            <img src={Vector5}></img>
          </div> */}

  </div>;
}
