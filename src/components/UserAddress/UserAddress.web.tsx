import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import CancelButton from "../../Ui/Button/CancelButton.web";
import { Colors } from "../../Constants/Colors";
import ActiveButton from "../../Ui/Button/ActiveButton.web";
import AddressModal from "../CustomModal/AddressModal/AddressModal.web";
import { useDispatch, useSelector } from "react-redux";
import { GET_USER_ADDRESSES } from "../../Hooks/Saga/Constant";
import AddressCard from "../AddressCard/AddressCard.web";
import "./UserAddress.web.css";

const configJSON = require("../../Constants/Modal");

interface UserAddressProps {
  activeStep: number;
  activeStepChangeHandle: any;
}

const UserAddress = ({
  activeStep,
  activeStepChangeHandle,
}: UserAddressProps) => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  const [newAddressOpen, setNewAddresssOpen] = useState<boolean>(false);
  const [addresses, setAddresss] = useState<any>([]);
  const [addressType, setAddressType] = useState<string>("");
  const [selectedAddress, setSelectedAddress] = useState<any>(null);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    dispatch({
      type: GET_USER_ADDRESSES,
    });
  }, [dispatch]);

  useEffect(() => {
    if (
      state &&
      state.get_user_addresses &&
      state.get_user_addresses.userAddresses &&
      state.get_user_addresses.userAddresses !== null &&
      state.get_user_addresses.userAddresses.user_address &&
      state.get_user_addresses.userAddresses.user_address.length !== 0
    ) {
      setAddresss(state.get_user_addresses.userAddresses.user_address);
    } else if (
      state &&
      state.get_user_addresses &&
      state.get_user_addresses.userAddresses &&
      state.get_user_addresses.userAddresses !== null &&
      state.get_user_addresses.userAddresses.user_address &&
      state.get_user_addresses.userAddresses.user_address.length === 0
    ) {
      setAddresss([]);
    }
  }, [state]);

  const newAddressClickHandle = () => {
    setNewAddresssOpen(!newAddressOpen);
  };
  const saveAddressClickHandle = () => {
    setNewAddresssOpen(!newAddressOpen);
    dispatch({
      type: GET_USER_ADDRESSES,
    });
  };

  const selectedAddressChangeHandle = (id: string) => {
    const selectedAdd = addresses.find(
      (address: { _id: string }) => address._id === id
    );
    setSelectedAddress(selectedAdd);
    setAddressType(selectedAdd.address_type);
    setIsError(false);
  };

  const selectAddressChangeHandle = () => {
    if (selectedAddress !== null) {
      activeStepChangeHandle.bind(this, activeStep + 1);
    } else {
      setIsError(true);
    }
  };

  return (
    <Grid container spacing={3}>
      {newAddressOpen && (
        <AddressModal
          open={newAddressOpen}
          modalHandleClose={newAddressClickHandle}
          saveAddressHandle={saveAddressClickHandle}
          isEdit={false}
        />
      )}
      <Grid item xs={12} sm={12} md={8} lg={8}>
        <Box className="useraddress_placeorderContainer">
          {addresses.map((address: any) => (
            <AddressCard
              address={address}
              addressType={addressType}
              selectedAddressChangeHandle={selectedAddressChangeHandle}
            />
          ))}
        </Box>
        <Box className="useraddress_placeorderContainer">
          <CancelButton
            title={"Add New Address"}
            disabled={false}
            style={{ border: `1px dashed ${Colors.primary500} !important` }}
            onClick={newAddressClickHandle}
          />
        </Box>
        {isError && (
          <Typography className="useraddress_errorTitleTxt">
            {configJSON.addressErrorTitleTxt}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Box className="useraddress_placeorderContainer">
          <Typography className="useraddress_billTitleTxt">
            Selected Address
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Typography className="useraddress_titleText">
                Address :
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9}>
              <Typography
                className={`useraddress_subtitleText ${
                  selectedAddress === null && "useraddress_subtitleNullText"
                }`}
              >
                {selectedAddress != null && (
                  <>
                    {selectedAddress.address_line1}-
                    {selectedAddress.address_line2}
                  </>
                )}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Typography className="useraddress_titleText">Town :</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9}>
              <Typography
                className={`useraddress_subtitleText ${
                  selectedAddress === null && "useraddress_subtitleNullText"
                }`}
              >
                {selectedAddress != null && (
                  <>{selectedAddress.place_id.town}</>
                )}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Typography className="useraddress_titleText">
                District :
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9}>
              <Typography
                className={`useraddress_subtitleText ${
                  selectedAddress === null && "useraddress_subtitleNullText"
                }`}
              >
                {selectedAddress != null && (
                  <>{selectedAddress.place_id.district}</>
                )}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Typography className="useraddress_titleText">City :</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9}>
              <Typography
                className={`useraddress_subtitleText ${
                  selectedAddress === null && "useraddress_subtitleNullText"
                }`}
              >
                {selectedAddress != null && (
                  <>{selectedAddress.place_id.city}</>
                )}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Typography className="useraddress_titleText">
                Pincode :
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9}>
              <Typography
                className={`useraddress_subtitleText ${
                  selectedAddress === null && "useraddress_subtitleNullText"
                }`}
              >
                {selectedAddress != null && (
                  <>{selectedAddress.place_id.pincode}</>
                )}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Typography className="useraddress_titleText">State :</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9}>
              <Typography
                className={`useraddress_subtitleText ${
                  selectedAddress === null && "useraddress_subtitleNullText"
                }`}
              >
                {selectedAddress != null && (
                  <>{selectedAddress.place_id.state}</>
                )}
              </Typography>
            </Grid>
          </Grid>
          <ActiveButton
            title={"Continue"}
            style={{ width: "100%", marginTop: "50px" }}
            onClick={selectAddressChangeHandle}
          />
        </Box>
      </Grid>
    </Grid>
  );
};
export default UserAddress;
