import { keyframes, styled } from "@mui/material";

export const Investment = styled("div")({
  width: "100vw",
  height: "750px",
  padding: "0px 25px 10px 25px",
  "@media (max-width : 49em)": {
    marginTop: "20px",
    height: "fit-content",
  },
});

export const Investment_header = styled("h2")({
  textTransform: "capitalize",
  width: "100%",
  fontSize: "38px",
  textAlign: "center",
  marginBottom: "15px",
  "@media (max-width : 49em)": {
    fontSize: "34px",
  },
  "@media (max-width : 29em)": {
    fontSize: "30px",
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
  },
  "@media (max-width : 29em)": {
    fontSize: "14px",
  },
});

export const Investment_MainDiv = styled("div")({
  width: "100%",
  height: "100%",
  padding: "0px 120px 10px 120px",

  marginTop: "50px",
  display: "flex",
  justifyContent: "space-between",

  "@media (max-width : 62.5em)": {
    padding: "0px 10px 10px 10px",
  },
  "@media (max-width : 49em)": {
    display: "block",
  },
});

export const Investment_MainIndivisualDiv = styled("div")({
  width: "31%",
  height: "75%",
  borderRadius: "10px",
  border: "1px solid rgb(236, 231, 231)",
  display: "flex",
  boxShadow: "0px 1px 3px rgb(236, 231, 231)",
  //justifyContent: "space-between",
  alignItems: "end",
  "@media (max-width : 49em)": {
    width: "100%",
    height: "425px",
    marginBottom: "35px",
  },
  "@media (max-width : 39em)": {
    height: "400px",
  },
});

export const Investment_MainIndivisualIconDiv = styled("div")({
  width: "110px",
  height: "110px",
  borderRadius: "50%",

  border: "15px solid white",
  position: "absolute",
  top: "-13%",
});
export const Investment_MainIndivisualIcon = styled("img")({
  width: "100%",
  height: "100%",
  borderRadius: "50%",
});

export const Investment_MainIndivisualHeader = styled("h3")({
  textTransform: "capitalize",
  position: "absolute",
  top: "20%",
  fontSize: "30px",
  textAlign: "center",
  "@media (max-width : 29em)": {
    fontSize: "25px",
  },
});

export const Investment_MainIndivisualpara = styled("p")({
  textTransform: "capitalize",
  width: "85%",
  textAlign: "center",
  fontSize: "15px",
  color: "rgb(78, 74, 74)",
  position: "absolute",
  top: "35%",
  "@media (max-width : 39em)": {
    width: "95%",
  },
  "@media (max-width : 29em)": {
    fontSize: "14px",
  },
});

export const Investment_MainIndivisualRiskTopPara = styled("p")({
  textTransform: "capitalize",
  width: "85%",
  textAlign: "center",
  fontSize: "16px",
  color: "grey",
  position: "absolute",
  top: "70%",
});
export const Investment_MainIndivisualRiskPara = styled("p")({
  textTransform: "capitalize",
  width: "85%",
  textAlign: "center",
  fontSize: "16px",
  color: "grey",
  position: "absolute",
  top: "77%",
  "@media (max-width : 29em)": {
    fontSize: "14px",
  },
});

export const Investment_MainIndivisualDivInnerDiv = styled("div")({
  width: "100%",
  height: "73%",
  borderRadius: "8px",
  backgroundColor: "white",

  display: "flex",
  // justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  position: "relative",
});

export const Investment_AnimationDiv = styled("div")({
  width: "100%",
  height: "fit-content",
  position: "absolute",
  color: "#0898a0",
  top: "89%",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Investment_AnimationDivTExt = styled("h5")({
  textAlign: "center",
  fontSize: "17px",
  "@media (max-width : 29em)": {
    fontSize: "15px",
  },
});

export const Investment_AnimationDivArrowDiv = styled("div")({
  width: "10px",
  height: "10px",
  marginBottom: "4px",
  transition: "all .3s",
});
