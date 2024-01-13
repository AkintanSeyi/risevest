import { keyframes, styled } from "@mui/material";

export const Header = styled("div")({
  width: "100vw",
  height: "100px",
  // overflowX: "hidden",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "sticky",
  top: "0%",
  zIndex: "400",
});

export const Header_Holder = styled("div")({
  width: "80%",
  height: "85%",
  display: "flex",
  alignItems: "center",
  // justifyContent: "center",
  padding: "10px",
  "@media (max-width : 56.25em)": {
    width: "95%",
    justifyContent: "space-between",
  },
});

export const Header_Icon_Div = styled("div")({
  width: "15%",
  height: "100%",
  padding: "10px",
  display: "flex",
  //  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
});

export const Header_Logo_Text = styled("h2")({
  color: "#0898a0",
  fontSize: "33px",
});
export const Header_LogoDot = styled("div")({
  width: "5px",
  backgroundColor: "#0898a0",
  height: "5px",
  position: "absolute",
  top: "40%",
  left: "67px",
  borderRadius: "50%",
  "@media (max-width : 62.5em)": {
    left: "68px",
  },
});

export const Header_Navbar_Div = styled("div")({
  width: "85%",
  fontSize: "13.9px",
  textTransform: "capitalize",
  padding: "10px",
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
  color: "#0898a0",
  alignItems: "center",
  "@media (max-width : 56.25em)": {
    display: "none",
  },
});

export const Header_ToggleDiv = styled("div")({
  width: "80px",
  fontSize: "14px",
  padding: "15px",
  height: "100%",

  display: "none",

  position: "relative",

  paddlingLeft: "20px",

  "@media (max-width : 56.25em)": {
    display: "block",
  },
});

export const Header_ToggleFirstInnerDiv = styled("div")({
  width: "20%",
  position: "absolute",
  top: "40%",
  right: "0px",
  height: "3.5px",
  backgroundColor: "#0898a0",
  borderRadius: "4px",
});

export const Header_ToggleMiddleInnerDiv = styled("div")({
  width: "30%",
  position: "absolute",
  top: "50%",
  right: "0%",
  height: "3.5px",
  backgroundColor: "#0898a0",
  borderRadius: "4px",
});
export const Header_TogglelastInnerDiv = styled("div")({
  width: "15%",
  position: "absolute",
  top: "60%",
  right: "11px",
  height: "3.5px",
  backgroundColor: "#0898a0",
  borderRadius: "4px",
});

export const Header_Icon_Text = styled("h6")({
  cursor: "pointer",
  color: "#0898a0",
  fontSize: "16px",
  transition: "all 1s",

  "&:hover": {
    color: "#5cc5ca",
  },
});

export const Header_Icon_Text_Product = styled("h6")({
  cursor: "pointer",
  color: "#0898a0",
  marginRight: "-2px",
  fontSize: "16px",
  transition: "all 1s",

  "&:hover": {
    color: "#5cc5ca",
  },
});

export const Header_Navbar_HomeDiv = styled("div")({
  width: "fit-content",
  height: "fit-content",
  marginTop: "14px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export const Header_Navbar_HomeDivProduct = styled("div")({
  width: "fit-content",
  height: "fit-content",
  fontSize: "23px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  "&:hover": {
    color: "#5cc5ca",
  },
});

export const Header_SigninAndSignUpButton = styled("button")({
  width: "fit-content",
  borderRadius: "4px",
  outline: "none",
  border: "none",
  textTransform: "capitalize",
  fontSize: "16px",
  fontWeight: "bold",
  height: "50px",
  padding: "1.5px 40px 1.5px 40px",
  backgroundColor: "#0898a0",
  color: "white",
  cursor: "pointer",
  transition: "all .5s",
  "&:hover": {
    transform: "translateY(-2px)",
  },
});

export const Header_Navbar_CancelDiv = styled("div")({
  width: "100%",
  height: "100%",
  justifyContent: "end",
  color: "#0898a0",
  alignItems: "center",
  display: "flex",
  fontSize: "20px",
});

export const Header_Navbar_HomeText = styled("h3")({
  marginBottom: "4px",
  fontSize: "16px",
  color: "#0898a0",
  transition: "all 1s",
  cursor: "pointer",
});

export const Header_Navbar_HomeDivDot = styled("div")({
  width: "8px",
  backgroundColor: "#0898a0",
  height: "8px",
  borderRadius: "50%",
});
