import React, { useState, useEffect } from "react";
import * as Style from "./style";
import { IoIosArrowRoundDown } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = ({ toggle, settoggle }) => {
  return (
    <Style.Header>
      <Style.Header_Holder>
        <Style.Header_Icon_Div>
          <Style.Header_Logo_Text>rise</Style.Header_Logo_Text>
          <Style.Header_LogoDot></Style.Header_LogoDot>
        </Style.Header_Icon_Div>
        <Style.Header_Navbar_Div>
          <Style.Header_Navbar_HomeDiv className="navbarhomebar">
            <Style.Header_Navbar_HomeText className="navText">
              Home
            </Style.Header_Navbar_HomeText>
            <Style.Header_Navbar_HomeDivDot className="navdot"></Style.Header_Navbar_HomeDivDot>
          </Style.Header_Navbar_HomeDiv>
          <Style.Header_Navbar_HomeDivProduct className="navBarproduct">
            <Style.Header_Icon_Text_Product className="navBarproducttext">
              Products
            </Style.Header_Icon_Text_Product>
            <IoIosArrowRoundDown />
          </Style.Header_Navbar_HomeDivProduct>
          <Style.Header_Icon_Text>Investment Club</Style.Header_Icon_Text>
          <Style.Header_Icon_Text>About Us</Style.Header_Icon_Text>
          <Style.Header_Icon_Text>FAQs</Style.Header_Icon_Text>
          <Style.Header_Icon_Text>Blog</Style.Header_Icon_Text>
          <Style.Header_Icon_Text>Sign In</Style.Header_Icon_Text>
          <Style.Header_SigninAndSignUpButton>
            sign up
          </Style.Header_SigninAndSignUpButton>
        </Style.Header_Navbar_Div>
        <Style.Header_ToggleDiv onClick={() => settoggle(!toggle)}>
          {toggle == false && (
            <>
              <Style.Header_ToggleFirstInnerDiv></Style.Header_ToggleFirstInnerDiv>
              <Style.Header_ToggleMiddleInnerDiv></Style.Header_ToggleMiddleInnerDiv>
              <Style.Header_TogglelastInnerDiv></Style.Header_TogglelastInnerDiv>
            </>
          )}
          {toggle == true && (
            <Style.Header_Navbar_CancelDiv>
              &#10006;
            </Style.Header_Navbar_CancelDiv>
          )}
        </Style.Header_ToggleDiv>
      </Style.Header_Holder>
    </Style.Header>
  );
};

export default Header;
