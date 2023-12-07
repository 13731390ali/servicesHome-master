import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./ModalBox2.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 80,
  p: 4,
  padding: "50px",
};

const ModaBox2 = ({ name, lastName, id, phone ,NationalCode}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inputValue, setInputValue] = useState(name);
  const [inputValue2, setInputValue2] = useState(lastName);
  const [inputValue3, setInputValue3] = useState(phone);
  const [inputValue4, setInputValue4] = useState(NationalCode);
  const [valid,setValid] = useState(false);

  const previousInputValue = useRef("");
  const previousInputValue2 = useRef("");
  const previousInputValue3 = useRef("");
  const previousInputValue4 = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    previousInputValue2.current = inputValue2;
  }, [inputValue2]);
  useEffect(() => {
    previousInputValue3.current = inputValue3;
  }, [inputValue3]);
  useEffect(() => {
    previousInputValue4.current = inputValue4;
  }, [inputValue4]);

  const changeData = (event) => {
    setInputValue(event);
  };

  const changeData2 = (event) => {
    setInputValue2(event);
  };
  const changeData3 = (event) => {
    setInputValue3(event);
  };
  const changeData4 = (event) => {
    setInputValue4(event);
  };

  const postUser = (id) => {
    console.log(id);
    setValid(true)
    fetch(`http://localhost:8000/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        firstName: `${inputValue}`,
        lastName: `${inputValue2}`,
        phoneNumber:`${inputValue3}`,
        NationalCode:`${inputValue4}`
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      <button onClick={handleOpen} className="btn  btn-danger">
        ویرایش
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
          ></Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="styleForm">
              <label>نام</label>
              <input
                className="styleInput"
                type="text"
                value={inputValue}
                onChange={(e) => changeData(e.target.value)}
              />
              <label>نام خانوادگی</label>
              <input
                className="styleInput"
                type="text"
                value={inputValue2}
                onChange={(e) => changeData2(e.target.value)}
              />

              <label>شماره تماس</label>
              <input
                className="styleInput"
                type="phone"
                value={inputValue3}
                onChange={(e) => changeData3(e.target.value)}
              />

              <label>کد ملی</label>
              <input
                className="styleInput"
                type="phone"
                value={inputValue4}
                onChange={(e) => changeData4(e.target.value)}
              />

              <button  onClick={() => postUser(id)}>ثبت</button>
            
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ModaBox2;
