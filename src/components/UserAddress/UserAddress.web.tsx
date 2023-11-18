import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import CancelButton from "../../Ui/Button/CancelButton.web";
import { Colors } from "../../Constants/Colors";
import ActiveButton from "../../Ui/Button/ActiveButton.web";
import AddressModal from "../CustomModal/AddressModal/AddressModal.web";
import "./UserAddress.web.css";

interface UserAddressProps {
  activeStep: number;
  activeStepChangeHandle: any;
}

const UserAddress = ({
  activeStep,
  activeStepChangeHandle,
}: UserAddressProps) => {
  const [newAddressOpen, setNewAddresssOpen] = useState<boolean>(false);

  const newAddressClickHandle = () => {
    setNewAddresssOpen(!newAddressOpen);
  };

  return (
    <Grid container spacing={3}>
      {newAddressOpen && (
        <AddressModal
          open={newAddressOpen}
          modalHandleClose={newAddressClickHandle}
        />
      )}
      <Grid item xs={12} sm={12} md={8} lg={8}>
        <Box className="UserAddress_placeorderContainer">
          {/* <Map
            google={props.google}
            zoom={14}
            style={{
              width: "100%",
              height: "500px",
            }}
            containerStyle={{
              position: "relative",
              width: "100%",
              height: "500px",
            }}
            initialCenter={{
              lat: 23.013704,
              lng: 71.182388,
            }}
          >
            <Marker onClick={onMarkerClick} />
          </Map> */}
        </Box>
        <Box className="UserAddress_placeorderContainer">
          <CancelButton
            title={"Add New Address"}
            disabled={false}
            style={{ border: `1px dashed ${Colors.primary500} !important` }}
            onClick={newAddressClickHandle}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Box className="UserAddress_placeorderContainer">
          <Typography className="UserAddress_billTitleTxt">
            Selected Address
          </Typography>
          <Box style={{ margin: "50px 0px" }}>Map Comming soon</Box>
          <ActiveButton
            title={"Continue"}
            style={{ width: "100%" }}
            onClick={activeStepChangeHandle.bind(this, activeStep + 1)}
          />
        </Box>
      </Grid>
    </Grid>
  );
};
export default UserAddress;
