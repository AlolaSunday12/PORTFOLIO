import React from 'react';
import { Link } from 'react-router-dom';

function Landingscreen() {
  return (
    <div>
      
      <div className='row landing justify-content-center'>
        <div className="col-md-12 my-auto text-center">
         
          <div className='row landing justify-content-center'>
            <div className="col-md-9 my-auto text-center" style={{ borderRight: '8px solid white' }}>
              <h2 style={{ color: 'white', fontSize: '50px' }}>
                Hotel Reservation System
              </h2>
              <p style={{ color: 'white', fontSize: '18px' }}>
                Welcome to our Hotel Reservation System, where your comfort is our top priority. Book your stay with ease and enjoy a delightful experience.
              </p>
              <Link to='/home'>
                <button className='btn landingbtn' style={{ color: 'blue' }}>
                  <h2>Continue>>></h2>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='row landing justify-content-center'>
        <div className="col-md-5 my-auto text-center">
          <img
            src="https://th.bing.com/th/id/OIP.VUEIDOByhikrSeVQD9UDGgHaD2?w=316&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt=""
            style={{ maxWidth: '150%', height: '10' }}
          />
          <h4 style={{ color: 'white', marginTop: '10px' }}>
            Luxurious Rooms
            </h4>
          <p style={{ color: 'white' }}>
            Indulge in the experience of our luxurious and comfortable rooms.
            </p>
        </div>

        <div className="col-md-5 my-auto text-center">
          <img
            src="https://th.bing.com/th/id/OIP.OS6GP3G5hUkI1BR8QOkMSAHaEQ?w=246&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt=""
            style={{ maxWidth: '150%', height: 'auto' }}
          />
          <h4 style={{ color: 'white', marginTop: '10px' }}>
            Beautiful Room
            </h4>
          <p style={{ color: 'white' }}>
            A pretty room filled with soothing blue colors and sunlight peeking through elegant curtains, creating a cozy and peaceful atmosphere.
            </p>
        </div>
        <div className="col-md-9 my-auto text-center">
          <img
            src="https://th.bing.com/th/id/OIP.q7-Kd5XwtVFZ4zkLk0nC6AHaEK?w=257&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt=""
            style={{ maxWidth: '150%', height: 'auto' }}
          />
          <h4 style={{ color: 'white', marginTop: '10px' }}>
            Hotel Environment
            </h4>
          <p style={{ color: 'white' }}>
          Here, every moment is an invitation to savor the beauty that surrounds and replenish your spirit in the embrace of a harmonious environment.
            </p>
        </div>
        <div className='row landing justify-content-end'>
        <div className="col-md-12 my-auto text-center">
          <p style={{ color: 'white', fontSize: '14px', marginBottom: '5px' }}>
            Contact us at: alolasj@gmail.com | Phone: +234 915 548 3340 
          </p>
        </div>
      </div>
      <div className='row landing justify-content-end'>
        <div className="col-md-12 my-auto text-center">
        
          <img
            src="https://th.bing.com/th?q=Company+Logo+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-WW&cc=NG&setlang=en&adlt=moderate&t=1&mw=247"  // Replace with your actual logo URL
            alt=""
            style={{ maxWidth: '100px', height: 'auto', marginBottom: '10px' }}
          />
          <p style={{ color: 'white', fontSize: '12px', marginBottom: '20px' }}>
            &copy; 2023 realfemtech. All rights reserved.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Landingscreen;