import React, { useState } from "react";
import {
  Container,
  TextField,
  Grid,
  Button,
  TextareaAutosize,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Chip,
  Box,
  OutlinedInput,
  Typography,
  Table,
  TableContainer,
} from "@material-ui/core";
import useStyles from "./styles";

const Students = ({ student, setStudent }) => {
  const classes = useStyles();
  //   const [personName, setPersonName] = React.useState([]);
  //   const [student, setStudent] = useState([
  //     { roll: 1, name: "pratik", inTime: "12", outTime: "1" },
  //   ]);
  const [dataStudent, setDataStudent] = React.useState({
    name: "",
    roll: "",
    inTime: "",
    outTime: "",
  });

  const inTimeHandler = (e) => {
    setDataStudent({
      ...dataStudent,
      inTime: e.target.value,
    });
  };
  const outTimeHandler = (e) => {
    setDataStudent({
      ...dataStudent,
      outTime: e.target.value,
    });
  };
  const nameHandler = (e) => {
    setDataStudent({
      ...dataStudent,
      name: e.target.value,
    });
  };
  const rollHandler = (e) => {
    setDataStudent({
      ...dataStudent,
      roll: e.target.value,
    });
  };
  const clearStudentData = () => {
    setDataStudent({
      name: "",
      roll: "",
      inTime: "",
      outTime: "",
    });
  };
  const addStudent = () => {
    setStudent([...student, dataStudent]);
    console.log(student, "data loaction");
    clearStudentData();
    // studentShow();
  };

  let i = 1;
  const stockDataTable = () => {
    return student.map((data) => (
      <tr key={i}>
        <td className={classes.tabletd}>{i++}</td>
        <td className={classes.tabletd}>{data.name}</td>
        <td className={classes.tabletd}>{data.roll}</td>
        <td className={classes.tabletd}>{data.inTime}</td>
        <td className={classes.tabletd}>{data.outTime}</td>
      </tr>
    ));
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      //   alignItems="center"
      minHeight="80vh"
      className={classes.cont}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item spacing={2}>
          <TextField
            label="Name"
            name="Name"
            variant="outlined"
            required
            fullWidth
            value={dataStudent.name}
            onChange={nameHandler}
          />
          <Typography>In Time</Typography>
          <TextField
            // label="In Time"
            name="inTime"
            variant="outlined"
            type="datetime-local"
            required
            fullWidth
            value={dataStudent.inTime}
            onChange={inTimeHandler}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Roll"
            name="roll"
            variant="outlined"
            required
            fullWidth
            value={dataStudent.roll}
            onChange={rollHandler}
          />
          <Typography>Out Time</Typography>
          <TextField
            // label="Out Time"
            name="outTime"
            variant="outlined"
            type="datetime-local"
            required
            fullWidth
            value={dataStudent.outTime}
            onChange={outTimeHandler}
          />
        </Grid>
        <Grid item>
          <Button
            type="submit"
            halfWidth
            variant="contained"
            color="primary"
            onClick={addStudent}
          >
            Add Student
          </Button>
        </Grid>

        <TableContainer justifyContent="center" className={classes.tablecont}>
          <Table
            striped
            bordered
            hover
            size="sm"
            responsive="xl"
            className={classes.tablecss}
          >
            <thead className={classes.tablehead} key={"header"}>
              <th className={classes.tabletd}>S.No.</th>
              <th className={classes.tabletd}>Student Roll No.</th>
              <th className={classes.tabletd}>Student Name</th>
              <th className={classes.tabletd}>In Time</th>
              <th className={classes.tabletd}>Out Time</th>
            </thead>

            {!student.length ? <h3>No Data</h3> : stockDataTable()}
          </Table>
        </TableContainer>
      </Grid>
    </Box>
  );
};

export default Students;
