import React, { useState, useEffect } from "react";
import * as Style from "./style";
import AOS from "aos";
import "aos/dist/aos.css";

const NavBar = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <Style.NavBar>
      <Style.NavBar_Holder>
        <Style.NavBar_Holder_Text>Why rise</Style.NavBar_Holder_Text>
        <Style.NavBar_Holder_Text>Blog</Style.NavBar_Holder_Text>
        <Style.NavBar_Holder_Text>rise for business</Style.NavBar_Holder_Text>
        <Style.NavBar_Holder_ButtonDiv>
          <Style.NavBar_Holder_Button>log in</Style.NavBar_Holder_Button>
          <Style.NavBar_Holder_Button
            style={{
              color: "white",
              backgroundColor: "#0898a0",
            }}
          >
            get started
          </Style.NavBar_Holder_Button>
        </Style.NavBar_Holder_ButtonDiv>
      </Style.NavBar_Holder>
    </Style.NavBar>
  );
};

export default NavBar;
