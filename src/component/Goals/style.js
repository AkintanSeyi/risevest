import { keyframes, styled } from "@mui/material";

export const Goals = styled("div")({
  width: "100vw",
  height: "700px",
  display: "flex",

  "@media (max-width : 49em)": {
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
export const Goals_First = styled("div")({
  width: "50%",
  height: "100%",
  "@media (max-width : 49em)": {
    width: "100%",
    height: "50%",
    marginBottom: "40px",
  },
});

export const Goals_FirstDiv = styled("div")({
  width: "100%",
  display: "flex",
  height: "100%",
  // alignItems: "center",
  justifyContent: "end",

  paddingLeft: "70px",
  "@media (max-width : 49em)": {
    paddingLeft: "0px",
    justifyContent: "center",
  },
});

export const Goals_FirstImg = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  "@media (max-width : 39em)": {
    width: "90%",
  },
});

export const Goals_Second = styled("div")({
  width: "50%",
  height: "100%",

  "@media (max-width : 49em)": {
    width: "100%",
    height: "50%",
    textAlign: "center",
  },
});

export const Goals_Second_Div = styled("div")({
  width: "50%",
  height: "100%",
  // alignItems: "center",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",

  "@media (max-width : 62.5em)": {
    width: "80%",
  },
  "@media (max-width : 49em)": {
    alignItems: "center",
    width: "100%",
  },
});

export const Goals_Second_Initials = styled("h5")({
  fontSize: "16px",
  marginBottom: "15px",
  color: "rgb(78, 74, 74)",
  "@media (max-width : 29em)": {
    fontSize: "15px",
  },
});

export const Goals_Second_Header = styled("h3")({
  fontSize: "34px",
  marginBottom: "15px",
  color: "rgb(78, 74, 74)",
  "@media (max-width : 62.5em)": {
    fontSize: "30px",
  },
  "@media (max-width : 29em)": {
    fontSize: "25px",
  },
});

export const Goals_Second_para = styled("p")({
  fontSize: "16px",
  color: "rgb(78, 74, 74)",
  marginBottom: "15px",
  lineHeight: "1.4",
  "@media (max-width : 49em)": {
    width: "60%",
    fontSize: "16px",
  },
  "@media (max-width : 39em)": {
    width: "75%",
  },
  "@media (max-width : 29em)": {
    width: "85%",
  },
});
