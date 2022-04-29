import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";



export const ContainerEducation = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40vh",
    width: "100%",
  
    [theme.breakpoints.between("xs", "sm")]: {
      width: "50%",
      
  
    },
  
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
  
    [theme.breakpoints.only("lg")]: {},
    [theme.breakpoints.down("xl")]: {
      // width: "90%",
    },
  }));
  