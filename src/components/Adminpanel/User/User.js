import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const User = ({paremetrs}) => {

  const [items, setItems] = useState(paremetrs);
 

  const Remove = (id , name) => {
    
  //  const del = fetch(`http://localhost:8000/posts/${id}`, {
  //     method: "DELETE",
    
  //   });
  if(window.confirm(`از حذف ${name} مطمئن هستید؟`)){
    const item = items.filter((q) => q.id !== id)
    setItems(item)
    console.log(item)
  }
  
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>کد</th>
            <th>نام کاربر</th>
            <th>تاریخ ثبت نام</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            // <Link to={item.href}>
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td>
                <button className="btn btn-warning btn-sm">ویرایش</button>
              </td>
              <td>
                <button
                  onClick={() => Remove(item.id , item.name)}
                  className="btn btn-danger btn-sm"
                >
                  حذف
                </button>
              </td>
            </tr>
            // </Link>
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
