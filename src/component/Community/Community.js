import React, { useState, useEffect } from "react";
import * as Style from "./style";
import * as Styling from "../Goals/style";
import AOS from "aos";
import "aos/dist/aos.css";

const Community = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <Style.Community>
      <Style.Community_FirstSection>
        <Style.Community_FirstSectionDiv data-aos="fade-right">
          <Style.Goals_Second_Header
            style={{
              color: "black",
            }}
          >
            Join The Rise Community
          </Style.Goals_Second_Header>
          <Style.Goals_Second_para>
            If you want to go far, go together. Our Telegram community surrounds
            you with others who can help you along your financial journey with
            tips, support, advice and learning. It's completely free and open to
            new and seasoned investors.
          </Style.Goals_Second_para>
          <Style.Community_Button>join our community</Style.Community_Button>
        </Style.Community_FirstSectionDiv>
      </Style.Community_FirstSection>
      <Style.Community_SecondSection data-aos="fade-left">
        <Style.Community_FirstSectionDivImg
          src="https://risevest.com/_next/static/media/rise-community.bac1270e.webp"
          alt="img"
        />
      </Style.Community_SecondSection>
    </Style.Community>
  );
};

export default Community;
