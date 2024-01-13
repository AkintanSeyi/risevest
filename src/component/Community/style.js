import { keyframes, styled } from "@mui/material";

export const Community = styled("div")({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "@media (max-width : 62.5em)": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "fit-content",
  },
  "@media (max-width : 49em)": {
    marginTop: "50px",
    marginBottom: "30px",
  },
});

export const Community_FirstSection = styled("div")({
  width: "50%",
  height: "80%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "@media (max-width : 49em)": {
    width: "100%",
    height: "50%",
    marginBottom: "15px",
    textAlign: "center",
    flexDirection: "column",
  },
});
export const Goals_Second_para = styled("p")({
  fontSize: "16px",
  color: "rgb(78, 74, 74)",
  marginBottom: "15px",
  lineHeight: "1.4",

  "@media (max-width : 49em)": {
    fontSize: "15px",
    textAlign: "center",
    width: "90%",
  },
  "@media (max-width : 29em)": {
    fontSize: "14px",
    width: "95%",
  },
});
export const Community_FirstSectionDiv = styled("div")({
  width: "70%",
  height: "50%",
  marginLeft: "60px",

  "@media (max-width : 62.5em)": {
    width: "95%",
    height: "50%",
  },
  "@media (max-width : 29em)": {
    marginLeft: "0px",
  },
});

export const Community_FirstSectionDivImg = styled("img")({
  width: "68%",
  objectFit: "contain",
  height: "70%",
});

export const Community_SecondSection = styled("div")({
  width: "50%",
  height: "100%",
  display: "flex",
  paddingLeft: "10px",
  justifyContent: "start",
  alignItems: "center",
  "@media (max-width : 49em)": {
    width: "100%",
    height: "50%",
    marginBottom: "15px",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const Goals_Second_Header = styled("h3")({
  fontSize: "34px",
  marginBottom: "15px",
  color: "rgb(78, 74, 74)",
  "@media (max-width : 62.5em)": {
    fontSize: "30px",
    textAlign: "center",
  },
  "@media (max-width : 29em)": {
    fontSize: "25px",
  },
});

export const Community_Button = styled("button")({
  width: "fit-content",
  borderRadius: "4px",
  outline: "none",
  border: "none",
  textTransform: "capitalize",
  fontSize: "16px",
  fontWeight: "bold",
  height: "60px",
  padding: "1.5px 30px 1.5px 30px",
  backgroundColor: "#A0DDE2",
  color: "black",
  cursor: "pointer",
  transition: "all .5s",
  "&:hover": {
    transform: "translateY(-3px)",
  },
  "@media (max-width : 29em)": {
    fontSize: "15px",
    padding: "0.5px 15px 0.5px 15px",
    height: "50px",
  },
});
