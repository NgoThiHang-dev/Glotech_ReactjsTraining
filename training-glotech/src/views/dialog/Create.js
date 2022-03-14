import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const Create = () => {
//   let history = useHistory();
  const [name, setName] = useState("");
  const [day_of_birth, setBirthday] = useState("");
  const [address, setAdress] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const postData = () => {
    axios
      .post(
        `https://crudcrud.com/api/eac73b0cfefd405aa2ac7a959599b329/employees/`,
        {
          name,
          day_of_birth,
          address,
        }
      )
      .then(() => {
        // history.push('/read')
        // setPost(response.data);
      });
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Employees Form</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            Please enter the information below!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            id="date"
            type="date"
            variant="standard"
            fullWidth
            style={{ paddingTop: "15px" }}
          />
          <TextField
            margin="dense"
            id="address"
            label="Address"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Create;
