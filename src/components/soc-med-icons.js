import React from "react";
import FbLogo from "../assets/img/facebook.png";
import TwitterLogo from "../assets/img/twitter.png";
import GoogleCalLogo from "../assets/img/google.png";

const styles = {
  logo: {
    maxHeight: "30px",
    margin: "20px"
  }
};
const Logos = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
      }}
    >
      <img style={styles.logo} alt="fbLogo" src={FbLogo} />
      <img style={styles.logo} alt="twitterLogo" src={TwitterLogo} />
      <img style={styles.logo} alt="googleCallLogo" src={GoogleCalLogo} />
    </div>
  );
};
export default Logos;
