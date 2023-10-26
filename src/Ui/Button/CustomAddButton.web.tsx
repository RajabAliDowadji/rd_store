import React from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./Button.web.css";

interface CustomButton {
  title: string;
  type?: any;
  onClick?: any;
  style?: any;
  className?: any;
  disabled?: boolean;
}

const CustomAddButton = ({
  disabled,
  title,
  onClick,
  type,
  style,
  className,
}: CustomButton) => {
  return (
    <Button
      type={type}
      style={style}
      className={`${className} customAddButton`}
      disabled={disabled}
      disableRipple
      disableFocusRipple
      onClick={onClick}
      startIcon={<AddIcon />}
    >
      {title}
    </Button>
  );
};

export default CustomAddButton;
