import React from "react";
import {
  Container,
  Typography,
  Button,
  Stack,
  Card,
  CardContent,
  Link,
  useMediaQuery,
} from "@mui/material";
import TwitterCardIcon from "../Assets/TwitterCardIcon.svg";
import LinkedInCardIcon from "../Assets/LinkedInCardIcon.svg";
import FacebookCardIcon from "../Assets/FacebookCardIcon.svg";
import Mahesh from "../Assets/Mahesh.png";
import Ryan from "../Assets/Ryan.png";
import Allison from "../Assets/Allison.png";
import Jaylon from "../Assets/Jaylon.png";
import Davis from "../Assets/Davis.png";
import Carter from "../Assets/Carter.png";
import Carter2 from "../Assets/Carter2.png";
import Leo from "../Assets/Leo.png";
import Gustavo from "../Assets/Gustavo.png";
import Kianna from "../Assets/Kianna.png";
import Marilyn from "../Assets/Marilyn.png";
import Corey from "../Assets/Corey.png";
import {
  theme,
  ButtonSection,
  TeamHeading,
  TeamMemberSection,
  CustomAvatar,
  Designation,
} from "./StyledComponents/TeamStyles";
const Team = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container fixed>
      <ButtonSection>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="dark">
            Team
          </Button>
          <Button variant="disabled">Token Economics</Button>
          <Button variant="disabled">Partnerships</Button>
          <Button variant="disabled">Roadmap</Button>
        </Stack>
      </ButtonSection>
      <TeamHeading variant="h2" component="h2" color="primary">
        Team{" "}
        <Typography variant="h2" component="span" color="secondary">
          Members
        </Typography>
      </TeamHeading>
      <TeamMemberSection>
        <Stack direction="row" spacing={isMobile ? 0.5 : 1.5}>
          <Card>
            <CustomAvatar alt="Mahesh" src={Mahesh} />
            <CardContent>
              <Typography
                gutterBottom={isMobile ? false : true}
                align="center"
                variant="h6"
              >
                Mahesh Harilela
                <Designation align="center" color="primary">
                  Chairman
                </Designation>
              </Typography>
              <Stack
                sx={{ display: "flex", justifyContent: "center" }}
                direction="row"
                spacing={isMobile ? 1 : 2}
                mt={isMobile ? "-8px" : 2}
              >
                <Link href="">
                  <img src={TwitterCardIcon} alt="twitter" />{" "}
                </Link>
                <Link href="">
                  <img src={LinkedInCardIcon} alt="Linkedin" />{" "}
                </Link>
                <Link href="">
                  <img src={FacebookCardIcon} alt="Faceboom" />{" "}
                </Link>
              </Stack>
            </CardContent>
          </Card>
          <Card>
            <CustomAvatar alt="Ryan" src={Ryan} />
            <CardContent>
              <Typography
                gutterBottom={isMobile ? false : true}
                align="center"
                variant="h6"
              >
                Ryan Ekstrom
                <Designation align="center" color="primary">
                  Lorem Ipsum
                </Designation>
              </Typography>
              <Stack
                sx={{ display: "flex", justifyContent: "center" }}
                direction="row"
                spacing={isMobile ? 1 : 2}
                mt={isMobile ? "-8px" : 2}
              >
                <Link href="">
                  <img src={TwitterCardIcon} alt="twitter" />{" "}
                </Link>
                <Link href="">
                  <img src={LinkedInCardIcon} alt="Linkedin" />{" "}
                </Link>
                <Link href="">
                  <img src={FacebookCardIcon} alt="Faceboom" />{" "}
                </Link>
              </Stack>
            </CardContent>
          </Card>
          <Card>
            <CustomAvatar alt="Allison" src={Allison} />
            <CardContent>
              <Typography
                gutterBottom={isMobile ? false : true}
                align="center"
                variant="h6"
              >
                Allison Philips
                <Designation align="center" color="primary">
                  Lorem Ipsum
                </Designation>
              </Typography>
              <Stack
                sx={{ display: "flex", justifyContent: "center" }}
                direction="row"
                spacing={isMobile ? 1 : 2}
                mt={isMobile ? "-8px" : 2}
              >
                <Link href="">
                  <img src={TwitterCardIcon} alt="twitter" />{" "}
                </Link>
                <Link href="">
                  <img src={LinkedInCardIcon} alt="Linkedin" />{" "}
                </Link>
                <Link href="">
                  <img src={FacebookCardIcon} alt="Faceboom" />{" "}
                </Link>
              </Stack>
            </CardContent>
          </Card>
          <Card>
            <CustomAvatar alt="Jaylon" src={Jaylon} />
            <CardContent>
              <Typography
                gutterBottom={isMobile ? false : true}
                align="center"
                variant="h6"
              >
                Jaylon Press
                <Designation align="center" color="primary">
                  Lorem Ipsum
                </Designation>
              </Typography>
              <Stack
                sx={{ display: "flex", justifyContent: "center" }}
                direction="row"
                spacing={isMobile ? 1 : 2}
                mt={isMobile ? "-8px" : 2}
              >
                <Link href="">
                  <img src={TwitterCardIcon} alt="twitter" />{" "}
                </Link>
                <Link href="">
                  <img src={LinkedInCardIcon} alt="Linkedin" />{" "}
                </Link>
                <Link href="">
                  <img src={FacebookCardIcon} alt="Faceboom" />{" "}
                </Link>
              </Stack>
            </CardContent>
          </Card>
          <Card>
            <CustomAvatar alt="Davis" src={Davis} />
            <CardContent>
              <Typography
                gutterBottom={isMobile ? false : true}
                align="center"
                variant="h6"
              >
                Davis Saris
                <Designation align="center" color="primary">
                  Lorem Ipsum
                </Designation>
              </Typography>
              <Stack
                sx={{ display: "flex", justifyContent: "center" }}
                direction="row"
                spacing={isMobile ? 1 : 2}
                mt={isMobile ? "-8px" : 2}
              >
                <Link href="">
                  <img src={TwitterCardIcon} alt="twitter" />{" "}
                </Link>
                <Link href="">
                  <img src={LinkedInCardIcon} alt="Linkedin" />{" "}
                </Link>
                <Link href="">
                  <img src={FacebookCardIcon} alt="Faceboom" />{" "}
                </Link>
              </Stack>
            </CardContent>
          </Card>
          <Card>
            <CustomAvatar alt="Carter" src={Carter} />
            <CardContent>
              <Typography
                gutterBottom={isMobile ? false : true}
                align="center"
                variant="h6"
              >
                Carter Botosh
                <Designation align="center" color="primary">
                  Lorem Ipsum
                </Designation>
              </Typography>
              <Stack
                sx={{ display: "flex", justifyContent: "center" }}
                direction="row"
                spacing={isMobile ? 1 : 2}
                mt={isMobile ? "-8px" : 2}
              >
                <Link href="">
                  <img src={TwitterCardIcon} alt="twitter" />{" "}
                </Link>
                <Link href="">
                  <img src={LinkedInCardIcon} alt="Linkedin" />{" "}
                </Link>
                <Link href="">
                  <img src={FacebookCardIcon} alt="Faceboom" />{" "}
                </Link>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
        <Stack
          mt={isMobile ? "9.2px" : "32px"}
          direction="row"
          spacing={isMobile ? 0.5 : 1.5}
        >
          <Card>
            <CustomAvatar alt="Leo" src={Leo} />
            <CardContent>
              <Typography
                gutterBottom={isMobile ? false : true}
                align="center"
                variant="h6"
              >
                Leo Franci
                <Designation align="center" color="primary">
                  Advisor
                </Designation>
              </Typography>
              <Stack
                sx={{ display: "flex", justifyContent: "center" }}
                direction="row"
                spacing={isMobile ? 1 : 2}
                mt={isMobile ? "-8px" : 2}
              >
                <Link href="">
                  <img src={TwitterCardIcon} alt="twitter" />{" "}
                </Link>
                <Link href="">
                  <img src={LinkedInCardIcon} alt="Linkedin" />{" "}
                </Link>
                <Link href="">
                  <img src={FacebookCardIcon} alt="Faceboom" />{" "}
                </Link>
              </Stack>
            </CardContent>
          </Card>
          <Card>
            <CustomAvatar alt="Gus" src={Gustavo} />
            <CardContent>
              <Typography
                gutterBottom={isMobile ? false : true}
                align="center"
                variant="h6"
              >
                Gustavo Carder
                <Designation align="center" color="primary">
                  Advisor
                </Designation>
              </Typography>
              <Stack
                sx={{ display: "flex", justifyContent: "center" }}
                direction="row"
                spacing={isMobile ? 1 : 2}
                mt={isMobile ? "-8px" : 2}
              >
                <Link href="">
                  <img src={TwitterCardIcon} alt="twitter" />{" "}
                </Link>
                <Link href="">
                  <img src={LinkedInCardIcon} alt="Linkedin" />{" "}
                </Link>
                <Link href="">
                  <img src={FacebookCardIcon} alt="Faceboom" />{" "}
                </Link>
              </Stack>
            </CardContent>
          </Card>
          <Card>
            <CustomAvatar alt="Kianna" src={Kianna} />
            <CardContent>
              <Typography
                gutterBottom={isMobile ? false : true}
                align="center"
                variant="h6"
              >
                Kianna Lipshutz
                <Designation align="center" color="primary">
                  Advisor
                </Designation>
              </Typography>
              <Stack
                sx={{ display: "flex", justifyContent: "center" }}
                direction="row"
                spacing={isMobile ? 1 : 2}
                mt={isMobile ? "-8px" : 2}
              >
                <Link href="">
                  <img src={TwitterCardIcon} alt="twitter" />{" "}
                </Link>
                <Link href="">
                  <img src={LinkedInCardIcon} alt="Linkedin" />{" "}
                </Link>
                <Link href="">
                  <img src={FacebookCardIcon} alt="Faceboom" />{" "}
                </Link>
              </Stack>
            </CardContent>
          </Card>
          <Card>
            <CustomAvatar alt="Marilyn" src={Marilyn} />
            <CardContent>
              <Typography
                gutterBottom={isMobile ? false : true}
                align="center"
                variant="h6"
              >
                Marilyn Culhane
                <Designation align="center" color="primary">
                  Advisor
                </Designation>
              </Typography>
              <Stack
                sx={{ display: "flex", justifyContent: "center" }}
                direction="row"
                spacing={isMobile ? 1 : 2}
                mt={isMobile ? "-8px" : 2}
              >
                <Link href="">
                  <img src={TwitterCardIcon} alt="twitter" />{" "}
                </Link>
                <Link href="">
                  <img src={LinkedInCardIcon} alt="Linkedin" />{" "}
                </Link>
                <Link href="">
                  <img src={FacebookCardIcon} alt="Faceboom" />{" "}
                </Link>
              </Stack>
            </CardContent>
          </Card>
          <Card>
            <CustomAvatar alt="Corey" src={Corey} />
            <CardContent>
              <Typography
                gutterBottom={isMobile ? false : true}
                align="center"
                variant="h6"
              >
                Corey Donin
                <Designation align="center" color="primary">
                  Advisor
                </Designation>
              </Typography>
              <Stack
                sx={{ display: "flex", justifyContent: "center" }}
                direction="row"
                spacing={isMobile ? 1 : 2}
                mt={isMobile ? "-8px" : 2}
              >
                <Link href="">
                  <img src={TwitterCardIcon} alt="twitter" />{" "}
                </Link>
                <Link href="">
                  <img src={LinkedInCardIcon} alt="Linkedin" />{" "}
                </Link>
                <Link href="">
                  <img src={FacebookCardIcon} alt="Faceboom" />{" "}
                </Link>
              </Stack>
            </CardContent>
          </Card>
          <Card>
            <CustomAvatar alt="Carter2" src={Carter2} />
            <CardContent>
              <Typography
                gutterBottom={isMobile ? false : true}
                align="center"
                variant="h6"
              >
                Carter Botosh
                <Designation align="center" color="primary">
                  Advisor
                </Designation>
              </Typography>
              <Stack
                sx={{ display: "flex", justifyContent: "center" }}
                direction="row"
                spacing={isMobile ? 1 : 2}
                mt={isMobile ? "-8px" : 2}
              >
                <Link href="">
                  <img src={TwitterCardIcon} alt="twitter" />{" "}
                </Link>
                <Link href="">
                  <img src={LinkedInCardIcon} alt="Linkedin" />{" "}
                </Link>
                <Link href="">
                  <img src={FacebookCardIcon} alt="Faceboom" />{" "}
                </Link>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </TeamMemberSection>
    </Container>
  );
};

export default Team;
