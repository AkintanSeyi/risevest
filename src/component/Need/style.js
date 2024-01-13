import { keyframes, styled } from "@mui/material";

export const Need = styled("div")({
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width : 49em)": {
    height: "60vh",
    marginBottom: "20px",
    marginTop: "40px",
  },
});
export const Need_FirstDiv = styled("div")({
  width: "33%",
  height: "100%",
  "@media (max-width : 62.5em)": {
    width: "15%",
  },
  "@media (max-width : 49em)": {
    width: "20%",
  },
});

export const Need_FirstOneDiv = styled("div")({
  width: "100%",
  height: "50%",
  filter: "blur(40px)",
});

export const Need_FirstTwoDiv = styled("div")({
  width: "100%",
  height: "50%",
  filter: "blur(40px)",
});

export const Need_Div = styled("div")({
  width: "33%",

  height: "100%",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  "@media (max-width : 62.5em)": {
    width: "70%",
  },
  "@media (max-width : 49em)": {
    height: "60%",
  },
  "@media (max-width : 39em)": {
    width: "85%",
  },
  "@media (max-width : 29em)": {
    width: "90%",
  },
});

export const Goals_Second_para = styled("p")({
  fontSize: "16px",
  color: "rgb(78, 74, 74)",
  marginBottom: "15px",
  lineHeight: "1.4",
  "@media (max-width : 49em)": {
    fontSize: "15px",
  },
  "@media (max-width : 29em)": {
    fontSize: "14px",
  },
});

export const Need_Div_Header = styled("h2")({
  fontSize: "35px",
  marginBottom: "10px",
  "@media (max-width : 49em)": {
    fontSize: "33px",
  },
  "@media (max-width : 39em)": {
    fontSize: "30px",
  },
  "@media (max-width : 29em)": {
    fontSize: "25px",
  },
});

export const Need_Div_para = styled("h2")({
  fontSize: "35px",
});
