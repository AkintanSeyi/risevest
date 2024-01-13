import React, { useState, useEffect } from "react";
import * as Style from "./style";
import * as Styling from "../Goals/style";
import AOS from "aos";
import "aos/dist/aos.css";

const Need = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <Style.Need>
      <Style.Need_FirstDiv>
        <Style.Need_FirstOneDiv
          style={{
            backgroundColor: "#FFF4F0",
          }}
        ></Style.Need_FirstOneDiv>
        <Style.Need_FirstTwoDiv
          style={{
            backgroundColor: "#F6E4F0",
          }}
        ></Style.Need_FirstTwoDiv>
      </Style.Need_FirstDiv>
      <Style.Need_Div>
        <Style.Need_Div_Header data-aos="fade-down">
          What comfort do you have?
        </Style.Need_Div_Header>
        <Style.Goals_Second_para data-aos="fade-up">
          We have a professional engagement through a trusteeship agreement with
          Meristem Trustees Limited, who oversees investments on behalf of users
          and members of Risevest (Victoria Island) Cooperative Multipurpose
          Society Ltd. All assets are also held in regulated third parties in
          the relevant jurisdictions.
        </Style.Goals_Second_para>
      </Style.Need_Div>
      <Style.Need_FirstDiv>
        <Style.Need_FirstOneDiv
          style={{
            backgroundColor: "#F6F2FF",
          }}
        ></Style.Need_FirstOneDiv>
        <Style.Need_FirstTwoDiv
          style={{
            backgroundColor: "#ECFEFE",
          }}
        ></Style.Need_FirstTwoDiv>
      </Style.Need_FirstDiv>
    </Style.Need>
  );
};

export default Need;
