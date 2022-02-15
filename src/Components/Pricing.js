import React from 'react';
import PricingStyle from './Pricing.css';
import limitedImage from './CheckBoxGreen1.jpg';
import limitImage from './CheckBoxGrey1.jpg';
import Vector from './Vector.png';
import Vector1 from './Vector-1.png';
import Vector2 from './Vector-2.png';
import Vector3 from './Vector-3.png';
import Vector4 from './Vector-4.png';
import Vector5 from './Vector-5.png';
function Pricing() {
  return <div className='pricing' id='Pricing'>
        <div className='Weirdo'>
            <img src={Vector}></img>
            <img src={Vector1}></img>
            <img src={Vector2}></img>
            <img src={Vector3}></img>
            <img src={Vector4}></img>
            <img src={Vector5}></img>
          </div>
          <div className='InputDetails'>
            <div className='words'>
                <h4>Subscribe for latest <br></br>Newsletter</h4>
            </div>
            <div className='inputForm'>
                <input type='text' placeholder='Your Email' required/>
                <div className='sub'><p>Subscribe</p></div>
            </div>
          </div>

      <div className='priContents'>
          <h2>Pricing</h2>
          <p>Problems trying to resolve the conflict 
              between<br></br> the two major realms of 
              Classical physics: Newtonian mechanics</p>
      </div>
      <div className='priContainer'>
          <div className='free'>
              <h2>FREE</h2>
              <p>Organize across all apps by hand</p>
              <div className='offer'>
                <p>0</p> <div className='when'><p> $ <br></br>Per Month</p></div>
              </div>
              <div className='limited'><img src={limitedImage}></img>
              <p>Unlimited product updates</p></div>
              <div className='limited'><img src={limitedImage}></img>
              <p>Unlimited product updates</p></div>
              <div className='limited'><img src={limitedImage}></img>
              <p>Unlimited product updates</p></div>
              <div className='limited'><img src={limitImage}></img>
              <p>1GB Cloud storage</p></div>
              <div className='limited'><img src={limitImage}></img>
              <p>Email and Commmunity support</p></div>
              <div className='try'><h4>Try for free</h4></div>
          </div>
          <div className='standard'>
              <h2>STANDARD</h2>
              <p>Organize across all apps by hand</p>
              <div className='offer'>
              <p>99.9</p> <div className='when'><p> $ <br></br>Per Month</p></div>
              </div>
              <div className='limited'><img src={limitedImage}></img>
              <p>Unlimited product updates</p></div>
              <div className='limited'><img src={limitedImage}></img>
              <p>Unlimited product updates</p></div>
              <div className='limited'><img src={limitedImage}></img>
              <p>Unlimited product updates</p></div>
              <div className='limited'><img src={limitImage}></img>
              <p>1GB Cloud storage</p></div>
              <div className='limited'><img src={limitImage}></img>
              <p>Email and Commmunity support</p></div>
              <div className='try'><h4>Try for free</h4></div>
          </div>
      
      <div className='premium'>
              <h2>PREMIUM</h2>
              <p>Organize across all apps by hand</p>
              <div className='offer'>
              <p>19.99</p> <div className='when'><p> $ <br></br>Per Month</p></div>
              </div>
              <div className='limited'><img src={limitedImage}></img>
              <p>Unlimited product updates</p></div>
              <div className='limited'><img src={limitedImage}></img>
              <p>Unlimited product updates</p></div>
              <div className='limited'><img src={limitedImage}></img>
              <p>Unlimited product updates</p></div>
              <div className='limited'><img src={limitImage}></img>
              <p>1GB Cloud storage</p></div>
              <div className='limited'><img src={limitImage}></img>
              <p>Email and Commmunity support</p></div>
              <div className='try'><h4>Try for free</h4></div>
          </div>      
    </div>
  </div>;
}

export default Pricing;
