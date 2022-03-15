import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

export default ({ close, getEmployees }) => {

  const [name, setName] = useState("");
  const [day_of_birth, setBirthday] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { name, day_of_birth, address };
    axios.post("https://training.morethanteam.tech/training/employees/", data).then((response) => {
        console.log(response);
        getEmployees();
        
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };
  // React.useEffect(() => {
  //   setIsOpen(true);
  // }, []);

  // const dialog = ()=>{
  //   setIsOpen(false)
  // }

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="header">Employees Form</div>
          <hr></hr>
          <div className="content">
            <TextField
              value={name}
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              onChange={(event) => {
                setName(event.target.value);
                console.log(name);
              }}
            />
            <TextField
              id="date"
              type="date"
              variant="standard"
              fullWidth
              style={{ paddingTop: "15px" }}
              value={day_of_birth}
              onChange={(event) => {
                setBirthday(event.target.value);
                console.log(name);
              }}
            />
            <TextField
              margin="dense"
              id="address"
              label="Address"
              type="text"
              fullWidth
              variant="standard"
              value={address}
              onChange={(event) => {
                setAddress(event.target.value);
                console.log(name);
              }}
            />
          </div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};
