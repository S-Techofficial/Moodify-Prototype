import React from "react";
import { Button, Grid } from "@material-ui/core";
import { NavigateNext } from "@material-ui/icons";
import bgImg from "../images/music-bg.svg";


// import GoogleSignIn from "./GoogleSignIn";

const bgStyle = {
  background: `url(${bgImg}) no-repeat`,
  backgroundPositionX: "50%",
  width: "100vw",
  height: "46vh"
};



const LoginPage = ({ continueToHome }) => {


  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
    >

      <div style={bgStyle} />

      <p
        style={{ padding: "10px", color: "#0e49b5" }}
      >
        Listen to unlimited songs without any ads for free only on Moodify Music
      </p>
      <h1 style={{ fontFamily: "'Pacifico', cursive" }}>Welcome!</h1>
      <Button variant="outlined" color="secondary" onClick={continueToHome}>
        Continue
        <NavigateNext />
      </Button>
    </Grid>
  );
};

export default LoginPage;
