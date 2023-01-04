import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  cont: {
    borderRadius: 15,
    border: "2px solid",
    margin: "auto",
    marginBottom: "1rem",
    width: "90%",
    padding: "10px",
    background: "white",
  },
  tablecss: {
    backgroundColor: " rgb(167, 217, 240)",
    border: "1px solid black",
    width: "80%",
  },
  tablecont: {
    // border: "2px solid",
    margin: "auto 8rem",
    marginTop: "0rem",
    marginBottom: "1rem",
    // width: "90%",
    padding: "10px",
  },

  tabletd: {
    border: "1px solid black",
  },
  // tablecss td: {
  //     border: 4px solid rgb(232, 237, 240);
  //     text-align: center;
  // }

  tablehead: {
    // background: "black",
    border: "1px solid black",
  },

  // .tablehead th {
  //     color: #ddd;
  // }
}));
