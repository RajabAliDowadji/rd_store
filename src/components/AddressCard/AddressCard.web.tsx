import React, { useEffect, useState } from "react";
import {
  Box,
  Radio,
  RadioProps,
  Typography,
  makeStyles,
} from "@material-ui/core";
import clsx from "clsx";
import { Colors } from "../../Constants/Colors";
import { delete_icon, edit_icon } from "./assets";
import DeleteModal from "../CustomModal/DeleteModal/DeleteModal.web";
import { useDispatch, useSelector } from "react-redux";
import "./AddressCard.web.css";
import { DELETE_USER_ADDRESS, RESET_STATE } from "../../Hooks/Saga/Constant";

interface AddressCardProps {
  address: any;
  addressType: string;
  selectedAddressChangeHandle: any;
}

const AddressCard = ({
  address,
  addressType,
  selectedAddressChangeHandle,
}: AddressCardProps) => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
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
      backgroundColor: Colors.white,
      border: `1px solid ${Colors.primary500}`,
      "input:hover ~ &": {
        backgroundColor: Colors.icon500,
      },
    },
    checkedIcon: {
      backgroundColor: Colors.icon,
      border: `1px solid ${Colors.primary500}`,
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

  useEffect(() => {
    if (
      state &&
      state.delete_user_address &&
      state.delete_user_address.isSuccess &&
      state.delete_user_address.isSuccess
    ) {
      dispatch({
        type: RESET_STATE,
        payload: { state: "user_address" },
      });
      modalHandleClose();
    }
  }, [dispatch, state]);

  const deleteAddressHandle = (id: string) => {
    setId(id);
    setModalOpen(true);
  };

  const modalHandleClose = () => {
    setModalOpen(false);
  };

  const onDeleteConfirmHandle = () => {
    dispatch({
      type: DELETE_USER_ADDRESS,
      payload: { id: id },
    });
  };

  return (
    <Box>
      <DeleteModal
        open={modalOpen}
        title="Address"
        onClose={modalHandleClose}
        onConfirmClick={onDeleteConfirmHandle}
      />
      <Box className="addressCard_mainContainer">
        <Box className="addressCard_innerContainer">
          <Box className="addressCard_bigContainer">
            <Box className="addressCard_BtnContainer">
              <StyledRadio
                value={address.address_type}
                onChange={selectedAddressChangeHandle.bind(this, address._id)}
                checked={address.address_type === addressType}
              />
            </Box>
            <Box className="addressCard_titleContainer">
              <Typography className="addressCard_titleText">
                {address.address_line1}-{address.address_line2}
              </Typography>
              <Typography className="addressCard_titleText">
                {address.place_id.town}
              </Typography>
              <Typography className="addressCard_placeText">
                {address.place_id.pincode}
              </Typography>
            </Box>
          </Box>
          <Box className="addressCard_btnActionContainer">
            <img
              src={delete_icon}
              alt="address_delete_icon"
              className="addressCard_deleteIcon"
              onClick={deleteAddressHandle.bind(this, address._id)}
            />
            <img
              src={edit_icon}
              alt="address_edit_icon"
              className="addressCard_deleteIcon"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default AddressCard;
