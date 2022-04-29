import React from "react";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import PublicIcon from "@mui/icons-material/Public";

const actions = [
  { icon: <GitHubIcon />, name: "Github" },
  { icon: <LinkedInIcon />, name: "LinkdeIn" },
  { icon: <InstagramIcon />, name: "Instagram" },
  
];

export default function SocialMedia() {
  return (
    <>
      <Box
        sx={{
          transform: "translateZ(0px)",
          flexGrow: 1,
          "& > :not(style)": { m: 1 },
          position: "fixed",
          bottom: 30,
          left: { md: 30 },
          right: { xs: "calc(100% - 70px)", md: "auto" },
          // display: { xs: "calc(25)", sm: "none", md: "block", lg: "block" },
        }}
      >
        <SpeedDial
          ariaLabel="openicon"
          icon={<PublicIcon openicon={<PublicIcon />} />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              sx={{ backgroundColor: "transparent", color: "#fff" }}
            />
          ))}
        </SpeedDial>
      </Box>

      {/* <Box
        sx={{
          
          "& > :not(style)": { m: 1 },
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,

          display: { md: "none", lg: "none", xl: "none" },
        }}
      >
        <Fab
          size="medium"
          sx={{ backgroundColor: "transparent", color: "#fff" }}
          aria-label="github"
        >
          <GitHubIcon />
        </Fab>
        <Fab
          size="medium"
          sx={{ backgroundColor: "transparent", color: "#fff" }}
          aria-label="linkdin"
        >
          <LinkedInIcon />
        </Fab>
        <Fab
          size="medium"
          sx={{ backgroundColor: "transparent", color: "#fff" }}
          aria-label="instagram"
        >
          <InstagramIcon />
        </Fab>
      </Box> */}
    </>
  );
}
