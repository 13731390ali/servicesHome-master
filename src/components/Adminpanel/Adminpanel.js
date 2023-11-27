import React, { useState, useEffect } from "react";
import "./Adminpanel.css";
import AdminItems from "./AdminpanelItem/AdminItems";
import User from "./User/User";
import User2 from "./User/User2";
import { Link } from "react-router-dom";
import ModalBox from "./ModalDelet/ModalBox";


const Adminpanel = () => {

  // const Items = [
  //   { id: 1, date: "آبان", name: "علی" , href:"/User2" },
  //   { id: 2, date: "آذر", name: "رضا" , href:"/User3" },
  //   { id: 3, date: "بهمن", name: "محمد" , href:"/User4" },
  // ];
 
  const [userpage,setUserpage] = useState(false)

  const handleUsers = () => {
    setUserpage(true)
  }


  const [person, setPerson] = useState([]);


  useEffect(() => {
    const getPerson = async () => {
      const response = await fetch("http://localhost:8000/posts");
      const responoseData = await response.json();
      setPerson(responoseData);
    };
   
    getPerson();
  }, []);

//   fetch('http://localhost:8000/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     id: 6,
//     date: "اول مهر",
//     name: "مریم",
//     href:"/User3"
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

  // const parts = [
  //   { id: 101, title: "مدیریت کاربران" },
  //   { id: 102, title: "خروج" },
  // ];

 
  // const [part, setPart] = useState([]);
  // const [count, setCount] = useState([]);

  // useEffect(  () => {
  //   if (part == 101) {
  //     return setCount(Items);
  //   }
  //   if (part === 102) {
  //     return alert("خروج")
  //   }
  // }, [part]);

  return (
    <div>
      <div className="row">
        <div className="col-lg-3">
          <div className="panelStyle">
            {/* {Items.map((item) => ( */}
              <ul>
                <li
                 onClick={() => handleUsers()}
                >
                 مدیریت کاربران
                </li>
               
              </ul>
              <li><ModalBox/></li>
            {/* ))}  */}

          </div>
        </div>
        <div className="col-lg-7">
          {userpage ?  <User paremetrs={person} /> : null}
      
        </div>
      </div>
    </div>
  );
};

export default Adminpanel;
