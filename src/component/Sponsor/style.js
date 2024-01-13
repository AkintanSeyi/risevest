import { keyframes, styled } from "@mui/material";

export const Sponsor = styled("div")({
  width: "100vw",
  height: "40vh",
  overflowX: "hidden",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width : 49em)": {
    marginTop: "20px",
  },
});
export const Sponsor_Holder = styled("div")({
  width: "80%",
  height: "85%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",

  "@media (max-width : 49em)": {
    width: "80%",
    display: "grid",
    justifyItems: "center",
    gridTemplateColumns: "1fr 1fr",
  },
  "@media (max-width : 29em)": {
    width: "100%",

    // justifyItems: "start",
  },
});

export const Sponsor_imgDiv = styled("div")({
  width: "130px",
  height: "40%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "17px",
  "@media (max-width : 29em)": {
    marginRight: "0px",
    width: "50px",
  },
});
export const Sponsor_imgTextDiv = styled("div")({
  width: "250px",
  height: "60%",
  display: "flex",
  alignItems: "center",
  marginRight: "17px",
  justifyContent: "center",
  "@media (max-width : 29em)": {
    marginRight: "0px",
    width: "200px",
  },
});

export const Sponsor_Img = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  "@media (max-width : 29em)": {},
});
