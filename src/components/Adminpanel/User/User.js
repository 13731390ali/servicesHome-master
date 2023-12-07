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

  const Remove = (id, lastName) => {
    if (window.confirm(`از حذف ${lastName} مطمئن هستید؟`)) {
      del(id);
     
    }
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ردیف</th>
            <th>نام </th>
            <th>نام خانوادگی</th>
            <th>کد ملی</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.NationalCode}</td>
              <td>
                <ModaBox2
                  name={item.firstName}
                  lastName={item.lastName}
                  id={item.id}
                  phone={item.phoneNumber}
                  NationalCode={item.NationalCode}
                />
              </td>
              <td>
                <button
                  onClick={() => Remove(item.id, item.firstName , item.lastName)}
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
