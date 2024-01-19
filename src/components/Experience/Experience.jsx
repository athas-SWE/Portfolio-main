import React from "react";
import "./Experience.css";



const Experience = () => {
  return (
    <div className="experience" id='experience'>

      <div className="achievement">
        <div className="circle" style={{ color: 'var(--orange)' }}>12 M</div>
        <span style={{ color: 'white' }}>Month </span>
        <span>Experience </span>
      </div>

      <div className="achievement">
        <div className="circle" style={{ color: 'var(--orange)' }}>15</div>
        <span style={{ color: 'white' }}>completed </span>
        <span>Projects </span>
      </div>

      <div className="achievement">
        <div className="circle" style={{ color: 'var(--orange)' }}> 2</div>
        <span style={{ color: 'white' }}>12 M</span>
        <span>Work</span>
      </div>

    </div>
  );
};

export default Experience;
