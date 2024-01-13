import React, { useState, useEffect } from "react";
import * as Style from "./style";
import * as Styling from "../../widget/CharacterOne/style";
import { BsArrowRight } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Investment = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <Style.Investment>
      <Style.Investment_header data-aos="fade-down">
        Asset Classes
      </Style.Investment_header>
      <Style.Investment_para data-aos="fade-up">
        It’s your money, choose where you invest it
      </Style.Investment_para>
      <Style.Investment_MainDiv>
        <Style.Investment_MainIndivisualDiv
          data-aos="fade-right"
          style={{ backgroundColor: "#FFF4F0" }}
        >
          <Style.Investment_MainIndivisualDivInnerDiv>
            <Style.Investment_MainIndivisualIconDiv>
              <Style.Investment_MainIndivisualIcon
                src="https://risevest.com/_next/static/media/stocks-icon.dee030b1.webp"
                alt="img"
              />
            </Style.Investment_MainIndivisualIconDiv>
            <Style.Investment_MainIndivisualHeader>
              Stock
            </Style.Investment_MainIndivisualHeader>
            <Style.Investment_MainIndivisualpara>
              We help you invest and manage your money by investing in our
              portfolio of 30 high-growth stocks across the US market with our
              equity portfolio of power stocks.
            </Style.Investment_MainIndivisualpara>
            <Style.Investment_MainIndivisualRiskPara>
              Risk Level :{" "}
              <span
                style={{
                  color: "black",
                }}
              >
                High
              </span>
            </Style.Investment_MainIndivisualRiskPara>
            <Style.Investment_AnimationDiv className="animationDiv">
              <Style.Investment_AnimationDivTExt>
                Learn how Stocks works
              </Style.Investment_AnimationDivTExt>
              <Style.Investment_AnimationDivArrowDiv className="animationarrow">
                <BsArrowRight />
              </Style.Investment_AnimationDivArrowDiv>
            </Style.Investment_AnimationDiv>
          </Style.Investment_MainIndivisualDivInnerDiv>
        </Style.Investment_MainIndivisualDiv>
        <Style.Investment_MainIndivisualDiv
          data-aos="fade-up"
          style={{
            backgroundColor: "#F6F2FF",
          }}
        >
          <Style.Investment_MainIndivisualDivInnerDiv>
            <Style.Investment_MainIndivisualIconDiv>
              <Style.Investment_MainIndivisualIcon
                src="https://risevest.com/_next/static/media/real-estate-icon.382d8df1.webp"
                alt="img"
              />
            </Style.Investment_MainIndivisualIconDiv>
            <Style.Investment_MainIndivisualHeader>
              Real Estate
            </Style.Investment_MainIndivisualHeader>
            <Style.Investment_MainIndivisualpara>
              Our Real Estate plan is the sweet middle. Best for those who want
              a balance of good returns and medium risk. This plan invests in
              rented buildings in the US.
            </Style.Investment_MainIndivisualpara>
            <Style.Investment_MainIndivisualRiskTopPara>
              Historical Returns :{" "}
              <span
                style={{
                  color: "black",
                }}
              >
                15% Per Annum
              </span>
            </Style.Investment_MainIndivisualRiskTopPara>
            <Style.Investment_MainIndivisualRiskPara>
              Risk Level :{" "}
              <span
                style={{
                  color: "black",
                }}
              >
                Medium
              </span>
            </Style.Investment_MainIndivisualRiskPara>
            <Style.Investment_AnimationDiv className="animationDiv">
              <Style.Investment_AnimationDivTExt>
                Learn how Stocks works
              </Style.Investment_AnimationDivTExt>
              <Style.Investment_AnimationDivArrowDiv className="animationarrow">
                <BsArrowRight />
              </Style.Investment_AnimationDivArrowDiv>{" "}
            </Style.Investment_AnimationDiv>
          </Style.Investment_MainIndivisualDivInnerDiv>
        </Style.Investment_MainIndivisualDiv>
        <Style.Investment_MainIndivisualDiv
          data-aos="fade-left"
          style={{
            backgroundColor: "#DBFFF8",
          }}
        >
          <Style.Investment_MainIndivisualDivInnerDiv>
            <Style.Investment_MainIndivisualIconDiv>
              <Style.Investment_MainIndivisualIcon
                src="https://risevest.com/_next/static/media/fixed-income-icon.14b9f14d.webp"
                alt="img"
              />
            </Style.Investment_MainIndivisualIconDiv>
            <Style.Investment_MainIndivisualHeader>
              Fixed Income
            </Style.Investment_MainIndivisualHeader>
            <Style.Investment_MainIndivisualpara>
              A low-risk asset perfect for anyone who wants to protect their
              money in a secure, appreciating currency, i.e. the dollar. For
              people who want to protect their hard-earned money from inflation
              while earning steady returns.
            </Style.Investment_MainIndivisualpara>
            <Style.Investment_MainIndivisualRiskTopPara>
              Historical Returns :{" "}
              <span
                style={{
                  color: "black",
                }}
              >
                15% Per Annum
              </span>
            </Style.Investment_MainIndivisualRiskTopPara>
            <Style.Investment_MainIndivisualRiskPara>
              Risk Level :{" "}
              <span
                style={{
                  color: "black",
                }}
              >
                Medium
              </span>
            </Style.Investment_MainIndivisualRiskPara>
            <Style.Investment_AnimationDiv className="animationDiv">
              <Style.Investment_AnimationDivTExt>
                Learn how Stocks works
              </Style.Investment_AnimationDivTExt>
              <Style.Investment_AnimationDivArrowDiv className="animationarrow">
                <BsArrowRight />
              </Style.Investment_AnimationDivArrowDiv>
            </Style.Investment_AnimationDiv>
          </Style.Investment_MainIndivisualDivInnerDiv>
        </Style.Investment_MainIndivisualDiv>
      </Style.Investment_MainDiv>
    </Style.Investment>
  );
};

export default Investment;
