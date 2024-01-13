import React from "react";
import CharacterOne from "./CharacterOne/CharacterOne";
import CharacterTwo from "./CharacterTwo/CharacterTwo";
import CharacterThree from "./CharacterThree/CharacterThree";

const Character = () => {
  const firstData = {
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/investment-profit-4902575-4081250.png",
    header: "Choose what's best for you",
    subHeader:
      "Unlike other platforms, Rise lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place.",
  };

  const secondHeader = {
    image:
      "https://static.vecteezy.com/system/resources/previews/012/486/347/original/business-money-investment-growth-up-concept-icon-or-3d-business-grow-up-icon-with-stock-coin-png.png",
    header: "We remember so you dont have to",
    subHeader:
      "Our Auto-invest feature makes it easy to stay consistent, even when you forget. Set a funding amount, frequency and payment method and Rise will automatically fund your investment, on schedule.",
  };

  return (
    <>
      <CharacterOne />
      <CharacterTwo variables={firstData} />
      <CharacterThree />
      <CharacterTwo variables={secondHeader} />
    </>
  );
};

export default Character;
