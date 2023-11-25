import React, { useState } from "react";
import "./Higher.css";

const HigherOrderComponent = (WrappedComponent) => {
  const HOC = () => {
    const [item, setItem] = useState("ali azizi");

    const style = [
      {
        
        width: "50%",
        backgroundColor: "red",
        border: "none",
        borderRadius: "8px",
        outline: "none",
      },
    ];

    return <WrappedComponent style={style}  name={item} />;
  };
  return HOC;
};

export default HigherOrderComponent;
