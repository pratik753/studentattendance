import React from "react";
import { Container, Grow, Grid } from "@material-ui/core";
// import Posts from "../Posts/Posts";
// import Form from "../Form/Form";
import { useEffect, useState } from "react";
import Students from "../students/Students";
import Available from "../students/Available";
const Home = ({ nav }) => {
  // const [loaclState, setLocalState] = useState(false);
  const [student, setStudent] = useState([
    {
      roll: 1,
      name: "pratik",
      inTime: "2022-01-04T00:03",
      outTime: "2023-02-04T23:59",
    },
    {
      roll: 2,
      name: "sonu",
      inTime: "2022-01-01T00:03",
      outTime: "2023-02-09T23:59",
    },
    {
      roll: 3,
      name: "nikhil",
      inTime: "2023-01-01T02:03",
      outTime: "2023-01-03T23:59",
    },
  ]);
  // let local = localStorage?.getItem("profile");
  console.log(nav, "nav");

  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          {nav == 0 && <Students student={student} setStudent={setStudent} />}
          {nav == 1 && <Available student={student} />}
          {/* <Grid item xs={12} sm={7}>
          </Grid> */}
        </Grid>
      </Container>
    </Grow>
  );
};
export default Home;
