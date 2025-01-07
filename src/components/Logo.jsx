import React from 'react'

import PropTypes from 'prop-types';

function Logo({width = '100px'}) {
  return (
    <div style={{ width: '100px', height: '100px', border: '1px solid black' ,borderRadius: '50%', overflow: 'hidden' }}>
    <img 
      src="https://img.freepik.com/free-vector/flat-design-gaming-logo_23-2150760192.jpg?semt=ais_hybrid" 
      alt="Placeholder" 
      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
    />
  </div>
  
  )
}

Logo.propTypes = {
  width: PropTypes.string
}



export default Logo