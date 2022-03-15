import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import DateTimePicker from "react-datetime-picker";

export default ({ close, getEmployees, employees }) => {
  const [name, setName] = useState("");
  const [day_of_birth, setBirthday] = useState("");
  const [address, setAddress] = useState("");

  const [data, setData] = useState(null);

  React.useEffect(() => {
    const data = { name, day_of_birth, address };
    axios
      .get(
        `https://training.morethanteam.tech/training/employees/${employees.id}`
      )
      .then((response) => {
        setData(response.data);
        setName("");
        setBirthday("");
        setAddress("");
      });
  }, []);

  return (
    <div>
      <form>
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="header">Employees Form</div>
          <hr></hr>
          <div className="content">
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              fullWidth
              variant="standard"
              value={employees.name}
              onChange={(e) => setName(e.target.value)}
            />

            <DateTimePicker
              value={employees.day_of_birth}
              onChange={(e) => setBirthday(e.target.value)}
              renderInput={(props) => <TextField {...props} />}
              format="dd MM yyyy"
              style={{ width: "400px" }}
            />

            <TextField
              margin="dense"
              id="address"
              label="Address"
              type="text"
              fullWidth
              variant="standard"
              value={employees.address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
