import { keyframes, styled } from "@mui/material";

export const CharacterOne_FirstSSubText = styled("p")({
  fontSize: "15px",
  width: "55%",
  color: "rgb(78, 74, 74)",
  "@media (max-width : 49em)": {
    textAlign: "center",
    width: "100%",
  },
  "@media (max-width : 29em)": {
    fontSize: "14px",
  },
});
