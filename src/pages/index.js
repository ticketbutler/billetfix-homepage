import React from "react";
import { navigate } from "@reach/router";

class Index extends React.Component {
  componentDidMount() {
    this.changeDirectory();
  }
  changeDirectory() {
    if (typeof window !== "undefined") {
      let userLang = window.navigator.language || window.navigator.userLanguage;
      if (userLang === "da-DK") {
        navigate("/da/");
      } else {
        navigate("/en/");
      }
    }
  }
  render() {
    return <div />;
  }
}
export default Index;
