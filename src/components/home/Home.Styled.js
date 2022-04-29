import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export const ContainerHome = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: "80vh",
  width: "70%",
  marginTop:'5rem',

  [theme.breakpoints.between("xs", "sm")]: {
    width: "50%",
    marginTop:'12rem',
    

  },

  [theme.breakpoints.down("md")]: {
    width: "80%",
  },

  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("xl")]: {
    width: "70%",
  },
}));


export const ImgBox = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top:'0px',
  left:'1200px',
  right:'0',

  [theme.breakpoints.between("xs", "sm")]: {
    // width: "50%",
  },

  [theme.breakpoints.down("md")]: {
    // width: "80%",
  },

  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.up("xl")]: {

  
  },
}));

// fixed sx={{ position: "fixed", top: 0, left:{xs: 100, sm: 200, md: 300, lg: 400, xl:1000} }}