import { keyframes, styled } from "@mui/material";

export const NavBar = styled("div")({
  width: "100vw",
  height: "100vh",
  paddling: "10px",
  position: "fixed",
  top: "8%",
  left: "0%",
  backgroundColor: "white",
  zIndex: "300",
  paddingTop: "30px",
  "@media (max-width : 39em)": {
    top: "10%",
  },
});

export const NavBar_Holder = styled("div")({
  width: "90%",
  height: "100%",
  paddingLeft: "36.5px",
  "@media (max-width : 39em)": {
    paddingLeft: "25px",
  },
});

export const NavBar_Holder_Text = styled("h3")({
  fontSize: "23px",
  marginBottom: "25px",
  textTransform: "capitalize",
  color: "rgb(56, 54, 54)",
  "&:hover": {
    color: "rgb(129, 125, 125)",
  },
  "@media (max-width : 39em)": {
    fontSize: "17px",
  },
});

export const NavBar_Holder_ButtonDiv = styled("h3")({
  width: "fit-content",
  display: "flex",
  marginTop: "60px",
});
export const NavBar_Holder_Button = styled("button")({
  width: "fit-content",
  borderRadius: "17px",
  outline: "none",
  border: "none",
  textTransform: "capitalize",
  fontSize: "15px",
  fontWeight: "bold",
  marginRight: "20px",

  height: "45px",
  padding: "1.5px 50px 1.5px 50px",
  backgroundColor: "rgb(243, 238, 238)",

  cursor: "pointer",
  transition: "all .5s",

  "&:hover": {
    transform: "translateY(-4px)",
  },
  "@media (max-width : 39em)": {
    fontSize: "14px",
    padding: "1.5px 20px 1.5px 20px",
  },
});
