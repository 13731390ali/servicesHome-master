import React, { useState } from "react";
import ModaBox2 from "../ModalDelet/ModaBox2";

const User = ({ paremetrs }) => {
  const [items, setItems] = useState(paremetrs);

  const del = (id) => {
    fetch(`http://localhost:8000/posts/${id}`, {
      method: "DELETE",
    }).then(async (res) => {
      const response = await fetch("http://localhost:8000/posts");
      const responoseData = await response.json();
      setItems(responoseData);
    });
  };

  const Remove = (id, name) => {
    if (window.confirm(`از حذف ${name} مطمئن هستید؟`)) {
      del(id);
    }
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>کد</th>
            <th>نام </th>
            <th>نام خانوادگی</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>
                <ModaBox2
                  name={item.firstName}
                  lastName={item.lastName}
                  id={item.id}
                  
                />
              </td>
              <td>
                <button
                  onClick={() => Remove(item.id, item.name)}
                  className="btn btn-danger btn-sm"
                >
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
