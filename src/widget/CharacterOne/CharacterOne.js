import React, { useState, useEffect } from "react";
import * as Style from "./style";
import { BsArrowRight } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
const CharacterOne = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <Style.CharacterOne>
      <Style.CharacterOne_Holder>
        <Style.CharacterOne_FirstHolder>
          <Style.CharacterOne_FirstHolderDiv data-aos="fade-right">
            <Style.CharacterOne_FirstText>
              Invest your money in dollars
            </Style.CharacterOne_FirstText>
            <Style.CharacterOne_FirstSSubText>
              By holding your investments in a stable currency, your money grows
              more over time and retains its value better.
            </Style.CharacterOne_FirstSSubText>
            <Style.CharacterOne_FirstTextArrowDiv className="textDiv">
              <Style.CharacterOne_FirstTextArrowText>
                Start investing now
              </Style.CharacterOne_FirstTextArrowText>
              <Style.CharacterOne_FirstTExtMainArrow className="textarrowdiv">
                <BsArrowRight />
              </Style.CharacterOne_FirstTExtMainArrow>
            </Style.CharacterOne_FirstTextArrowDiv>
          </Style.CharacterOne_FirstHolderDiv>
        </Style.CharacterOne_FirstHolder>
        <Style.CharacterOne_SecondHolder data-aos="fade-left">
          <Style.CharacterOne_SecondHolderImgDiv>
            <Style.CharacterOne_SecondHolderImg
              src="https://www.shutterstock.com/image-vector/3d-stack-gold-coins-icon-600nw-2184032189.jpg"
              alt="img"
            />
          </Style.CharacterOne_SecondHolderImgDiv>
        </Style.CharacterOne_SecondHolder>
      </Style.CharacterOne_Holder>
    </Style.CharacterOne>
  );
};

export default CharacterOne;
