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
} from "@mui/material";
import HeaderLogo from "../Assets/HeaderLogo.svg";
import NotificationIcon from "../Assets/NotificationIcon.svg";
import HeaderProfilePic from "../Assets/HeaderProfilePic.png";
const Header = () => {
  return (
    <AppBar position="static">
      <Container fixed disableGutters>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/">
              {" "}
              <img src={HeaderLogo} alt="Logo" />
            </Link>
          </Box>
          <Box>
            <Button variant="contained" color="primary">
              <Typography variant="btnTextHeader">Connect Wallet</Typography>
            </Button>
          </Box>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <Box>
              <IconButton sx={{ marginLeft: "40px", marginTop: "0px" }}>
                <img src={NotificationIcon} alt="Notification" />
              </IconButton>
            </Box>
            <Box sx={{ paddingTop: "10px" }}>
              <Typography variant="h6">Alexandre</Typography>
            </Box>
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
