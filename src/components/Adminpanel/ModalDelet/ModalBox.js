import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

import "./Modal.css";
// import { type } from "@testing-library/user-event/dist/type";

const style = {
  position: "absolute",
  // display: "flex",
  // justifyContent: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: "auto",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  padding: "50px",
};

const ModalBox = ({ parametrs }) => {
  const [userdata, setUserdata] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({criteriaMode :"all"});

  // console.log(persondata)

  // const getdata = async (data) => {
  //   const response = await fetch("http://localhost:8000/posts", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },

  //     body: JSON.stringify(data),
  //   });
  // };

  const onSubmit = async (data) => {
    if (data) {
      setUserdata(data);
    }

    const response = await fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });
  };

  //   const[datavalue,setDatavalue] = useState(onSubmit)

  //   console.log(datavalue)

  //   useEffect(() => {
  //     const getPerson = async () => {
  //       const response = await fetch("http://localhost:8000/posts");
  //       const responoseData = await response.json();
  //       setDatavalue(responoseData);
  //     };

  //     getPerson();
  //   }, []);
  //   console.log(datavalue)

  // async function postData(url = '', data = {}) {
  // const response =  fetch('http://localhost:8000/posts', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(data)
  // })
  // return response.json()
  //   }

  //   console.log(watch("example"));

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <button className="btn btn-warning btn-sm">ثبت نام</button>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            sx={{ display: "flex" }}
            component="h2"
          >
            ویرایش ثبت نام
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* /* register your input into the hook by invoking the "register" function */}
              <input
                {...register("firstName", { required: true })}
                style={{ display: "block", margin: "5px 0" }}
                placeholder="نام ..."
                className="input"
              />
              {errors.firstName && (
                <span style={{ color: "red" }}>نام را وارد کنید!</span>
              )}
              {/* include validation with required or other standard HTML validation rules */}
              <input
                {...register("lastName", { required: true })}
                style={{ display: "block", margin: "5px 0" }}
                placeholder="نام خانوادگی ..."
                className="input"
              />
              {/* errors will return when field validation fails  */}
              {errors.lastName && (
                <span style={{ color: "red" }}>نام خانوادگی را وارد کنید!</span>
              )}

              <input
                
                {...register("multipleErrorInput", {
                  required: "شماره همراه ضروری است!",

                  pattern: {
                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                    message: "فقط شماره را وارد کنید"
                  },
                  minLength:{
                    value:11,
                    message:"شماره وارد شده کمتر از 11 عدد است."
                  },
                  maxLength:{
                    value:11,
                    message:"شماره وارد شده بیشتر از 11 عدد است."
                  }
                 
                })}
                placeholder="شماره موبایل ..."
                style={{ display: "block", margin: "5px 0" }}
                
              />
          
            <ErrorMessage
            errors={errors}
            name="multipleErrorInput"
            render= {({messages}) => 
            messages && 
            Object.entries(messages).map(([type,message]) => (
              <p style={{color:"red"}} key={type}>{message}</p>
            ))
          }
          />

              <input type="submit" style={{ display: "block" }} />
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalBox;