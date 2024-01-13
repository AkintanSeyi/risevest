import { keyframes, styled } from "@mui/material";

export const Review = styled("div")({
  width: "100vw",
  height: "100vh",

  "@media (max-width : 49em)": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    height: "fit-content",
  },
  "@media (max-width : 39em)": {
    marginTop: "50px",
  },
});

export const Review_Main = styled("div")({
  width: "100%",
  height: "100%",

  display: "flex",
  justifyContent: "center",
  alignItems: "start",
  "@media (max-width : 49em)": {
    alignItems: "center",
  },
});

export const Review_MainDiv = styled("div")({
  width: "63.5%",
  marginTop: "70px",
  height: "62.5%",
  display: "flex",

  alignItems: "center",
  justifyContent: "space-between",
  "@media (max-width : 62.5em)": {
    width: "90%",
    height: "50%",
  },
  "@media (max-width : 49em)": {
    width: "95%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "55px",
  },
});

export const Investment_para = styled("p")({
  textTransform: "capitalize",
  width: "100%",
  textAlign: "center",
  fontSize: "18px",
  color: "rgb(78, 74, 74)",
  "@media (max-width : 49em)": {
    fontSize: "16px",
    width: "60%",
  },
  "@media (max-width : 39em)": {
    width: "85%",
  },
  "@media (max-width : 29em)": {
    fontSize: "14px",
  },
});

export const Investment_header = styled("h2")({
  textTransform: "capitalize",
  width: "100%",
  fontSize: "38px",
  textAlign: "center",
  marginBottom: "15px",
  "@media (max-width : 49em)": {
    fontSize: "33px",
  },
  "@media (max-width : 39em)": {
    fontSize: "30px",
  },
  "@media (max-width : 29em)": {
    fontSize: "22px",
  },
});

export const Review_MainIndividualDiv = styled("div")({
  width: "32%",
  height: "92%",
  boxShadow: "0px 16px 25px #b5e0e2",
  backgroundColor: "white",
  bordor: "1px solid lightgrey",
  borderRadius: "8px",
  padding: "15px",

  "@media (max-width : 49em)": {
    width: "90%",
    height: "225px",
    marginBottom: "15px",
    borderRadius: "3px",
  },
  "@media (max-width : 29em)": {
    height: "320px",
  },
});

export const Review_MainIndividualDivpara = styled("p")({
  width: "90%",
  height: "80%",
  lineHeight: "2",
  fontSize: "14px",
  "@media (max-width : 29em)": {
    width: "97%",
  },
});

export const Review_MainIndividualPicAnDNamepara = styled("h4")({});

export const Review_MainIndividualSkillspara = styled("p")({
  fontSize: "15px",
  marginTop: "5px",
});

export const Review_MainIndividualDivPicAnDNameDiv = styled("div")({
  width: "90%",
  height: "20%",
  marginTop: "0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
});

export const Review_MainIndividualDivPicDiv = styled("div")({
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  //  backgroundColor: "green",
  marginRight: "15px",
});

export const Review_MainIndividualTextDiv = styled("div")({
  width: "fit-content",
  height: "100%",
  display: "flex",
  alignItems: "start",
  justifyContent: "center",
  flexDirection: "column",
});
export const Review_MainIndividualDivPic = styled("img")({
  width: "100%",
  height: "100%",
  borderRadius: "50%",
});
