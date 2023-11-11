import React, { useState } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { Box, Typography } from "@material-ui/core";
import CustomTextField from "../../Ui/CustomTextField/CustomTextField.web";
import ActiveButton from "../../Ui/Button/ActiveButton.web";
import { passwordValidate } from "../../Validations/passwordValidate.web";
import { emailValidate } from "../../Validations/emailValidate.web";
import { USER_LOGIN } from "../../Hooks/Saga/Constant";
import { isEmpty } from "../../Utils/common";
import { useDispatch } from "react-redux";
import "./Login.web.css";

interface LoginProps {
  open: boolean;
  handleClose: any;
}

const Login = ({ open, handleClose }: LoginProps) => {
  const dispatch = useDispatch();
  const initialData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialData);
  const [dataError, setDataError] = useState({
    errors: {
      email: false,
      password: false,
    },
    errorMsg: {
      email: "",
      password: "",
    },
  });
  const inputChangeHandle = (
    fieldName: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let isValid = isEmpty(fieldName, event.target.value);
    if (fieldName === "Email") {
      isValid = emailValidate(fieldName, event.target.value);
    }
    if (fieldName === "Password") {
      isValid = passwordValidate(fieldName, event.target.value);
    }
    setFormData((prev: any) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    setDataError((prev: any) => ({
      ...prev,
      errors: { ...dataError.errors, [event.target.name]: isValid.status },
      errorMsg: {
        ...dataError.errorMsg,
        [event.target.name]: isValid.message,
      },
    }));
  };

  const formSubmitHandle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isEmailValid = emailValidate("Email", formData.email);
    const isPasswordValid = passwordValidate("Password", formData.password);
    if (isEmailValid.status || isPasswordValid.status) {
      setDataError((prev: any) => ({
        ...prev,
        errors: {
          ...dataError.errors,
          email: isEmailValid.status,
          password: isPasswordValid.status,
        },
        errorMsg: {
          ...dataError.errorMsg,
          email: isEmailValid.message,
          password: isPasswordValid.message,
        },
      }));
    } else {
      dispatch({
        type: USER_LOGIN,
        payload: formData,
      });
    }
  };

  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={handleClose}
      onOpen={function (event: React.SyntheticEvent<{}, Event>): void {
        throw new Error("Function not implemented.");
      }}
    >
      <form onSubmit={formSubmitHandle}>
        <Typography className="login_titleText">Login</Typography>
        <Box className="login_textFieldContainer">
          <CustomTextField
            id="emailId"
            type="text"
            name="email"
            label="Email"
            placeholder="Enter your email"
            value={formData.email}
            error={dataError.errors.email}
            errorText={dataError.errorMsg.email}
            onChange={inputChangeHandle.bind(this, "Email")}
          />
        </Box>
        <Box className="login_textFieldContainer">
          <CustomTextField
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            label="Password"
            value={formData.password}
            error={dataError.errors.password}
            errorText={dataError.errorMsg.password}
            onChange={inputChangeHandle.bind(this, "Password")}
          />
        </Box>
        <Box className="login_BtnContainer">
          <ActiveButton
            title="Login"
            type="submit"
            disabled={false}
            style={{ width: "100%" }}
          />
        </Box>
      </form>
    </SwipeableDrawer>
  );
};
export default Login;
