import React from "react";
import HigherOrderComponent from "../HOC/HigherOrderComponent";

// import Hoc from '../HOC/Hoc'

const User3 = ({ name, style }) => {
  return (
    <div>
      
      {style.map((item,index) => (
        
        <input
        key={index}
          style={{
            width: `${item.width}`,
            backgroundColor: `${item.backgroundColor}`,
            border: `${item.border}`,
            borderRadius:`${item.borderRadius}`,
            outline:`${item.outline}`
          }}
          value={name}
        />
       ))}
    </div>
  );
};

export default HigherOrderComponent(User3);
