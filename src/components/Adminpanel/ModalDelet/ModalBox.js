import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
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
    // watch,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });

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
    }).then(() => {
      alert("* ثبت نام شما با موفقیت انجام شد *");
      setUserdata(data);
    });
  };

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
            ثبت نام
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
                {...register("phoneNumber", {
                  required: "شماره همراه ضروری است!",

                  pattern: {
                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                    message: "صفر ابتدای شماره را وارد نکنید!",
                  },
                  minLength: {
                    value: 10,
                    message: "شماره وارد شده کمتر از 10 عدد است.",
                  },
                  maxLength: {
                    value: 10,
                    message: "شماره وارد شده بیشتر از 10 عدد است.",
                  },
                })}
                placeholder="شماره موبایل  918..."
                style={{ display: "block", margin: "5px 0" }}
              />

              <ErrorMessage
                errors={errors}
                name="phoneNumber"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p style={{ color: "red" }} key={type}>
                      {message}
                    </p>
                  ))
                }
              />

              <input
                     {...register("NationalCode", {
                      required: "وارد کردن کد ملی ضروری است!",
    
                      pattern: {
                        value: /^(0|[1-9]\d*)(\.\d+)?$/,
                        message: "صفر ابتدای کد را وارد نکنید!",
                      },
                      minLength: {
                        value: 10,
                        message: "کد وارد شده کمتر از 10 عدد است.",
                      },
                      maxLength: {
                        value: 10,
                        message: "کد وارد شده بیشتر از 10 عدد است.",
                      },
                    })}
                    placeholder="کد ملی ..."
                    style={{ display: "block", margin: "5px 0" }}
              />
              
              <ErrorMessage
                errors={errors}
                name="NationalCode"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p style={{ color: "red" }} key={type}>
                      {message}
                    </p>
                  ))
                }
              />

              <input
                className="buttSub"
                type="submit"
                style={{ display: "block" }}
              />
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalBox;
