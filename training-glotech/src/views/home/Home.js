import * as React from "react";
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

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [employees, setEmployees] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((response) => {
        setEmployees(response.data);
      });
  }, []);

  if (!employees) return null;

  return (
    <Container
      maxWidth="xl"
      className={darkMode ? "about-details-dark" : "about-details"} sx={{ minHeight: 500}}
    >
      <Grid container>
        <Grid item xs={10}>
          <h4>Table List Employees</h4>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            style={{ float: "right" }}
            onClick={handleClickOpen}
          >
            Add new
          </Button>
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
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Day of birth</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          
          {/* {employees.map(employees => (

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">{employees.id}</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">
                <Button
                  size="small"
                  style={{ backgroundColor:"#d8f3dc", marginRight:"5px" }}
                >
                  <PriorityHighIcon style={{ color:"#2d6a4f" }}/>
                </Button>
                <Button
                  size="small"
                  style={{ backgroundColor:"#E2E3F3", marginRight:"5px" }}
                >
                  <EditIcon style={{ color:"#333996" }} />
                </Button>
                <Button
                  size="small"
                  style={{ backgroundColor:"#FEE0E3" }}
                >
                  <DeleteOutlineIcon style={{ color:"#F83245" }} />
                </Button>
              </TableCell>
            </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>
      
    </Container>
  );
};

export default Home;
