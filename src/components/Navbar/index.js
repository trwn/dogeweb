import React from "react";
import logo from "../../images/logo.png";
import { Bg, Logo } from "./NavbarElements";

function Navbar() {
  return (
    <Bg>
      <Logo src={logo} />
    </Bg>
  );
}

export default Navbar;
