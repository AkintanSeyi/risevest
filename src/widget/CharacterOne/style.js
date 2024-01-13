import { keyframes, styled } from "@mui/material";

export const CharacterOne = styled("div")({
  width: "100vw",
  height: "90vh",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "@media (max-width : 49em)": {
    height: "fit-content",
  },
});

export const CharacterOne_Holder = styled("div")({
  width: "80%",
  height: "75%",
  display: "flex",
  alignItems: "center",

  "@media (max-width : 49em)": {
    width: "95%",

    display: "grid",
    gridTemplateColumns: "1fr",
    padding: "20px",
    justifyItems: "center",
  },

  // justifyContent: "center",
});

export const CharacterOne_FirstHolder = styled("div")({
  width: "50%",
  height: "100%",
  display: "flex",
  alignItems: "center",

  justifyContent: "center",
  "@media (max-width : 49em)": {
    width: "100%",
    height: "50%",
  },
});

export const CharacterOne_FirstHolderDiv = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  // alignItems: "center",

  justifyContent: "center",
  flexDirection: "column",
  "@media (max-width : 49em)": {
    width: "75%",
    height: "100%",
  },
  "@media (max-width : 39em)": {
    width: "90%",
  },
  "@media (max-width : 29em)": {
    width: "95%",
  },
});

export const CharacterOne_SecondHolder = styled("div")({
  width: "50%",
  height: "100%",
  display: "flex",
  alignItems: "center",

  justifyContent: "center",
  "@media (max-width : 49em)": {
    width: "100%",
    height: "fit-content",
    gridRow: "1/2",
    marginBottom: "15px",
  },
});
export const CharacterOne_FirstTextArrowDiv = styled("div")({
  width: "fit-content",
  height: "50px",
  // position: "relative",
  color: "#0898a0",
  display: "flex",
  //alignItems: "center",
  //justifyContent: "center",
  cursor: "pointer",
  marginTop: "15px",
  "@media (max-width : 49em)": {
    textAlign: "center",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const CharacterOne_FirstTextArrowText = styled("h5")({
  fontSize: "17px",

  "@media (max-width : 49em)": {
    textAlign: "center",
  },
});

export const CharacterOne_FirstTExtMainArrow = styled("div")({
  width: "10px",
  height: "10px",
  marginTop: "2px",
  transition: "all .3s",
});

export const CharacterOne_SecondHolderImg = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const CharacterOne_SecondHolderImgDiv = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width : 49em)": {
    width: "75%",
    height: "400px",
  },
  "@media (max-width : 39em)": {
    width: "100%",
  },
});

export const CharacterOne_FirstText = styled("h2")({
  fontSize: "30px",
  marginBottom: "10px",
  "@media (max-width : 49em)": {
    textAlign: "center",
  },
  "@media (max-width : 29em)": {
    fontSize: "25px",
  },
});

export const CharacterOne_FirstSSubText = styled("p")({
  fontSize: "15px",
  width: "55%",
  color: "rgb(78, 74, 74)",
  "@media (max-width : 49em)": {
    textAlign: "center",
    width: "100%",
  },
  "@media (max-width : 29em)": {
    fontSize: "14px",
  },
});
