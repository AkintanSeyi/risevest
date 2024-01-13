import React, { useState, useEffect } from "react";
import * as Style from "./style";
import * as Styling from "../Investments/style";
import AOS from "aos";
import "aos/dist/aos.css";

const Review = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <Style.Review>
      <Style.Investment_header
        data-aos="fade-down"
        style={{
          color: "#0898a0",
        }}
      >
        From The People Who Use Rise
      </Style.Investment_header>
      <Style.Investment_para data-aos="fade-up">
        Our mission at Risevest is to empower more people just like you to
        achieve your personal financial goals.
      </Style.Investment_para>
      <Style.Review_Main>
        <Style.Review_MainDiv>
          <Style.Review_MainIndividualDiv data-aos="fade-right">
            <Style.Review_MainIndividualDivpara>
              Like everyone, I want to be protected from currency fluctuations
              and Rise helps me with that. The fixed income and real estate
              asset classes are my preferred things about Rise. I 💚 seeing how
              my returns perform on a daily basis. It demonstrates safety and
              also puts me at a lower risk of losing money!
            </Style.Review_MainIndividualDivpara>
            <Style.Review_MainIndividualDivPicAnDNameDiv>
              <Style.Review_MainIndividualDivPicDiv>
                <Style.Review_MainIndividualDivPic
                  src="https://risevest.com/_next/static/media/testimonial-one.53081735.png"
                  alt="img"
                />
              </Style.Review_MainIndividualDivPicDiv>
              <Style.Review_MainIndividualPicAnDNamepara>
                Babajide
              </Style.Review_MainIndividualPicAnDNamepara>
            </Style.Review_MainIndividualDivPicAnDNameDiv>
          </Style.Review_MainIndividualDiv>
          <Style.Review_MainIndividualDiv data-aos="fade-up">
            <Style.Review_MainIndividualDivpara>
              I chose Rise because of its leadership, wealth of knowledge and
              the people who support them. I invest with Rise in order to
              protect my savings and investment from being depleted by
              devaluation and inflation that’s at an all-time high in Nigeria.
            </Style.Review_MainIndividualDivpara>
            <Style.Review_MainIndividualDivPicAnDNameDiv>
              <Style.Review_MainIndividualDivPicDiv>
                <Style.Review_MainIndividualDivPic
                  src="https://risevest.com/_next/static/media/testimonial-two.72f1cdb5.png"
                  alt="img"
                />
              </Style.Review_MainIndividualDivPicDiv>
              <Style.Review_MainIndividualPicAnDNamepara>
                Jesse
              </Style.Review_MainIndividualPicAnDNamepara>
            </Style.Review_MainIndividualDivPicAnDNameDiv>
          </Style.Review_MainIndividualDiv>
          <Style.Review_MainIndividualDiv data-aos="fade-left">
            <Style.Review_MainIndividualDivpara>
              I don’t want to invest in separate stocks because I’m not a
              financial expert and I would rather trust my money in the hands of
              people like Rise who are skilled and knowledgeable.
            </Style.Review_MainIndividualDivpara>
            <Style.Review_MainIndividualDivPicAnDNameDiv>
              <Style.Review_MainIndividualDivPicDiv>
                <Style.Review_MainIndividualDivPic
                  src="https://risevest.com/_next/static/media/testimonial-three.70574415.png"
                  alt="img"
                />
              </Style.Review_MainIndividualDivPicDiv>
              <Style.Review_MainIndividualTextDiv>
                <Style.Review_MainIndividualPicAnDNamepara>
                  Lade
                </Style.Review_MainIndividualPicAnDNamepara>
                <Style.Review_MainIndividualSkillspara>
                  UX Researcher
                </Style.Review_MainIndividualSkillspara>
              </Style.Review_MainIndividualTextDiv>
            </Style.Review_MainIndividualDivPicAnDNameDiv>
          </Style.Review_MainIndividualDiv>
        </Style.Review_MainDiv>
      </Style.Review_Main>
    </Style.Review>
  );
};

export default Review;
