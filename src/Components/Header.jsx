import React from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  IconButton,
  Stack,
  Divider,
  Avatar,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ReactComponent as HeaderLogo } from "../Assets/HeaderLogo.svg";
// import HeaderLogo from "../Assets/HeaderLogo.svg";
import NotificationIcon from "../Assets/NotificationIcon.svg";
import HeaderProfilePic from "../Assets/HeaderProfilePic.png";
import MenuIcon from "../Assets/MenuIcon.svg";
const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppBar position="static">
      <Container fixed disableGutters={isMobile ? false : true}>
        <Toolbar>
          {isMobile && (
            <Box mb="10px" mr={2.5}>
              <IconButton>
                <img src={MenuIcon} alt="menu" />
              </IconButton>
            </Box>
          )}
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/">
              {" "}
              <HeaderLogo />
            </Link>
          </Box>
          <Box>
            <Button variant="contained" color="primary">
              <Typography variant="btnTextHeader">Connect Wallet</Typography>
            </Button>
          </Box>
          <Stack
            direction="row"
            divider={isMobile ? 0 : <Divider orientation="vertical" flexItem />}
            spacing={isMobile ? 0.5 : 2}
          >
            <Box>
              <IconButton sx={{ marginLeft: "40px", marginTop: "0px" }}>
                <img src={NotificationIcon} alt="Notification" />
              </IconButton>
            </Box>
            {isMobile ? (
              <Box></Box>
            ) : (
              <Box sx={{ paddingTop: "10px" }}>
                <Typography variant="h6">Alexandre</Typography>
              </Box>
            )}
          </Stack>
          <Box sx={{ marginLeft: "10px" }}>
            <Avatar alt="profile pic" src={HeaderProfilePic} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
