import { keyframes, styled } from "@mui/material";

export const CharacterTwo = styled("div")({
  width: "100vw",
  height: "90vh",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width : 49em)": {
    height: "fit-content",
  },
});

export const CharacterTwo_Holder = styled("div")({
  width: "80%",
  height: "75%",
  display: "flex",
  alignItems: "center",
  "@media (max-width : 49em)": {
    width: "95%",
    display: "block",
    padding: "20px",
  },

  // justifyContent: "center",
});

export const CharacterTwo_FirstHolder = styled("div")({
  width: "50%",
  height: "100%",
  display: "flex",
  alignItems: "center",

  justifyContent: "center",
  "@media (max-width : 49em)": {
    width: "100%",
    height: "50%",
  },
});
export const CharacterTwo_FirstHolderHolder = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",

  justifyContent: "end",
  "@media (max-width : 49em)": {
    width: "75%",
    height: "50%",
    marginBottom: "15px",
    display: "flex",
    alignItems: "center",

    justifyContent: "center",
  },
});

export const CharacterTwo_SecondHolder = styled("div")({
  width: "50%",
  height: "100%",
  display: "flex",
  alignItems: "center",

  justifyContent: "center",
  "@media (max-width : 49em)": {
    width: "100%",
    height: "50%",
  },
});
export const CharacterTwo_SecondHolderHolder = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  // alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  "@media (max-width : 49em)": {
    width: "75%",
    height: "100%",
  },
  "@media (max-width : 39em)": {
    width: "90%",
  },
  "@media (max-width : 29em)": {
    width: "95%",
  },
});

export const CharacterTwo_SecondHolderImg = styled("img")({
  width: "100%",
  height: "100%",
});

export const CharacterOne_FirstSSubText = styled("p")({
  fontSize: "15px",
  width: "80%",
  color: "rgb(78, 74, 74)",
  "@media (max-width : 49em)": {
    textAlign: "center",
    width: "100%",
  },
  "@media (max-width : 29em)": {
    fontSize: "14px",
  },
});
