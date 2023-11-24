import React, { useState } from "react";
import "./AdminItems.css";
const AdminItems = ({ Item,PageNumber }) => {
// const userNumber = [
//   {id:1},
//   {id:2},
//   {id:3},
// ]
    


//  const onClick = () => {
//     PageNumber([...Item])

//  }

  return (
    <div>
      <ul className="row">
        {Item.map((index) => (
          <div key={index.id}>
            <li>{index.title}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AdminItems;
