// import { Typography } from "@mui/material";
import React from "react";
import { ContainerExperience } from "./Experience.Styled";

import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Card from "@mui/material/Card";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ImgBox } from "../experience/Experience.Styled";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const theme = createTheme();

export default function Erfarenhet() {
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={theme}>
      <ContainerExperience sx={{ pt: 10 }}>
        {/* Hero unit */}
        <Box>
          <Container maxWidth="sm">
            <Typography
              sx={{ color: "#ccd6f6" }}
              component="h1"
              variant="h2"
              align="center"
              gutterBottom
            >
              {t("btn_experience")}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              sx={{ color: "#8892b0" }}
              paragraph
            >
              Här är några av mina tidigare anställningar.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button to="/internship" component={Link} variant="contained">
                {t("btn_internship")}
              </Button>
              <Button to="/" component={Link} variant="outlined">
                {t("btn_home")}
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 4 }} maxWidth="md">
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "column", md: "row" },
                justifyContent: "center",
                marginTop: "5rem",
              }}
            >
              <Card
                sx={{
                  backgroundColor: "transparent",
                  color: "#8892b0",
                  "&:hover": {
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[800]
                        : theme.palette.grey[700],
                  },
                }}
              >
                {/* <CardMedia
                  component="img"
                  src={require("../../image/ups-logo-transparent-4275.png")}
                  alt="random"
                  // sx={{ width: "200px" }}
                /> */}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="span">
                    UPS
                  </Typography>
                  <Typography sx={{ color: "#ccd6f6" }}>
                    {t("date_1")}
                  </Typography>
                  <Typography sx={{ color: "#ccd6f6" }}>
                    {t("text_role")}:
                  </Typography>
                  <Typography>{t("text_roleTitle1")}</Typography>
                  <Typography sx={{ color: "#ccd6f6" }}>
                    {t("text_work")}:
                  </Typography>
                  <Typography>{t("text_work1")}</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  margin: "3rem",
                  backgroundColor: "transparent",
                  color: "#8892b0",
                  "&:hover": {
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[800]
                        : theme.palette.grey[700],
                  },
                }}
              >
                {/* <CardMedia
                  component="img"
                  image="https://source.unsplash.com/random"
                  alt="random"
                /> */}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="span">
                    NM Global
                  </Typography>
                  <Typography sx={{ color: "#ccd6f6" }}>2019 - 2020</Typography>
                  <Typography sx={{ color: "#ccd6f6" }}>
                    {t("text_role")}:
                  </Typography>
                  <Typography>{t("text_roleTitle2")}</Typography>
                  <Typography sx={{ color: "#ccd6f6" }}>
                    {t("text_work")}:
                  </Typography>
                  <Typography> {t("text_work2")} </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  backgroundColor: "transparent",
                  color: "#8892b0",
                  "&:hover": {
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[800]
                        : theme.palette.grey[700],
                  },
                }}
              >
                {/* <CardMedia
                  component="img"
                  image="https://source.unsplash.com/random"
                  alt="random"
                /> */}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="span">
                    Hallstahammars Kommun
                  </Typography>
                  <Typography sx={{ color: "#ccd6f6" }}>2013 - 2014</Typography>
                  <Typography sx={{ color: "#ccd6f6" }}>
                    {t("text_role")}:
                  </Typography>
                  <Typography> {t("text_roleTitle3")} </Typography>
                  <Typography sx={{ color: "#ccd6f6" }}>
                    {t("text_work")}:
                  </Typography>
                  <Typography>{t("text_work3")}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>

        <ImgBox>
          <img
            src={require("../../image/imgbin_portable-network-graphics-transparency-smoking-png.png")}
            alt="logo"
          />
        </ImgBox>
      </ContainerExperience>
      {/* Footer */}

      {/* End footer */}
    </ThemeProvider>

    // <ContainerExperience>
    //   <Box>
    //     <TextBox
    //       sx={{
    //         border: 1,
    //         borderColor: "grey.500",
    //         height: "300px",
    //         width: "300px",
    //         display: "flex",
    //         alignSelf: "start",
    //         top: "1px"
    //       }}
    //     >
    //       <Box
    //         sx={{
    //           backgroundColor: "grey.500",
    //           width: "80%",
    //           msTransform: "rotate(90deg)",
    //           transform: "rotate(90deg)",
    //           padding: 2,
    //         }}
    //         style={{
    //             transformOrigin: "bottom",
    //           mstransformOrigin: "bottom",
    //         }}
    //       >
    //         <Typography sx={{ color: "#ccd6f6" }} variant="h2">
    //           Erfarenhet
    //         </Typography>
    //       </Box>
    //     </TextBox>
    //   </Box>

    //   <Box sx={{ width: "70%", zIndex: 1 }}>
    //           <VerticalT />
    //   </Box>
    //   <ImgBox>
    //     <img
    //       src={require("../../image/imgbin_portable-network-graphics-transparency-smoking-png.png")}
    //       alt="logo"
    //     />
    //   </ImgBox>
    // </ContainerExperience>
  );
}
