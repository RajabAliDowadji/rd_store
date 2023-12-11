import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Fade,
  FormControl,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
  RadioProps,
  Typography,
  makeStyles,
} from "@material-ui/core";
import clsx from "clsx";
import CustomTextField from "../../../Ui/CustomTextField/CustomTextField.web";
import { isEmpty } from "../../../Utils/common";
import { dropDownValidate } from "../../../Validations/dropDownValidate.web";
import DropDown from "../../../Ui/DropDown/DropDown.web";
import { Place } from "../../../Modal/GetPlace.modal";
import {
  ADD_USER_ADDRESS,
  GET_PLACES,
  RESET_STATE,
} from "../../../Hooks/Saga/Constant";
import { useDispatch, useSelector } from "react-redux";
import ActiveButton from "../../../Ui/Button/ActiveButton.web";
import CancelButton from "../../../Ui/Button/CancelButton.web";
import DeleteButton from "../../../Ui/Button/DeleteButton.web";
import "./AddressModal.web.css";
import { Colors } from "../../../Constants/Colors";

interface AddressModalProps {
  open: boolean;
  modalHandleClose: any;
  saveAddressHandle: any;
  isEdit: boolean;
}

const AddressModal = ({
  open,
  modalHandleClose,
  saveAddressHandle,
  isEdit,
}: AddressModalProps) => {
  const initialData = useMemo(() => {
    return {
      address_line1: "",
      address_line2: "",
      place: "",
      address_type: "Other",
      pincode: "",
      town: "",
      city: "",
      state: "",
    };
  }, []);
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  const [formData, setFormData] = useState(initialData);
  const [places, setPlaces] = useState<Place[]>([]);
  const [dataError, setDataError] = useState({
    errors: {
      address_line1: false,
      address_line2: false,
      place: false,
    },
    errorMsg: {
      address_line1: "",
      address_line2: "",
      place: "",
    },
  });

  useEffect(() => {
    dispatch({
      type: GET_PLACES,
    });
  }, [dispatch]);

  useEffect(() => {
    if (
      state &&
      state.get_places &&
      state.get_places.places &&
      state.get_places.places.length !== 0
    ) {
      let tempArr: Place[] = [];
      state.get_places.places.map((place: Place) =>
        tempArr.push({
          _id: place._id,
          town: place.town,
          district: place.district,
          city: place.city,
          state: place.state,
          pincode: place.pincode,
        })
      );
      setPlaces(tempArr);
    }
  }, [state, state.get_places]);

  useEffect(() => {
    if (
      state &&
      state.add_user_address &&
      state.add_user_address.user_address &&
      state.add_user_address.user_address !== null &&
      state.add_user_address.isSuccess
    ) {
      saveAddressHandle();
      dispatch({
        type: RESET_STATE,
        payload: { state: "user_address" },
      });
    }
  }, [dispatch, saveAddressHandle, state]);

  const useStyles = makeStyles({
    root: {
      fontFamily: Colors.fontFamily,
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    icon: {
      borderRadius: "50%",
      width: 20,
      height: 20,
      backgroundColor: Colors.gray,
      "input:hover ~ &": {
        backgroundColor: Colors.icon500,
      },
    },
    checkedIcon: {
      backgroundColor: Colors.icon,
      "&:before": {
        display: "block",
        width: 20,
        height: 20,
        backgroundImage: `radial-gradient(${Colors.primary500},${Colors.primary500} 28%,transparent 32%)`,
        content: '""',
      },
    },
  });

  function StyledRadio(props: RadioProps) {
    const classes = useStyles();

    return (
      <Radio
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={
          <span className={clsx(classes.icon, classes.checkedIcon)} />
        }
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  }

  const inputChangeHandle = (fieldName: string, event: any) => {
    let isValid = isEmpty(fieldName, event.target.value);
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    setDataError((prev) => ({
      ...prev,
      errors: { ...dataError.errors, [event.target.name]: isValid.status },
      errorMsg: {
        ...dataError.errorMsg,
        [event.target.name]: isValid.message,
      },
    }));
  };

  const optionalInputChangeHandle = (fieldName: string, event: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const radioGroupChangeHandle = (event: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const dropDownOnChangeHandle = (
    fieldName: string,
    keyName: string,
    values: any
  ) => {
    const isValid = dropDownValidate(fieldName, values);
    const findedPincode = places.find(
      (place: Place) => place._id === values[0]._id
    );
    setFormData((prev: any) => ({
      ...prev,
      [keyName]: values[0]._id,
    }));
    if (findedPincode) {
      setFormData((prev: any) => ({
        ...prev,
        town: findedPincode.town,
        city: findedPincode.city,
        state: findedPincode.state,
        pincode: findedPincode.pincode,
      }));
    }
    setDataError((prev) => ({
      ...prev,
      errors: { ...dataError.errors, [keyName]: isValid.status },
      errorMsg: {
        ...dataError.errorMsg,
        [keyName]: isValid.message,
      },
    }));
  };

  const formSubmitHandle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isAddressLine1Valid = isEmpty("Address", formData.address_line1);
    const isAddressLine2Valid = isEmpty("Address", formData.address_line2);
    const isPlaceValid = isEmpty("Place", formData.place);
    if (
      isAddressLine1Valid.status ||
      isAddressLine2Valid.status ||
      isPlaceValid.status
    ) {
      setDataError((prev) => ({
        ...prev,
        errors: {
          ...dataError.errors,
          address_line1: isAddressLine1Valid.status,
          address_line2: isAddressLine2Valid.status,
          place: isPlaceValid.status,
        },
        errorMsg: {
          ...dataError.errorMsg,
          address_line1: isAddressLine1Valid.message,
          address_line2: isAddressLine2Valid.message,
          place: isPlaceValid.message,
        },
      }));
    } else {
      if (isEdit) {
      } else {
        const tempData = {
          address_line1: formData.address_line1,
          address_line2: formData.address_line2,
          address_type: formData.address_type,
          place_id: formData.place,
        };
        dispatch({
          type: ADD_USER_ADDRESS,
          payload: tempData,
        });
      }
    }
  };

  return (
    <Modal
      open={open}
      onClose={modalHandleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
      disableAutoFocus={true}
      className="addressModal_modalContainer"
    >
      <Fade in={open}>
        <Box className="addressModal_modalSubContainer">
          <Typography className="addressModal_modalTitleText">
            Address Details
          </Typography>
          <form onSubmit={formSubmitHandle}>
            <Box className="addressModal_textFieldContainer">
              <CustomTextField
                id="address_line1"
                type="text"
                label="Address Line 1"
                name="address_line1"
                value={formData.address_line1}
                error={dataError.errors.address_line1}
                errorText={dataError.errorMsg.address_line1}
                onChange={inputChangeHandle.bind(this, "Address")}
              />
            </Box>
            <Box className="addressModal_textFieldContainer">
              <CustomTextField
                id="address_line2"
                type="text"
                label="Address Line 2"
                name="address_line2"
                value={formData.address_line2}
                error={dataError.errors.address_line2}
                errorText={dataError.errorMsg.address_line2}
                onChange={optionalInputChangeHandle.bind(this, "Address")}
              />
            </Box>
            <Box className="addressModal_textFieldContainer">
              <Box className="addressModal_radioBtnContainer">
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    aria-label="position"
                    name="address_type"
                    defaultValue="top"
                    value={formData.address_type}
                    onChange={radioGroupChangeHandle}
                  >
                    <FormControlLabel
                      value="Home"
                      control={<StyledRadio />}
                      label={
                        <Typography className="addressModal_labelText">
                          Home
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="Office"
                      control={<StyledRadio />}
                      label={
                        <Typography className="addressModal_labelText">
                          Office
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="Other"
                      control={<StyledRadio />}
                      label={
                        <Typography className="addressModal_labelText">
                          Other
                        </Typography>
                      }
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Box>
            <Box className="addressModal_textFieldContainer">
              <DropDown
                label="Place"
                name="place"
                multi={false}
                disabled={false}
                clearable={false}
                required={false}
                data={places}
                labelField={"town"}
                valueField={"_id"}
                values={formData.place}
                placeholder="Please select Place"
                error={dataError.errors.place}
                errorText={dataError.errorMsg.place}
                onChange={dropDownOnChangeHandle.bind(this, "Place", "place")}
              />
            </Box>
            <Box className="addressModal_textFieldContainer">
              <CustomTextField
                id="pincode"
                type="number"
                label="Pincode"
                name="pincode"
                value={formData.pincode}
                disabled={true}
              />
            </Box>
            <Box className="addressModal_textFieldContainer">
              <CustomTextField
                id="town"
                type="text"
                label="Town"
                name="town"
                value={formData.town}
                disabled={true}
              />
            </Box>
            <Box className="addressModal_textFieldContainer">
              <CustomTextField
                id="city"
                type="text"
                label="City"
                name="city"
                value={formData.city}
                disabled={true}
              />
            </Box>
            <Box className="addressModal_textFieldContainer">
              <CustomTextField
                id="state"
                type="text"
                label="State"
                name="state"
                value={formData.state}
                disabled={true}
              />
            </Box>
            <Box className="addressModal_BtnContainer">
              {isEdit ? (
                <Box>
                  <ActiveButton
                    type="submit"
                    title="Update"
                    disabled={false}
                    style={{ width: "150px", margin: "0px 15px 0px 0px" }}
                  />
                  <DeleteButton
                    title="Delete"
                    disabled={false}
                    style={{ width: "150px", margin: "0px 0px 0px 15px" }}
                  />
                </Box>
              ) : (
                <Box>
                  <ActiveButton
                    type="submit"
                    title="Save"
                    disabled={false}
                    style={{ width: "150px", margin: "0px 15px 0px 0px" }}
                  />
                  <CancelButton
                    title="Cancel"
                    disabled={false}
                    style={{ width: "150px", margin: "0px 0px 0px 15px" }}
                    onClick={modalHandleClose}
                  />
                </Box>
              )}
            </Box>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};
export default AddressModal;
