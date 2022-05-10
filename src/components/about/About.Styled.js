import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";

export const ContainerAbout = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "end",
  height: 800,

  [theme.breakpoints.between("xs", "sm")]: {},

  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 900,
  },

  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.up("xl")]: {},
}));
