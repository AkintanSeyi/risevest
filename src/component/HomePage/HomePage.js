import React, { useState, useEffect } from "react";
import Header from "../../widget/Header/Header";
import Sponsor from "../Sponsor/Sponsor";
import Character from "../../widget/Character";
import Investment from "../Investments/Investment";
import Goals from "../Goals/Goals";
import Need from "../Need/Need";
import Review from "../Review/Review";
import Community from "../Community/Community";
import User from "../User/User";
import Footer from "../../widget/Footer/Footer";
import HomeIntroPage from "../HomeIntroPage/HomeIntroPage";
import NavBar from "../NavBar/NavBar";

const HomePage = ({ toggle, settoggle }) => {
  //  const [toggle, settoggle] = useState(false);
  return (
    <>
      {toggle == true && <NavBar />}
      <HomeIntroPage />
      <Sponsor />
      <Character />
      <Investment />
      <Goals />
      <Need />
      <Review />
      <Community />
      <User />
      <Footer />
    </>
  );
};

export default HomePage;
