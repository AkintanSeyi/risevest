import React, { useState, useEffect } from "react";
import * as Style from "./style";
import * as Styling from "../../widget/Header/style";
import AOS from "aos";
import "aos/dist/aos.css";

const Goals = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <Style.Goals>
      <Style.Goals_First>
        <Style.Goals_FirstDiv data-aos="fade-right">
          <Style.Goals_FirstImg
            src="https://risevest.com/_next/static/media/virtual-card.6e909793.png"
            alt="img"
          />
        </Style.Goals_FirstDiv>
      </Style.Goals_First>
      <Style.Goals_Second data-aos="fade-left">
        <Style.Goals_Second_Div>
          <Style.Goals_Second_Initials>
            The Rise App
          </Style.Goals_Second_Initials>
          <Style.Goals_Second_Header>
            Save for your{" "}
            <span style={{ color: "rgb(64, 157, 219)" }}>future</span>
          </Style.Goals_Second_Header>
          <Style.Goals_Second_para>
            With Rise, you achieve your financial goals faster. Save for school,
            your home, vacations, your children’s future and more.
          </Style.Goals_Second_para>
          <Styling.Header_SigninAndSignUpButton>
            sign up
          </Styling.Header_SigninAndSignUpButton>
        </Style.Goals_Second_Div>
      </Style.Goals_Second>
    </Style.Goals>
  );
};

export default Goals;
