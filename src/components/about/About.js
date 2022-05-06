import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import DownloadIcon from "@mui/icons-material/Download";

const downloadFile = () => {
  const link = document.createElement("a");
  link.download = `Alan_Monfared_CV (1).pdf`;
  link.href = `../../files/Alan_Monfared_CV (1).pdf`;
  link.click();
};
let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function About() {
  const { t } = useTranslation();
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "end",
        height: 800,
      }}
    >
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "100%", maxWidth: 500, textAlign: "start" }}>
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            sx={{ color: "#64ffda" }}
          >
            Om mig
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            sx={{ color: "#ccd6f6" }}
          >
            Hej! Jag heter Alan och jag njuter av att skapa saker som lever på
            internet.
          </Typography>

          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{ color: "#8892b0" }}
          >
            Förutom att sitta framför datorn så har jag ett liv utanför det, jag
            bor i västerså med min flickvän. På min fritid så brukar jag hålla
            på mycket med krypto mining, denna resa började för mig 2019 och nu
            minar jag Eteherum. Matlagning och matkultur har väldigt stor
            betydelse i mitt live jag gillar att laga mat och testa mat från
            alla hörn i världen.
          </Typography>

          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="start"
          >
            <Button
              to="#"
              onClick={() => (window.location = "mailto:alan.a@live.se")}
              component={Link}
              variant="outlined"
              endIcon={<SendIcon />}
            >
              {t("btn_contact")}
            </Button>
            <Button to="/" component={Link} variant="outlined">
              {t("btn_home")}
            </Button>
          </Stack>
        </Box>
        <Box sx={{ width: "30%" }}>
          <Box
          //   sx={{
          //     ...commonStyles,
          //     borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% ",
          //     position: "relative",
          //     width: "300px",
          //   }}
          ></Box>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <CardMedia
              sx={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% " }}
              component="img"
              src={require("../../image/20180410_214001.jpg")}
              alt="green iguana"
              gutterBottom
            />
            <Typography
              variant="subtitle2"
              gutterBottom
              component="div"
              sx={{ color: "#4f5c76", margin: 2, textAlign: "center" }}
            >
              ”To get something you never had, you have to do something you
              never did.”
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: "#64ffda", margin: 2, textAlign: "end" }}
            >
              - Denzel Washington
            </Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </Container>
  );
}
