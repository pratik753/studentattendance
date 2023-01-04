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

const Available = ({ student }) => {
  const classes = useStyles();

  let i = 1;
  const timeCheck = (startTime, endTime) => {
    console.log(startTime, "startTime");
    console.log(endTime, "endTime");
    var date = new Date().toJSON();
    console.log(date, "currentDate");
    let h1 = startTime.split(":")[0];
    let h2 = endTime.split(":")[0];
    let m1 = startTime.split(":")[1];
    let m2 = endTime.split(":")[1];
    const d = new Date();
    let h = d.getHours();
    var m = d.getMinutes();
    console.log(h1, h2, m1, m2, h, m, "hh");
    let valid =
      (h1 < h || (h1 == h && m1 <= m)) && (h < h2 || (h == h2 && m <= m2));
    console.log(valid, "valid");
    return valid;
  };
  const dateCheck = (startDate, endDate) => {
    const date = new Date();

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (date > start && date < end) {
      console.log("✅ date is between the 2 dates");
      return true;
    } else {
      console.log("⛔️ date is not in the range");
      return false;
    }
  };
  const dateTime = (inTime, outTime) => {
    let dd = dateCheck(inTime.split("T")[0], outTime.split("T")[0]);

    let tt = timeCheck(inTime.split("T")[1], outTime.split("T")[1]);

    return dd && tt;
  };
  const stockDataTable = () => {
    let date = new Date().toJSON();
    console.log(date);
    // student.filter(())
    // let st = student;
    let today = date.split("T");
    console.log(today);
    var st = student.filter(function (data) {
      return dateTime(data.inTime, data.outTime);
    });

    return st.map((data) => (
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
      minHeight="80vh"
      className={classes.cont}
    >
      <Grid container spacing={2} justifyContent="center">
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

export default Available;
