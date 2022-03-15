import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import DateTimePicker from "react-datetime-picker";

export default ({ close, getEmployees, employees }) => {
  const [name, setName] = useState("");
  const [day_of_birth, setBirthday] = useState(new Date());
  const [address, setAddress] = useState("");
  const [data, setData] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { name, day_of_birth, address };
    axios
      .put(
        `https://training.morethanteam.tech/training/employees/${employees.id}`,
        data
      )
      .then((response) => {
        console.log(response);
        setData(response.data);
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

  //   const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

  React.useEffect(() => {
    setName(employees.name);
    setAddress(employees.address);
    setBirthday(new Date(employees.day_of_birth))
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
              type="text"
              fullWidth
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <DateTimePicker 
                onChange={setBirthday} 
                value={day_of_birth} 
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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};
