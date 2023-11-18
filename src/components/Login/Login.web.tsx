import React, { useEffect, useState } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { Box, Typography } from "@material-ui/core";
import CustomTextField from "../../Ui/CustomTextField/CustomTextField.web";
import ActiveButton from "../../Ui/Button/ActiveButton.web";
import { emailValidate } from "../../Validations/emailValidate.web";
import { ADD_USER, RESET_STATE, USER_LOGIN } from "../../Hooks/Saga/Constant";
import { errorToaster, isEmpty } from "../../Utils/common";
import { useDispatch, useSelector } from "react-redux";
import { phoneNumberValidate } from "../../Validations/phoneNumberValidate.web";
import PhoneTextField from "../../Ui/CustomTextField/PhoneTextField.web";
import { color_logo } from "./assets";
import "./Login.web.css";

interface LoginProps {
  open: boolean;
  handleClose: any;
}

const Login = ({ open, handleClose }: LoginProps) => {
  const dispatch = useDispatch();
  const initialData = {
    user_name: "",
    email: "",
    phone_number: "",
  };
  const state = useSelector((state: any) => state);
  const [formData, setFormData] = useState(initialData);
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [dataError, setDataError] = useState({
    errors: { user_name: false, email: false, phone_number: false },
    errorMsg: {
      user_name: "",
      email: "",
      phone_number: "",
    },
  });

  useEffect(() => {
    if (state && state.add_edit_user && state.add_edit_user) {
      if (state.add_edit_user.isSuccess && state.add_edit_user.user) {
        localStorage.setItem("token", state.add_edit_user.user.data.token);
        localStorage.setItem(
          "user_data",
          JSON.stringify(state.add_edit_user.user.data)
        );
        handleClose();
      } else if (state.add_edit_user.isError) {
        errorToaster(state.add_edit_user.message);
        handleClose();
      }
      dispatch({
        type: RESET_STATE,
        payload: { state: "user" },
      });
    }
  }, [dispatch, handleClose, state]);

  useEffect(() => {
    if (state && state.login_user) {
      if (
        state.login_user.isLoginSuccess &&
        state.login_user.userLoginResponse
      ) {
        localStorage.setItem(
          "token",
          state.login_user.userLoginResponse.data.token
        );
        localStorage.setItem(
          "user_data",
          JSON.stringify(state.login_user.userLoginResponse.data)
        );
        handleClose();
      } else if (state.login_user.isError) {
        errorToaster(state.login_user.message);
        handleClose();
      }
      dispatch({
        type: RESET_STATE,
        payload: { state: "user" },
      });
    }
  }, [dispatch, handleClose, state]);

  const inputChangeHandle = (
    fieldName: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let isValid = isEmpty(fieldName, event.target.value);
    if (fieldName === "Email" && event.target.value.trim() !== "") {
      isValid = emailValidate(fieldName, event.target.value);
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

  const phoneChangeHandle = (key: string, fieldName: string, value: string) => {
    const isValid = phoneNumberValidate(fieldName, value);
    setFormData((prev: any) => ({
      ...prev,
      [key]: value ? value : "",
    }));
    setDataError((prev) => ({
      ...prev,
      errors: { ...dataError.errors, [key]: isValid.status },
      errorMsg: {
        ...dataError.errorMsg,
        [key]: isValid.message,
      },
    }));
  };

  const formSubmitHandle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLoginPage) {
      const isPhoneNoValid = phoneNumberValidate(
        "Phone number",
        formData.phone_number
      );
      if (isPhoneNoValid.status) {
        setDataError((prev: any) => ({
          ...prev,
          errors: {
            ...dataError.errors,
            phone_number: isPhoneNoValid.status,
          },
          errorMsg: {
            ...dataError.errorMsg,
            phone_number: isPhoneNoValid.message,
          },
        }));
      } else {
        dispatch({
          type: USER_LOGIN,
          payload: { phone_number: formData.phone_number },
        });
      }
    } else {
      const isUserNameValid = isEmpty("User name", formData.user_name);
      const isPhoneNoValid = phoneNumberValidate(
        "Phone number",
        formData.phone_number
      );
      if (isUserNameValid.status || isPhoneNoValid.status) {
        setDataError((prev: any) => ({
          ...prev,
          errors: {
            ...dataError.errors,
            user_name: isUserNameValid.status,
            phone_number: isPhoneNoValid.status,
          },
          errorMsg: {
            ...dataError.errorMsg,
            user_name: isUserNameValid.message,
            phone_number: isPhoneNoValid.message,
          },
        }));
      } else {
        dispatch({
          type: ADD_USER,
          payload: formData,
        });
      }
    }
  };

  const signUpLoginClickHandle = () => {
    setIsLoginPage(!isLoginPage);
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
      <Box className="login_logoImgContainer">
        <img
          src={color_logo}
          alt="login_logo_image"
          className="login_logoImage"
        />
      </Box>
      <form onSubmit={formSubmitHandle}>
        <Typography className="login_titleText">
          {isLoginPage ? (
            <>Login</>
          ) : (
            <>
              Welcome to <span className="login_mainText">RD Store</span>
            </>
          )}
        </Typography>
        {!isLoginPage && (
          <>
            <Box className="login_textFieldContainer">
              <CustomTextField
                id="user_name"
                type="text"
                name="user_name"
                label="User name"
                placeholder="Enter your user name"
                value={formData.user_name}
                error={dataError.errors.user_name}
                errorText={dataError.errorMsg.user_name}
                onChange={inputChangeHandle.bind(this, "User name")}
              />
            </Box>
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
          </>
        )}
        <Box className="login_textFieldContainer">
          <PhoneTextField
            value={formData.phone_number}
            label="Phone number"
            error={dataError.errors.phone_number}
            errorText={dataError.errorMsg.phone_number}
            onChange={phoneChangeHandle.bind(
              this,
              "phone_number",
              "Phone number"
            )}
          />
        </Box>
        <Box className="login_BtnContainer">
          <ActiveButton
            title={isLoginPage ? "Login" : "Sign up"}
            type="submit"
            disabled={false}
            style={{ width: "100%" }}
          />
        </Box>
        <h2 className="login_orLineContainer">
          <span className="login_orTextLabel">or</span>
        </h2>
        <Box className="login_accountContainer">
          <Typography className="login_accountTitleTxt">
            Do you have account ?{" "}
            <span className="login_btnText" onClick={signUpLoginClickHandle}>
              {isLoginPage ? <>Sign up</> : <>Login</>}
            </span>
          </Typography>
        </Box>
      </form>
    </SwipeableDrawer>
  );
};
export default Login;
