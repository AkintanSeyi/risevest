import React, { useState, useEffect } from "react";
import * as Style from "./style";
import { CgArrowTopRight } from "react-icons/cg";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  return (
    <Style.Footer>
      <Style.Footer_Holder>
        <Style.Footer_Ul>
          <Style.Footer_UlheaderDiv>
            <Style.Footer_UlRiseheader>rise</Style.Footer_UlRiseheader>
            <Style.Footer_UlRiseDot></Style.Footer_UlRiseDot>
          </Style.Footer_UlheaderDiv>
          <Style.Footer_LI>About Us</Style.Footer_LI>
          <Style.Footer_LI>Careers</Style.Footer_LI>
          <Style.Footer_LI>FAQs</Style.Footer_LI>
          <Style.Footer_LI>Contact Info</Style.Footer_LI>
        </Style.Footer_Ul>
        <Style.Footer_Ul>
          <Style.Footer_Ulheader>Explore</Style.Footer_Ulheader>

          <Style.Footer_LI className="footerLi">
            Investment Club
            <Style.Footer_LiSpan className="footerspan">
              {" "}
              <CgArrowTopRight />{" "}
            </Style.Footer_LiSpan>
          </Style.Footer_LI>
          <Style.Footer_LI className="footerLi">
            Blog
            <Style.Footer_LiSpan className="footerspan">
              {" "}
              <CgArrowTopRight />
            </Style.Footer_LiSpan>
          </Style.Footer_LI>
        </Style.Footer_Ul>
        <Style.Footer_Ul>
          <Style.Footer_Ulheader>Products</Style.Footer_Ulheader>

          <Style.Footer_LI>Rise App</Style.Footer_LI>
          <Style.Footer_LI>Developers</Style.Footer_LI>
        </Style.Footer_Ul>
        <Style.Footer_Ul>
          <Style.Footer_Ulheader>Legal</Style.Footer_Ulheader>

          <Style.Footer_LI>Privacy Policy</Style.Footer_LI>
          <Style.Footer_LI>Terms & Conditions</Style.Footer_LI>
          <Style.Footer_LI>Disclosure</Style.Footer_LI>
        </Style.Footer_Ul>
        <Style.Footer_Ul>
          <Style.Footer_Ulheader>Contact Us</Style.Footer_Ulheader>

          <Style.Footer_LI className="footerLi">
            +234 912 296 4215
            <Style.Footer_LiSpan className="footerspan">
              {" "}
              <CgArrowTopRight />{" "}
            </Style.Footer_LiSpan>
          </Style.Footer_LI>
          <Style.Footer_LI className="footerLi">
            +234 818 714 7405
            <Style.Footer_LiSpan className="footerspan">
              {" "}
              <CgArrowTopRight />
            </Style.Footer_LiSpan>
          </Style.Footer_LI>
          <Style.Footer_LI className="footerLi">
            hello@risevest.com
            <Style.Footer_LiSpan className="footerspan">
              {" "}
              <CgArrowTopRight />{" "}
            </Style.Footer_LiSpan>
          </Style.Footer_LI>
          <Style.Footer_LI className="footerLi">
            Newsletter
            <Style.Footer_LiSpan className="footerspan">
              {" "}
              <CgArrowTopRight />{" "}
            </Style.Footer_LiSpan>
          </Style.Footer_LI>
          <Style.Footer_LI className="footerLi">
            Instagram
            <Style.Footer_LiSpan className="footerspan">
              {" "}
              <CgArrowTopRight />{" "}
            </Style.Footer_LiSpan>
          </Style.Footer_LI>
          <Style.Footer_LI className="footerLi">
            Twitter
            <Style.Footer_LiSpan className="footerspan">
              {" "}
              <CgArrowTopRight />
            </Style.Footer_LiSpan>
          </Style.Footer_LI>
          <Style.Footer_LI className="footerLi">
            Facebook
            <Style.Footer_LiSpan className="footerspan">
              {" "}
              <CgArrowTopRight />{" "}
            </Style.Footer_LiSpan>
          </Style.Footer_LI>
          <Style.Footer_LI className="footerLi">
            Youtube
            <Style.Footer_LiSpan className="footerspan">
              {" "}
              <CgArrowTopRight />{" "}
            </Style.Footer_LiSpan>
          </Style.Footer_LI>
          <Style.Footer_LI className="footerLi">
            Linkedin
            <Style.Footer_LiSpan className="footerspan">
              {" "}
              <CgArrowTopRight />{" "}
            </Style.Footer_LiSpan>
          </Style.Footer_LI>
        </Style.Footer_Ul>
      </Style.Footer_Holder>
    </Style.Footer>
  );
};

export default Footer;
