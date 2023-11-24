import React, { useState } from "react";

const User2 = () => {
  const Items = [
    { id: 1, date: "آبان", name: "علی", href: "/User2" },
    { id: 2, date: "آذر", name: "رضا", href: "/User3" },
    { id: 3, date: "بهمن", name: "محمد", href: "/User4" },
  ];
  const[persons,setPersons] = useState(Items)

  const RemoveItem = (id) => {
    const item = persons.filter((q) => q.id !==id)

    setPersons(item)

    console.log(item)
  }

  

  return (
    <div className="row">
      {persons.map((item) => (
        <div key={item.id} className="col-lg-4">
          <div className="card">
            <div className="card-heade">{item.name}</div>
            <div className="card-body">{item.date}</div>
            <button onClick={() => RemoveItem(item.id)}>remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default User2;
