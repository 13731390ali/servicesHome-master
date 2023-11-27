import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import ModalBox from "../ModalDelet/ModalBox";

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
      // const item = items.filter((q) => q.id !== id);
      del(id);
      // setItems(item);
      // console.log(item);
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
               
                  {/* <Link
                    style={{ color: "#000", textDecoration: "none" }}
                    to={item.href}
                  > */}
                  {/* <ModalBox parametrs={paremetrs}/> */}
                  {/* </Link> */}
              
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

      {/* {paremetrs.map((item) => (
        <div key={item.id}>
            <h2>{item.name}</h2>
        </div>
      ))} */}
    </div>
  );
};

export default User;
