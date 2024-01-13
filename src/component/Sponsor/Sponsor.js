import React, { useState, useEffect } from "react";
import * as Style from "./style";
import AOS from "aos";
import "aos/dist/aos.css";

const Sponsor = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <Style.Sponsor>
      <Style.Sponsor_Holder>
        <Style.Sponsor_imgDiv data-aos="fade-right">
          <Style.Sponsor_Img
            src="https://risevest.com/_next/static/media/arm.8cab85c6.png"
            alt="img"
          />
        </Style.Sponsor_imgDiv>
        <Style.Sponsor_imgTextDiv data-aos="fade-up">
          <Style.Sponsor_Img
            src="https://risevest.com/_next/static/media/western-union.e354fcb4.png"
            alt="img"
          />
        </Style.Sponsor_imgTextDiv>
        <Style.Sponsor_imgTextDiv data-aos="fade-up">
          <Style.Sponsor_Img
            src="https://risevest.com/_next/static/media/techstars.07536835.png"
            alt="img"
          />
        </Style.Sponsor_imgTextDiv>
        <Style.Sponsor_imgDiv data-aos="fade-left">
          <Style.Sponsor_Img
            src="https://risevest.com/_next/static/media/ventures-platform.b4ebf517.png"
            alt="img"
          />
        </Style.Sponsor_imgDiv>
      </Style.Sponsor_Holder>
    </Style.Sponsor>
  );
};

export default Sponsor;
