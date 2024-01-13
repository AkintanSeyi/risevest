import { keyframes, styled } from "@mui/material";

export const User = styled("div")({
  width: "100vw",
  height: "100vh",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width : 62.5em)": {
    height: "60vh",
  },
  "@media (max-width : 49em)": {
    height: "fit-content",
  },
});
export const User_Holder = styled("div")({
  width: "75%",
  height: "65%",
  backgroundColor: "#ddeeea",
  display: "flex",
  borderRadius: "15px",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  "@media (max-width : 62.5em)": {
    width: "90%",
    height: "fit-content",
  },
  "@media (max-width : 49em)": {
    width: "90%",
    height: "fit-content",

    borderRadius: "0px",
    flexDirection: "column",
  },
});

export const User_First = styled("div")({
  width: "75%",
  height: "100%",

  borderRadius: "12px  0px 0px 12px",
  justifyContent: "center",
  alignItems: "center",

  display: "flex",
  "@media (max-width : 49em)": {
    width: "100%",
    height: "300px",

    borderRadius: "0PX",
  },
});

export const User_FirstDiv = styled("div")({
  width: "85%",
  height: "60%",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  "@media (max-width : 49em)": {
    alignItems: "center",
  },
});

export const User_Second = styled("div")({
  width: "25%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",

  borderRadius: "0px  12px 12px 0px",
  position: "relative",
  "@media (max-width : 49em)": {
    height: "750px",
    width: "100%",
    marginBottom: "50px",
  },
  "@media (max-width : 29em)": {
    height: "600px",
    width: "100%",
    marginBottom: "50px",
  },
});
export const User_SecondImg = styled("img")({
  width: "100%",
  position: "absolute",
  top: "50px",
  left: "-12%",
  height: "100%",
  objectFit: "contain",
  "@media (max-width : 49em)": {
    top: "10px",
    left: "0%",
  },
});

export const User_Initials = styled("p")({
  fontSize: "16px",
  marginBottom: "15px",
  "@media (max-width : 29em)": {
    fontSize: "15px",
  },
});

export const User_FirstButtonDiv = styled("div")({
  width: "100%",
  height: "fit-content",
  display: "flex",

  marginTop: "15px",
  "@media (max-width : 49em)": {
    alignItems: "center",

    justifyContent: "center",
  },
});

export const Goals_Second_para = styled("p")({
  fontSize: "16px",
  color: "rgb(78, 74, 74)",
  marginBottom: "15px",
  lineHeight: "1.4",
  "@media (max-width : 49em)": {
    width: "100%",
    fontSize: "15px",
    textAlign: "center",
  },
  "@media (max-width : 29em)": {
    fontSize: "14px",
  },
});

export const Goals_Second_Header = styled("h3")({
  fontSize: "34px",
  marginBottom: "15px",
  color: "rgb(78, 74, 74)",

  "@media (max-width : 62.5em)": {
    fontSize: "30px",
  },
  "@media (max-width : 49em)": {
    textAlign: "center",
  },
  "@media (max-width : 29em)": {
    fontSize: "25px",
  },
});

export const User_FirstLineHeight = styled("div")({
  width: "1px",
  height: "60%",
  backgroundColor: "black",
  marginRight: "5px",
  marginLeft: "5px",
});

export const User_FirstDownloadAppDiv = styled("div")({
  width: "fit-content",
  cursor: "pointer",
  fontSize: "20px",
  marginRight: "15px",
  height: "48px",
  padding: "1.5px 15px 1.5px 15px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
  border: "1px solid black",
  "@media (max-width : 29em)": {
    padding: "0.5px 10px 0.5px 10px",
  },
});

export const User_DownloadText = styled("p")({
  fontSize: "15px",
  marginLeft: "5px",
});

export const User_ArrowDiv = styled("div")({
  marginLeft: "7px",
  paddingTop: "4px",
  transition: "all .5s",
});

export const User_SigninButton = styled("button")({
  width: "fit-content",
  borderRadius: "4px",
  outline: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  border: "none",
  textTransform: "capitalize",
  fontSize: "16px",
  fontWeight: "bold",
  height: "50px",
  padding: "1.5px 20px 1.5px 20px",
  backgroundColor: "rgb(43, 41, 41)",
  color: "white",
  cursor: "pointer",
  transition: "all .5s",
  "@media (max-width : 29em)": {
    padding: "0.5px 15px 0.5px 15px",
    fontSize: "15px",
  },
});
