import React from "react";
import { Box, Fade, Modal, Typography } from "@material-ui/core";
import CustomMap from "../../../Ui/CustomMap/CustomMap";
import "./AddressModal.web.css";

interface AddressModalProps {
  open: boolean;
  modalHandleClose: any;
}

const AddressModal = ({ open, modalHandleClose }: AddressModalProps) => {
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
          <Box className="addressModal_mapContainer">
            <CustomMap />
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};
export default AddressModal;
