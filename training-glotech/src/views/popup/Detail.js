import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

export default ({ close, getEmployees, employees }) => {
//   const baseURL =
//     "https://training.morethanteam.tech/training/employees/";

  const [name, setName] = useState("");
  const [day_of_birth, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  
  const [data, setData] = useState(null);
  
  React.useEffect(() => {
    const data = { name, day_of_birth, address };
    axios.get(`https://training.morethanteam.tech/training/employees/${employees.id}`).then((response) => {
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

            <p>{employees.name}</p>
            <TextField
              id="date"
              type="date"
              variant="standard"
              fullWidth
              style={{ paddingTop: "15px" }}
              value={employees.birthday}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="dense"
              id="address"
              label="Address"
              type="text"
              fullWidth
              variant="standard"
              value={employees.address}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
