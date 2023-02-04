import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { AppContext } from "../../../context/Main";
import { useContext } from "react";
import { listings } from "../../../mocks/mock_listing";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function TransitionsModal() {
  const { open, updateOpen, property_id } = useContext(AppContext);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={updateOpen}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Property Details
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {listings[property_id - 1].details}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
