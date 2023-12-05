import React, { useState, useEffect } from "react";
import "./Adminpanel.css";
import User from "./User/User";
import ModalBox from "./ModalDelet/ModalBox";

const Adminpanel = () => {
  const [userpage, setUserpage] = useState(false);

  const handleUsers = () => {
    setUserpage(true);
  };

  const [person, setPerson] = useState([]);

  useEffect(() => {
    const getPerson = async () => {
      const response = await fetch("http://localhost:8000/posts");
      const responoseData = await response.json();
      setPerson(responoseData);
    };

    getPerson();
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-lg-3">
          <div className="panelStyle">
            <ul>
              <li onClick={() => handleUsers()}>مدیریت کاربران</li>
            </ul>
            <li>
              <ModalBox />
            </li>
          </div>
        </div>
        <div className="col-lg-7">
          {userpage ? <User paremetrs={person} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Adminpanel;
