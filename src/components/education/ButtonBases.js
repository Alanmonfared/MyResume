import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const images = [
  {
    url: "https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png",
    title: "Javascript",
    width: "30%",
  },
  {
    url: "https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png",
    title: "TypeScript",
    width: "30%",
  },
  {
    url: "https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png",
    title: "Html5",
    width: "30%",
  },
  {
    url: "https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png",
    title: "Css",
    width: "30%",
  },
  {
    url: "https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png",
    title: "React.js",
    width: "30%",
  },
  {
    url: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
    title: "Node.js",
    width: "30%",
  },
  {
    url: "https://seeklogo.com/images/V/vuejs-logo-17D586B587-seeklogo.com.png",
    title: "Vue.js",
    width: "30%",
  },
  {
    url: "https://seeklogo.com/images/A/angular-logo-B76B1CDE98-seeklogo.com.png",
    title: "Angular",
    width: "30%",
  },
  {
    url: "https://seeklogo.com/images/B/bootstrap-5-logo-85A1F11F4F-seeklogo.com.png",
    title: "Bootstrap",
    width: "30%",
  },
  {
    url: "https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png",
    title: "Material-UI",
    width: "30%",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 300,
  [theme.breakpoints.down("sm")]: {
    width: "50% !important", // Overrides inline-style
    height: 200,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center ",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  //   backgroundColor: theme.palette.common.black,

  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: "black",    
    opacity: 0.5
} 
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
//   backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),

      
  
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 1,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function ButtonBases() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        minWidth: 100,
        width: "100%",
        backgroundColor: "transparent",
      }}
    >
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
