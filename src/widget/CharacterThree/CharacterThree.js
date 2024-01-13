import React, { useState, useEffect } from "react";
import * as Style from "../CharacterOne/style";
import * as Styling from "./style";
import { BsArrowRight } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
const CharacterThree = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <Style.CharacterOne>
      <Style.CharacterOne_Holder>
        <Style.CharacterOne_FirstHolder>
          <Style.CharacterOne_FirstHolderDiv data-aos="fade-right">
            <Style.CharacterOne_FirstText>
              Set goals and reach them
            </Style.CharacterOne_FirstText>
            <Styling.CharacterOne_FirstSSubText>
              You can invest towards a goal on Rise--retirement, higher
              education, save for your home or travel budgets. Or create a goal
              of your own and invest periodically to achieve them.
            </Styling.CharacterOne_FirstSSubText>
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
              src="https://media.istockphoto.com/id/1354201038/vector/money-or-business-or-salary-concept-illustration-with-cartoon-3d-rendered-hand-holding.jpg?s=612x612&w=0&k=20&c=NyNIXtizXiJ2BstPd57pk8DRl7hgMpQfXf4gjgQdP28="
              alt="img"
            />
          </Style.CharacterOne_SecondHolderImgDiv>
        </Style.CharacterOne_SecondHolder>
      </Style.CharacterOne_Holder>
    </Style.CharacterOne>
  );
};

export default CharacterThree;
