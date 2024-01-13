import React, { useState, useEffect } from "react";
import * as Style from "./style";
import * as Styling from "../Goals/style";
import * as UserStyling from "../User/style";
import { BsArrowRight } from "react-icons/bs";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeIntroPage = () => {
  const [animate, setanimate] = useState("animateFirstImageDiv");

  useEffect(() => {
    setTimeout(() => {
      setanimate("animateImageDiv");
    }, 2000);
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <Style.HomeIntroPage>
      <Style.HomeIntroPage_FirstPage>
        <Style.HomeIntroPage_FirstPageDiv data-aos="fade-right">
          <Style.HomeIntroPage_Header
            style={{
              color: "#0898a0",
            }}
          >
            Dollar investments that help you grow
          </Style.HomeIntroPage_Header>
          <Style.HomeIntroPage_para>
            We put your money in high quality assets that help you build wealth
            and achieve your financial goals.
          </Style.HomeIntroPage_para>
          <UserStyling.User_FirstButtonDiv>
            <UserStyling.User_FirstDownloadAppDiv>
              <FaApple />
              <UserStyling.User_FirstLineHeight></UserStyling.User_FirstLineHeight>
              <IoLogoGooglePlaystore />
              <UserStyling.User_DownloadText>
                Download App
              </UserStyling.User_DownloadText>
            </UserStyling.User_FirstDownloadAppDiv>
            <UserStyling.User_SigninButton className="signinbuton">
              Sign Up
              <UserStyling.User_ArrowDiv className="arrowDiv">
                <BsArrowRight />
              </UserStyling.User_ArrowDiv>
            </UserStyling.User_SigninButton>
          </UserStyling.User_FirstButtonDiv>
        </Style.HomeIntroPage_FirstPageDiv>
      </Style.HomeIntroPage_FirstPage>
      <Style.HomeIntroPage_SecondPage>
        <Style.HomeIntroPage_SecondPageDiv className={animate}>
          <Style.HomeIntroPage_SecondPageImg
            src="https://risevest.com/_next/static/media/rise-app-phone.c7dc0912.webp"
            alt="img"
          />
        </Style.HomeIntroPage_SecondPageDiv>
      </Style.HomeIntroPage_SecondPage>
    </Style.HomeIntroPage>
  );
};

export default HomeIntroPage;
