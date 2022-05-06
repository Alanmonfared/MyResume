import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";

// import { mainListItems, secondaryListItems } from './listItems';
// import Chart from './Chart';
// import Deposits from './Deposits';
import ButtonBases from "./ButtonBases";

// const drawerWidth = 240;

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   "& .MuiDrawer-paper": {
//     position: "relative",
//     whiteSpace: "nowrap",
//     width: drawerWidth,
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     boxSizing: "border-box",
//     ...(!open && {
//       overflowX: "hidden",
//       transition: theme.transitions.create("width", {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//       width: theme.spacing(7),
//       [theme.breakpoints.up("sm")]: {
//         width: theme.spacing(9),
//       },
//     }),
//   },
// }));

const mdTheme = createTheme();

export default function Education() {
  // const [open, setOpen] = React.useState(true);
  // const toggleDrawer = () => {
  //   setOpen(!open);
  // };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        {/* <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer> */}
        <Box
          component="main"
          sx={{
            backgroundColor: "transparent",
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={5}>
              {/* Chart */}
              <Grid item xs={12} sm={12} md={12} lg={12} sx={{display: {xs: "flex"}, flexDirection: {xs:"column"} }}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    // flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: 50,
                    margin: 3,
                    backgroundColor: "transparent",
                    // ...commonStyles,
                    borderLeft: 5,
                    borderColor: "primary.main",
                  }}
                >
                  {/* <Chart /> */}
                  <Typography sx={{ color: "#8892b0" }}>
                    EC utbildning
                  </Typography>
                  <Typography sx={{ color: "#ccd6f6", marginRight: 6 }}>
                    2020 - 2022
                  </Typography>

                  <Typography sx={{ color: "#8892b0" }}>
                    Frontend utvecklare
                  </Typography>
                </Paper>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    // flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: 50,
                    margin: 3,

                    backgroundColor: "transparent",
                    borderLeft: 5,
                    borderColor: "primary.main",
                  }}
                >
                  {/* <Chart /> */}
                  <Typography sx={{ color: "#8892b0" }}>
                    Kunskaps Companiet
                  </Typography>
                  <Typography sx={{ color: "#ccd6f6", marginRight: 11 }}>
                    2014 - 2015
                  </Typography>

                  <Typography sx={{ color: "#8892b0" }}>
                    Bygg och anläggning
                  </Typography>
                </Paper>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    // flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: 50,
                    margin: 3,
                    backgroundColor: "transparent",
                    borderLeft: 5,
                    borderColor: "primary.main",
                  }}
                >
                  {/* <Chart /> */}
                  <Typography sx={{ color: "#8892b0" }}>Yrkeshandel</Typography>
                  <Typography sx={{ color: "#ccd6f6" }}>2006 - 2009</Typography>

                  <Typography sx={{ color: "#8892b0" }}>
                    Wenströmska Gymnasiet
                  </Typography>
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              {/* <Grid item xs={5} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    height: 50,
                    margin: 3,
                  }}
                >
                  <Deposits />
                  <Typography sx={{ color: "#ccd6f6" }}>2020--</Typography>
                  <Typography>2014-2015</Typography>
                  <Typography>2006-2009</Typography>
                </Paper>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    height: 50,
                    margin: 3,
                  }}
                >
                  <Deposits />
                  <Typography sx={{ color: "#ccd6f6" }}>2020--</Typography>
                  <Typography>2014-2015</Typography>
                  <Typography>2006-2009</Typography>
                </Paper>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    height: 50,
                    margin: 3,
                  }}
                >
                  <Deposits />
                  <Typography sx={{ color: "#ccd6f6" }}>2020--</Typography>
                  <Typography>2014-2015</Typography>
                  <Typography>2006-2009</Typography>
                </Paper>
              </Grid> */}
              <Grid item xs={12}>
                
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column", backgroundColor: "transparent" }}>
                <Typography alignSelf={"center"} sx={{margin: 5, color: "#ccd6f6" }} variant={"h4"} >Kompetens från EC Utbildning</Typography>
                  <ButtonBases/>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
