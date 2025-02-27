import React from 'react'
import brandlogo from '../../images/icon-brand-recognition.svg';
import detaillogo from '../../images/icon-detailed-records.svg';
import customlogo from '../../images/icon-fully-customizable.svg';
import './AdvanceStats.css';

const AdvanceStats = () => {
  return (
    <div className='advance-stats'>
      <div className='advance-stats-upper'>
        <h2>Advance Statistics</h2>
        <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
      </div>
      <div className='advance-stats-lower'>
        <div className='advance-stat-box advance-left'>
          <img src={brandlogo} alt="brand" />
          <h3>Brand Recognition</h3>
          <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
        </div>
        <div className='advance-stat-box advance-middle'>
          <img src={detaillogo} alt="custom" />
          <h3>Detailed Records</h3>
          <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
        </div>
        <div className='advance-stat-box advance-right'>
          <img src={customlogo} alt="recog" />
          <h3>Fully Customizable</h3>
          <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
        </div>

      </div>

    </div>
  )
}

export default AdvanceStats;