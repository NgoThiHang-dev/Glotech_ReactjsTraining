import React, { useState } from "react";
import "../../assets/css/style.css";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import axios from "axios";
import { useContext } from "react";
import { ThemeContext } from "../../views/theme/ThemeContext";

import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import Content from "../popup/Content";
import Detail from "../popup/Detail";
import Update from "../popup/Update";

const baseURL = "https://training.morethanteam.tech/training/employees/";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleClickCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [employees, setEmployees] = React.useState([]);

  const [post, setPost] = React.useState(null);

  //get all

  const getEmployees = async () => {
    await axios.get(baseURL).then((response) => {
      setEmployees(response.data.result);
    });
  };

  React.useEffect(() => {
    getEmployees();
  }, []);

  if (!employees) return null;

  const handleView = () => {};

  function deletePost(id) {
    axios
      .delete(`https://training.morethanteam.tech/training/employees/${id}`)
      .then(() => {
        alert("Post deleted!");
      });
  }

  return (
    <Container
      maxWidth="xl"
      className={darkMode ? "about-details-dark" : "about-details"}
      sx={{ minHeight: 500 }}
    >
      <Grid container>
        <Grid item xs={10}>
          <h4>Table List Employees</h4>open
        </Grid>
        <Grid item xs={2}>
          <Popup
            modal
            trigger={
              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                style={{ float: "right" }}
              >
                Add new
              </Button>
            }
          >
            {(close) => <Content getEmployees={getEmployees} close={close} />}
          </Popup>
        </Grid>
      </Grid>
      <TableContainer component={Paper} sx={{ minHeight: 600 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Day of birth</TableCell>
              <TableCell align="left">Address</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {employees.map((employees) => (
              <TableRow key={employees.id}>
                <TableCell component="th" scope="row">
                  {employees.name}
                </TableCell>
                <TableCell align="center">{employees.day_of_birth}</TableCell>
                <TableCell align="left">{employees.address}</TableCell>
                <TableCell align="right">
                  <Popup
                    modal
                    trigger={
                      <Button
                        size="small"
                        onClick={handleView}
                        style={{
                          backgroundColor: "#d8f3dc",
                          marginRight: "5px",
                        }}
                      >
                        <PriorityHighIcon style={{ color: "#2d6a4f" }} />
                      </Button>
                    }
                  >
                    {(close) => (
                      <Detail
                        getEmployees={getEmployees}
                        close={close}
                        employees={employees}
                      />
                    )}
                  </Popup>
                  <Popup
                    modal
                    trigger={
                      <Button
                        size="small"
                        onClick={handleView}
                        style={{
                          backgroundColor: "#E2E3F3",
                          marginRight: "5px",
                        }}
                      >
                        <EditIcon style={{ color: "#333996" }} />
                      </Button>
                    }
                  >
                    {(close) => (
                      <Update
                        getEmployees={getEmployees}
                        close={close}
                        employees={employees}
                      />
                    )}
                  </Popup>

                  <Button
                    employees={employees}
                    size="small"
                    style={{ backgroundColor: "#FEE0E3" }}
                    onClick={handleClickOpen}
                    // onClick={() => handleDelete(employees.id)}
                  >
                    <DeleteOutlineIcon style={{ color: "#F83245" }} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Are you sure you want to delete?"}
              </DialogTitle>

              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={() => deletePost(employees.id)} autoFocus>
                  OK
                </Button>
              </DialogActions>
            </Dialog>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Home;
