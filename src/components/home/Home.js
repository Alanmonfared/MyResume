import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/700.css";
import { ContainerHome, ImgBox } from "./Home.Styled";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { useTranslation } from "react-i18next";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Home() {
  const { t } = useTranslation();
  const userName = "Alan Monfared"
  return (
    <ContainerHome>
      <Box sx={{ zIndex: 1 }} component="div" animation="wave" > 
        <ThemeProvider theme={theme}>
          <Typography variant="h6" gutterBottom sx={{ color: "#64ffda" }}>
           {t("home_text")}
          </Typography>
          <Typography
            variant="h2"
            gutterBottom
            component="div"
            sx={{ color: "#ccd6f6" }}
          >
            {t("my_name",{name: userName})}
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ color: "#8892b0" }}>
            body1. Lorem ipsum dolor sit ame
          </Typography>
          <Typography variant="p" gutterBottom sx={{ color: "#4f5c76" }}>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore-
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quia.
            Fugit qui nam enim eaque accusantium recusandae eius vel vero natus
            sequi nostrum cupiditate, molestiae praesentium. Dolorum magnam sed
            cupiditate!
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore-
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quia.
            Fugit qui nam enim eaque accusantium recusandae eius vel vero natus
            sequi nostrum cupiditate, molestiae praesentium. Dolorum magnam sed
            cupiditate!
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore-
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quia.
            Fugit qui nam enim eaque accusantium recusandae eius vel vero natus
            sequi nostrum cupiditate, molestiae praesentium. Dolorum magnam sed
            cupiditate!
          </Typography>
        </ThemeProvider>
      </Box>
      <ImgBox>
        <img
          src={require("../../image/imgbin_portable-network-graphics-desktop-smoke-png@2x.png")}
          alt="logo"
        />
      </ImgBox>
    </ContainerHome>
  );
}
