import * as React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";


const Navbar = () => {
  return (
    <div>
        <Nav>
          <NavLink to="/">
            <img
              src={require("../../assets/images/logo.png")}
              alt="logo Glotech"
              width={200}
              height={57}
            />
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to="/" activeStyle>
              Home
            </NavLink>
            <NavLink to="/services" activeStyle>
              Employees
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </Nav>
      
    </div>
  );
};

export default Navbar;
