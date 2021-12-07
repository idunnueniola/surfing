import React from "react";
import { FaBars, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <header>
      <div className="head">
        <div>
          <img src={require("./images/default-logo.png").default} />
        </div>

        <div>
          <a href="">
            <FaBars size="2em" color="black" />
          </a>
          <a href="https://web.facebook.com/?_rdc=1&_rdr">
            <FaFacebookF size="2em" color="black" />
          </a>
          <a href="https://twitter.com/login?lang=en">
            <FaTwitter size="2em" color="black" />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram size="2em" color="black" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
