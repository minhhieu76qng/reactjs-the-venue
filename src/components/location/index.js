import React from 'react'

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe 
        title="Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.379402988398!2d-122.25232194899257!3d37.82800287965043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857df6c43cdebb%3A0x91f2ea4405beec30!2sFentons+Creamery!5e0!3m2!1sen!2s!4v1562898978879!5m2!1sen!2s" 
        width="100%" 
        height="500" 
        frameBorder="0" 
        style={{
          border: 0
        }} 
        allowFullScreen></iframe>

        <div className="location_tag">
          <div>Location</div>
        </div>
    </div>
  );
};

export default Location;