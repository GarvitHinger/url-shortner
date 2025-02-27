import React from 'react'
import './Shortner.css';
const Shortner = () => {
  return (
    <div className="shortner">
          <div className="shortner-input">
              <input type="text" placeholder='Shorten a link here'>
                  
              </input>
              {/* <p className="shortner-warning">
                  Please provide the link
              </p> */}
          </div>
          <div className="shortner-button">
              <button>Shorten It</button>
          </div>
    </div>
  )
}

export default Shortner