import { keyframes, styled } from "@mui/material";

export const HomeIntroPage = styled("div")({
  width: "100vw",
  height: "100vh",
  display: "flex",
  // position: "relative",
  "@media (max-width : 49em)": {
    display: "block",
    height: "fit-content",
  },
});

export const BubbleSection = styled("section")({
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  position: "relative",
});

export const BubbleSpan = styled("span")({
  position: "absolute",
  bottom: "-50px",
  backgroundColor: "red",
  borderRadius: "50%",
});

export const HomeIntroPage_FirstPage = styled("div")({
  width: "60%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  "@media (max-width : 49em)": {
    width: "100%",
    height: "50%",
    justifyContent: "center",
  },
});
export const HomeIntroPage_Header = styled("h3")({
  fontSize: "60px",
  marginBottom: "25px",
  width: "80%",

  "@media (max-width : 62.5em)": {
    fontSize: "50px",
    width: "100%",
  },
  "@media (max-width : 49em)": {
    textAlign: "center",
    fontSize: "40px",
  },
  "@media (max-width : 29em)": {
    fontSize: "35px",
  },
});

export const HomeIntroPage_FirstPageDiv = styled("div")({
  width: "82%",
  height: "70%",

  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "start",

  "@media (max-width : 49em)": {
    alignItems: "center",
    justifyContent: "center",
    width: "75%",
    marginTop: "40px",
  },
  "@media (max-width : 39em)": {
    width: "85%",
  },
  "@media (max-width : 29em)": {
    width: "90%",
  },
});

export const HomeIntroPage_para = styled("p")({
  fontSize: "16px",
  color: "rgb(78, 74, 74)",
  marginBottom: "15px",
  lineHeight: "1.4",
  width: "70%",

  "@media (max-width : 49em)": {
    textAlign: "center",
    fontSize: "15px",
  },
  "@media (max-width : 29em)": {
    fontSize: "14px",
  },
});

export const HomeIntroPage_SecondPage = styled("div")({
  width: "40%",
  height: "100%",
  display: "flex",
  marginTop: "30px",
  alignItems: "start",
  justifyContent: "center",
  "@media (max-width : 49em)": {
    width: "100%",
    height: "fit-content",
  },
});
export const HomeIntroPage_SecondPageImg = styled("img")({
  width: "100%",
  height: "100%",
  borderRadius: "30px",
});

const AnimateImage = keyframes`
0% {

    transform : translateY(15px)
}
50% {
    transform : translateY(0px)
}
100% {
    transform : translateY(15px)
}
`;

export const HomeIntroPage_SecondPageDiv = styled("div")({
  width: "50%",
  height: "85%",
  borderRadius: "1px",
  marginRight: "35px",

  display: "flex",
  transition: "all 2s",

  // animation: `${AnimateImage}  2s ease-in-out 2s infinite`,
  borderRadius: "30px",
  alignItems: "center",
  // boxShadow: "0px 15px 20px rgb(95, 93, 93)",
  boxShadow: "0px 9px 25px #dcebec",
  justifyContent: "center",
  "@media (max-width : 29em)": {
    marginRight: "0px",
  },
});
