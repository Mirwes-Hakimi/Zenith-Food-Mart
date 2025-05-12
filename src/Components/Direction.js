import React from "react";
import "../Styles/Direction.css";

function Direction() {
  return (
    <div className="direction-container">
      <h1 className="direction-title">Find Us</h1>
      <div className="map-container">
        <iframe
          title="Google Map to Zenith Food Mart"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.6317320310905!2d-121.98974962354998!3d37.96238400133003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80855e18b58b1f5f%3A0x6f3dda8558b90487!2sZenith%20Food%20Mart%20(Afghan%20-%20Mediterranean%20Halal)!5e0!3m2!1sen!2sus!4v1696360542145!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Direction;
