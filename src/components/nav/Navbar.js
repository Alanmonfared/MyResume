import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Container from "@mui/material/Container";
import { Nav } from "./Navbar.Styled";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/700.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import {
  responsiveFontSizes,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Navbar() {
  const { i18n, t } = useTranslation();

  // useEffect(() => {
  // 	if (localStorage.getItem("i18nextLng")?.length > 2) {
  // 		i18next.changeLanguage("en");
  // 	}
  // }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((curr) => !curr);
  };

  return (
    <>
      <Nav stick>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          maxWidth="xxl"
        >
          {/* <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <select
                  className="nav-link bg-dark border-0 ml-1 mr-2"
                  value={localStorage.getItem("i18nextLng")}
                  onChange={handleLanguageChange}
                >
                  <option value="en">Engelska</option>
                  <option value="se">Svenska</option>
                  <option value="fa">Persiska</option>
                </select>
              </li>
            </ul>
          </div> */}
          <img
            src={require("../../image/AM.png")}
            alt="logo"
            style={{ paddingLeft: "1.5rem" }}
          />
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                sx={{ color: "#64ffda" }}
              >
                {t("btn_language")}{" "}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={localStorage.getItem("i18nextLng")}
                sx={{ color: "#8892b0" }}
                label="Språk"
                onChange={handleLanguageChange}
              >
                <MenuItem value="en"> {t("btn_lan1")} </MenuItem>
                <MenuItem value="se">{t("btn_lan2")}</MenuItem>
                <MenuItem value="fa">{t("btn_lan3")}</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {isOpen && (
            <NavbarExtend>
              <ThemeProvider theme={theme}>
                <Box
                  sx={{
                    position: "fixed",
                    top: 50,
                    left: 0,
                    right: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  marginX={20}
                >
                  <Avatar
                    alt="Alan Monfared"
                    src={require("../../image/20180306_185151.jpg")}
                    sx={{ width: 98, height: 98 }}
                  />
                  <NavbarExtendLink>
                    <Link
                      style={{ textDecoration: "none", color: "#fff" }}
                      to="/"
                      onClick={handleClick}
                    >
                      <Typography marginTop={2} variant={"h4"}>
                        {t("btn_home")}
                      </Typography>
                    </Link>
                  </NavbarExtendLink>
                  <NavbarExtendLink>
                    <Link
                      style={{ textDecoration: "none", color: "#fff" }}
                      to="/experience"
                      onClick={handleClick}
                    >
                      <Typography marginTop={2} variant={"h4"}>
                        {t("btn_experience")}
                      </Typography>
                    </Link>
                  </NavbarExtendLink>
                  <NavbarExtendLink>
                    <Link
                      style={{ textDecoration: "none", color: "#fff" }}
                      to="/education"
                      onClick={handleClick}
                    >
                      <Typography marginTop={2} variant={"h4"}>
                        {t("btn_education")}
                      </Typography>
                    </Link>
                  </NavbarExtendLink>
                  <NavbarExtendLink>
                    <Link
                      style={{ textDecoration: "none", color: "#fff" }}
                      to="/about"
                      onClick={handleClick}
                    >
                      <Typography marginTop={2} variant={"h4"}>
                        {t("btn_about")}
                      </Typography>
                    </Link>
                  </NavbarExtendLink>

                  <Stack marginTop={2}>
                    <Button
                      variant="contained"
                      to="#"
                      onClick={() =>
                        (window.location = "mailto:alan.a@live.se")
                      }
                      component={Link}
                      endIcon={<SendIcon />}
                    >
                      {t("btn_contact")}
                    </Button>
                  </Stack>
                </Box>
              </ThemeProvider>
            </NavbarExtend>
          )}

          <BurgerButton onClick={handleClick}>
            {isOpen ? <>&#10005;</> : <>&#8801;</>}
          </BurgerButton>
        </Container>
      </Nav>
    </>
  );
}

const BurgerButton = styled.button`
  margin: 0;
  padding-right: 3.5rem;
  border: none;
  background: none;
  font-size: 42px;
  width: 50px;
  height: 50px;
  color: rgb(102, 178, 255);
  z-index: 1;
  cursor: pointer;
`;

const NavbarExtend = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  animation: fadeInLeft;
  animation-duration: 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000000e8;
`;

const NavbarExtendLink = styled.li`
  list-style: none;
  border: none;
  color: white;

  /* 
  animation: fadeInLeft;
  animation-duration: 2s; */
  &:hover {
    /* background-color: black;
    padding-top: 2rem;
    padding-bottom: 2rem;
    -webkit-border-radius: 500px;
    -webkit-border-top-left-radius: 0;
    border-radius: 500px;
    border-top-left-radius: 0;
    display: flex;
    justify-content: center;
    transition: transform 300ms;
    width: 90%;
    height: 10%; */
  }
`;
