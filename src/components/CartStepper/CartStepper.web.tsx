import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import { StepIconProps } from "@material-ui/core/StepIcon";
import { Colors, StepperColors } from "../../Constants/Colors";
import { cart_icon, completed_icon, payment_icon, place_icon } from "./assets";
import "./CartStepper.web.css";

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage: StepperColors.activeLine,
    },
  },
  completed: {
    "& $line": {
      backgroundImage: StepperColors.completedLine,
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: Colors.gray,
    borderRadius: 1,
    margin: "0px 15px",
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    background: "transparent",
  },
  completed: {
    background: "transparent",
  },
});

function ColorlibStepIcon(props: StepIconProps) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <img src={cart_icon} alt="cart_icon" className="CartStepper_icon" />,
    2: (
      <img src={payment_icon} alt="payment_icon" className="CartStepper_icon" />
    ),
    3: <img src={place_icon} alt="place_icon" className="CartStepper_icon" />,
  };

  return (
    <>
      {completed ? (
        <img
          src={completed_icon}
          alt="completed_icon"
          className="CartStepper_icon"
        />
      ) : (
        <Box
          className={clsx(classes.root, {
            [classes.active]: active,
            [classes.completed]: completed,
          })}
        >
          {icons[String(props.icon)]}
        </Box>
      )}
    </>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

function getSteps() {
  return ["Cart", "Payment", "Address"];
}

interface CartStepperProps {
  activeStep: number;
}

const CartStepper = ({ activeStep }: CartStepperProps) => {
  const classes = useStyles();
  const steps = getSteps();

  return (
    <Box className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
        className="CartStepper_stepperContainer"
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={ColorlibStepIcon}
              classes={{
                alternativeLabel: "CartStepper_stepLabel",
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
export default CartStepper;
