import React, { useState, useEffect } from "react";
import * as Style from "./style";
import * as Styling from "../CharacterOne/style";
import { BsArrowRight } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const CharacterTwo = ({ variables }) => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <Style.CharacterTwo>
      <Style.CharacterTwo_Holder>
        <Style.CharacterTwo_FirstHolder>
          <Style.CharacterTwo_FirstHolderHolder data-aos="fade-right">
            <Style.CharacterTwo_SecondHolderImg
              src={variables.image}
              alt="img"
            />
          </Style.CharacterTwo_FirstHolderHolder>
        </Style.CharacterTwo_FirstHolder>
        <Style.CharacterTwo_SecondHolder data-aos="fade-left">
          <Style.CharacterTwo_SecondHolderHolder>
            <Styling.CharacterOne_FirstText>
              {variables.header}
            </Styling.CharacterOne_FirstText>
            <Style.CharacterOne_FirstSSubText>
              {variables.subHeader}
            </Style.CharacterOne_FirstSSubText>
            <Styling.CharacterOne_FirstTextArrowDiv className="textDiv">
              <Styling.CharacterOne_FirstTextArrowText>
                Start investing now
              </Styling.CharacterOne_FirstTextArrowText>
              <Styling.CharacterOne_FirstTExtMainArrow className="textarrowdiv">
                <BsArrowRight />
              </Styling.CharacterOne_FirstTExtMainArrow>
            </Styling.CharacterOne_FirstTextArrowDiv>
          </Style.CharacterTwo_SecondHolderHolder>
        </Style.CharacterTwo_SecondHolder>
      </Style.CharacterTwo_Holder>
    </Style.CharacterTwo>
  );
};

export default CharacterTwo;
