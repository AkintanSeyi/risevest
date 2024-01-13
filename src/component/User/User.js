import React, { useState, useEffect } from "react";
import * as Style from "./style";
import * as Styling from "../Goals/style";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const User = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <Style.User>
      <Style.User_Holder>
        <Style.User_First>
          <Style.User_FirstDiv data-aos="fade-right">
            <Style.User_Initials
              style={{
                color: "#0898a0",
              }}
            >
              Download The Rise App
            </Style.User_Initials>
            <Style.Goals_Second_Header
              style={{
                color: "rgb(58, 56, 56)",
              }}
            >
              Join our 300,000+ users investing and setting long term goals!
            </Style.Goals_Second_Header>
            <Style.Goals_Second_para>
              Dollar investments that help you grow
            </Style.Goals_Second_para>
            <Style.User_FirstButtonDiv>
              <Style.User_FirstDownloadAppDiv>
                <FaApple />
                <Style.User_FirstLineHeight></Style.User_FirstLineHeight>
                <IoLogoGooglePlaystore />
                <Style.User_DownloadText>Download App</Style.User_DownloadText>
              </Style.User_FirstDownloadAppDiv>
              <Style.User_SigninButton className="signinbuton">
                Sign Up{" "}
                <Style.User_ArrowDiv className="arrowDiv">
                  <BsArrowRight />{" "}
                </Style.User_ArrowDiv>
              </Style.User_SigninButton>
            </Style.User_FirstButtonDiv>
          </Style.User_FirstDiv>
        </Style.User_First>
        <Style.User_Second data-aos="fade-up">
          <Style.User_SecondImg
            src="https://risevest.com/_next/static/media/rise-app-phone.c7dc0912.webp"
            alt="img"
          />
        </Style.User_Second>
      </Style.User_Holder>
    </Style.User>
  );
};

export default User;
