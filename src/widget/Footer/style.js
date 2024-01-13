import { keyframes, styled } from "@mui/material";

export const Footer = styled("div")({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width : 49em)": {
    height: "fit-content",
    marginTop: "20px",
  },
});

export const Footer_Holder = styled("div")({
  width: "80%",
  height: "80%",
  display: "flex",

  padding: "15px",
  justifyContent: "space-between",
  // alignItems: "center",

  "@media (max-width : 49em)": {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  "@media (max-width : 29em)": {
    gridGap: "30px",
    width: "95%",
  },
});

export const Footer_LI = styled("li")({
  listStyle: "none",
  fontSize: "16px",
  marginBottom: "30px",
  justifyContent: "start",
  cursor: "pointer",
  color: "rgb(78, 74, 74)",
  alignItems: "start",
  display: "flex",
  transition: "all 1.5",
  "@media (max-width : 29em)": {
    fontSize: "14px",
  },
});

export const Footer_UlheaderDiv = styled("div")({
  width: "fit-content",
  height: "fit-content",
  position: "relative",
  marginBottom: "30px",
});

export const Footer_UlRiseheader = styled("h2")({
  fontSize: "35px",
  "@media (max-width : 29em)": {
    fontSize: "25px",
  },
});

export const Footer_Ulheader = styled("h4")({
  marginBottom: "37px",
  marginTop: "13px",
  "@media (max-width : 29em)": {
    marginBottom: "30px",
    marginTop: "9px",
  },
});
export const Footer_UlRiseDot = styled("div")({
  width: "5px",
  height: "5px",
  backgroundColor: "black",
  borderRadius: "50%",
  position: "absolute",
  top: "30%",
  right: "-8%",
  "@media (max-width : 29em)": {
    top: "30%",
    right: "-15%",
  },
});

export const Footer_Ul = styled("ul")({
  // marginRight: "30px",
});

export const Footer_LiSpan = styled("span")({
  width: "fit-content",
  height: "fit-content",
  fontSize: "15px",
  marginLeft: "10px",
  "@media (max-width : 29em)": {
    fontSize: "14px",
    marginLeft: "5px",
  },
});
