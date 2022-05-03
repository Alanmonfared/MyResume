import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import Images from "./Images";
import Images2 from "./images2";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Fade from "@mui/material/Fade";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const tiers = [
  {
    title: "LeoVegas",
    description: [
      "02/2022-04/2022",
      "Jobbade med ett projekt som heter Lemur vilket är en adminsida för att lägga till och ta bort spel.",
    ],
    teknik: [
      "JavaScript, React.Js, TypeScript, Material-UI och Styled-component",
    ],
  },

  {
    title: "Digitalpartner",
    description: [
      "11/2021-02/2022",
      " Utvecklande av en webshop för kund. Webshopen riktar sig in mot försäljning av kläder.",
    ],
    teknik: ["WordPress - Teman: Oxyen, - Flatsome. Html, Css och JavaScript"],
  },
];

const leoV = (
  <Box sx={{ m: 1 }} elevation={4}>
    <Box sx={{ width: 100, height: 100 }}>
      <Images />
    </Box>
  </Box>
);
const digi = (
  <Box sx={{ m: 1 }} elevation={4}>
    <Box sx={{ width: 100, height: 100 }}>
      <Images2 />
    </Box>
  </Box>
);

export default function Internship() {
  const [leo, setLeo] = React.useState(true);
  const [digital, setDigital] = React.useState(false);

  const handleChangeLeo = () => {
    setLeo((prev) => !prev);
  };
  const handleChangeDigital = () => {
    setDigital((prev) => !prev);
  };

  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />

      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          sx={{ color: "#64ffda" }}
          gutterBottom
        >
          Praktik
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{ color: "#ccd6f6" }}
          component="p"
        >
         E perrfarenhet som jag har samlat på mig under min lia perioder som frontend utvecklare.
        </Typography>
        <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button to="/experience" component={Link} variant="contained">
                Erfarenhet
              </Button>
              <Button to="/" component={Link} variant="outlined">
                Hem
              </Button>
            </Stack>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid
          container
          spacing={5}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={6}
            >
              <Card
                sx={{
                  backgroundColor: "transparent",
                }}
              >
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[700]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  ></Box>
                  <ul>
                    {tier.description.map((info) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        sx={{ color: "#ccd6f6" }}
                        gutterBottom
                        key={info}
                      >
                        {info}
                      </Typography>
                    ))}
                  </ul>
                  <span>
                    {tier.teknik.map((tek) => (
                      <Typography
                        variant="p"
                        align="center"
                        sx={{ color: "#4f5c76" }}
                        key={tek}
                        gutterBottom
                      >
                        <Typography
                          variant="h6"
                          sx={{ color: "#fff" }}
                          align="center"
                        >
                          Teknik:
                        </Typography>
                        {tek}
                      </Typography>
                    ))}
                  </span>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container
        sx={{
          marginTop: "5rem",
          padding: 0,
          listStyle: "none",
          display: { xs: "none", sm: "none", md: "flex" },
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography sx={{ color: "#8892b0" }}>
            Clicka mig för att se Teknik coh program
          </Typography>

          <FormControlLabel
            control={<Switch checked={leo} onChange={handleChangeLeo} />}
          />
          <Box sx={{ display: "flex" }}>
            <Fade in={leo}>{leoV}</Fade>
          </Box>
        </Box>
        <Box>
          <Typography sx={{ color: "#8892b0" }}>
            Clicka mig för att se Teknik coh program
          </Typography>

          <FormControlLabel
            control={
              <Switch checked={digital} onChange={handleChangeDigital} />
            }
          />
          <Box sx={{ display: "flex" }}>
            <Fade in={digital}>{digi}</Fade>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
