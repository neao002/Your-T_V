import React from "react";
//! Image
import Logo from "./images/tvlogo.png";
function NavBar() {
  return (
    <>
      <div id="Nav">
        <img src={Logo} alt="tv logo" />

        <div className="titleflex">
          <h1 className="box sitename"> Your Best Movies!</h1>
          <h3 className="box siteslogan">
            A guide to help you stay up to date with the latest on Nico's Tv!
            Check it out!
          </h3>
        </div>
      </div>
    </>
  );
}

export default NavBar;
