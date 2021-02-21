import React from "react";

import logo from "./images/react48.png";

function Footer() {
  return (
    <div className="footer">
      © ALPER TV 2020 <br />
      Live API Data from{" "}
      <a href="" target="_blank">
        The Movie DB
      </a>
      <br />
      <br />
      Built with React <br />
      <a href="https://reactjs.org/" target="_blank">
        <img src={logo} />
      </a>
      <br />
      <a href="" target="_blank">
        Alper @DCI
      </a>{" "}
      Project
      <br />
      <br />
      <center>
        --------
        <br />
        <a href="#Nav">Back to Top</a>
      </center>
    </div>
  );
}

export default Footer;
