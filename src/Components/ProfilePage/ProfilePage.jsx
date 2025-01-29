import React from "react";
import {
  Avatar,
  Box,
  Card,
  Typography,
  Button,
  CardContent,
  Link,
  IconButton,
} from "@mui/material";
import tangoGameImg from "../Assets/tango-img.svg";
import queenGameImg from "../Assets/queen.svg";
import pinpointGameImg from "../Assets/pinpoint.svg";
import crossClimbGameImg from "../Assets/crossClimb.svg";
import HiringImg from "../Assets/HiringImage.png";
import CoverPhoto from "../Assets/banner.png";
import ProfilePicture from "../Assets/Sanaullah.png";
import LaunchIcon from "@mui/icons-material/Launch";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import xWaveLogo from "../Assets/xwavepak_logo.jpeg";
import certificate from "../Assets/certificate.jpeg";
import ProjectOne from "../Assets/project-img.jpeg";
import ProjectTwo from "../Assets/project-img 2.jpeg";

const ProfilePage = () => {
  return (
    <Box className="container mt-4">
      <Box className="row">
        <Box className="col-lg-8 col-md-12 mb-4">
          <Card>
            <CardContent sx={{ padding: 0 }}>
              {/* Cover Photo */}
              <Box
                sx={{
                  height: "250px",
                  backgroundColor: "#ddd",
                  backgroundImage: `url(${CoverPhoto})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <Box sx={{ paddingX: { xs: 2, md: 4 }, marginTop: "-110px" }}>
                <Avatar
                  sx={{
                    width: 150,
                    height: 150,
                    marginBottom: 2,
                    border: "3px solid #fff",
                  }}
                  src={ProfilePicture}
                />
                <Typography variant="h5" fontWeight="bold">
                  Sanaullah Larik
                </Typography>
                <Typography variant="h6" fontWeight="normal">
                  Frontend Developer | HTML5 | CSS3 | JavaScript | React.js
                </Typography>
                <Typography variant="body2" fontWeight="normal">
                  Khairpur, Sindh, Pakistan
                  <Typography
                    component="span"
                    color="primary"
                    fontWeight="bold"
                    sx={{ fontSize: "16px", marginLeft: 1 }}
                  >
                    Contact Info
                  </Typography>
                </Typography>
                <Typography
                  variant="body1"
                  color="primary"
                  fontWeight="bold"
                  mt={2}
                >
                  My Portfolio <LaunchIcon />
                </Typography>
                <Box display="flex" alignItems="center" mt={2}>
                  <Typography
                    variant="h6"
                    color="primary"
                    fontWeight="medium"
                    mr={3}
                  >
                    1,025 followers
                  </Typography>
                  <Typography variant="h6" color="primary" fontWeight="medium">
                    1,025 connections
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  marginX: 3,
                  marginTop: 3,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                <Button variant="contained" sx={{ borderRadius: "50px" }}>
                  Open to
                </Button>
                <Button variant="outlined" sx={{ borderRadius: "50px" }}>
                  Add Profile Section
                </Button>
                <Button variant="outlined" sx={{ borderRadius: "50px" }}>
                  Enhance Profile
                </Button>
                <Button variant="outlined" sx={{ borderRadius: "50px" }}>
                  Resources
                </Button>
              </Box>
              <Box className="d-flex gap-3 p-3">
                <Card
                  className="card shadow-sm"
                  style={{
                    width: "400px",
                    backgroundColor: "#E3F2FD",
                    position: "relative",
                  }}
                >
                  <CardContent>
                    <Typography variant="subtitle2" className="fw-bold">
                      Open to work
                    </Typography>
                    <Typography variant="body2">
                      Associate and Marketing Associate roles
                    </Typography>
                    <Link
                      href="#"
                      className="text-primary text-decoration-none"
                    >
                      Show details
                    </Link>
                    <IconButton
                      size="small"
                      className="position-absolute top-0 end-0 m-2"
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </CardContent>
                </Card>

                <Card
                  className="card shadow-sm"
                  style={{
                    width: "400px",
                    backgroundColor: "#F5F5F5",
                    position: "relative",
                  }}
                >
                  <CardContent>
                    <Typography variant="body2" className="fw-bold">
                      Share that you're hiring and attract qualified candidates.
                    </Typography>
                    <Link
                      href="#"
                      className="text-primary text-decoration-none"
                    >
                      Get started
                    </Link>
                    <IconButton
                      size="small"
                      className="position-absolute top-0 end-0 m-2"
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </CardContent>
                </Card>
              </Box>
            </CardContent>
          </Card>
          <Box className="col-12">
            <Card
              className="card shadow-sm mt-3"
              style={{ backgroundColor: "#FFFFFF", position: "relative" }}
            >
              <CardContent>
                <Typography variant="subtitle2" className="fw-bold">
                  Suggested for you
                </Typography>
                <Typography
                  variant="body2"
                  className="text-muted d-flex align-items-center"
                >
                  <VisibilityIcon fontSize="small" className="me-1" /> Private
                  to you
                </Typography>
                <Card
                  className="mt-2 p-3"
                  style={{ backgroundColor: "#F8F9FA" }}
                >
                  <Typography variant="body2" className="fw-bold">
                    📊 Add case studies that showcase your skills
                  </Typography>
                  <Typography variant="body2" className="text-muted">
                    Show recruiters how you put your skills to use by adding
                    projects to your profile.
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    className="mt-2 rounded-pill"
                  >
                    Add project
                  </Button>
                  <IconButton
                    size="small"
                    className="position-absolute top-0 end-0 m-2"
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Card>
              </CardContent>
            </Card>
          </Box>
          <Box className="col-12">
            <Card
              className="card shadow-sm mt-3"
              style={{ backgroundColor: "#FFFFFF", position: "relative" }}
            >
              <CardContent>
                <Typography variant="subtitle2" className="fw-bold">
                  Analytics
                </Typography>
                <Typography
                  variant="body2"
                  className="text-muted d-flex align-items-center"
                >
                  <VisibilityIcon fontSize="small" className="me-1" /> Private
                  to you
                </Typography>
                <div className="d-flex justify-content-between mt-3">
                  <div>
                    <PeopleIcon className="me-1" />
                    <Typography variant="body2" className="fw-bold">
                      74 profile views
                    </Typography>
                    <Typography variant="body2" className="text-muted">
                      Discover who's viewed your profile.
                    </Typography>
                  </div>
                  <div>
                    <BarChartIcon className="me-1" />
                    <Typography variant="body2" className="fw-bold">
                      1,452 post impressions
                    </Typography>
                    <Typography variant="body2" className="text-muted">
                      Check out who's engaging with your posts.
                    </Typography>
                    <Typography variant="caption" className="text-muted">
                      Past 7 days
                    </Typography>
                  </div>
                  <div>
                    <SearchIcon className="me-1" />
                    <Typography variant="body2" className="fw-bold">
                      5 search appearances
                    </Typography>
                    <Typography variant="body2" className="text-muted">
                      See how often you appear in search results.
                    </Typography>
                  </div>
                </div>
                <Button variant="text" className="mt-3 w-100 text-primary">
                  Show all analytics →
                </Button>
              </CardContent>
            </Card>
          </Box>
          <Box className="col-12">
            <Card
              className="card shadow-sm mt-3"
              style={{ backgroundColor: "#FFFFFF", position: "relative" }}
            >
              <CardContent>
                <Typography variant="subtitle2" className="fw-bold">
                  About
                </Typography>
                <Box className="mt-2 p-3">
                  <Typography variant="body2">
                    I am pursuing Bachelors in Medical Sciences and I am
                    currently enrolled in a 12 months Frontend Web Development
                    course with xWave, a tech initiative to eradicate poverty
                    and empower youth of Pakistan with IT courses and skills.
                    Proficient in HTML, CSS, and Bootstrap, I am successfully
                    designed 8+ websites and landing pages.
                  </Typography>
                  <Typography className="mt-2 rounded-pill">...</Typography>
                  <Typography className="position-absolute bottom-0 end-0 m-2 fw-normal">
                    ... See more
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
          <Box className="col-12">
            <Card
              className="card shadow-sm mt-3"
              style={{ backgroundColor: "#FFFFFF", position: "relative" }}
            >
              <CardContent>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <Typography variant="h6" className="fw-bold">
                    Activity
                  </Typography>
                  <Button variant="outlined" className="text-dark rounded-pill">
                    Create a post
                  </Button>
                </div>
                <Typography variant="body2" className="text-primary mb-3">
                  1,026 followers
                </Typography>

                <div className="d-flex justify-content-start mb-3">
                  <Button
                    variant="contained"
                    className="rounded-pill px-3 bg-success text-small"
                  >
                    Posts
                  </Button>
                  <Button
                    variant="outlined"
                    className="text-dark rounded-pill mx-2"
                  >
                    Comments
                  </Button>
                  <Button
                    variant="outlined"
                    className="text-dark rounded-pill mx-2"
                  >
                    Videos
                  </Button>
                  <Button
                    variant="outlined"
                    className="text-dark rounded-pill mx-2"
                  >
                    Images
                  </Button>
                  <Button
                    variant="outlined"
                    className="text-dark rounded-pill mx-2"
                  >
                    Documents
                  </Button>
                </div>

                <div className="border-bottom pb-3 mb-3">
                  <Typography variant="body2" className="fw-bold">
                    😱 Where Are Front-end Developers?
                  </Typography>
                  <Typography variant="body2" className="text-muted">
                    Most Killer Tools For Frontend Developer 💥
                  </Typography>
                  <div className="d-flex align-items-center mt-2 text-muted small">
                    <span className="me-3">826 ❤️</span>
                    <span className="me-3">29 comments</span>
                    <span>189 reposts</span>
                  </div>
                  <Typography
                    variant="caption"
                    className="text-muted mt-1 d-block"
                  >
                    1w
                  </Typography>
                </div>

                <div className="border-bottom pb-3 mb-3">
                  <Typography variant="body2" className="fw-bold">
                    🌟 Just Built a Simple QR Code Generator! 🌟
                  </Typography>
                  <Typography variant="body2" className="text-muted">
                    Hey connections, I'm thrilled to share this quick project I
                    created - a QR Code Generator using HTML, CSS, and
                    JavaScript!
                  </Typography>
                  <div className="d-flex align-items-center mt-2 text-muted small">
                    <span className="me-3">26 ❤️</span>
                    <span className="me-3">22 comments</span>
                    <span>1 repost</span>
                  </div>
                  <Typography
                    variant="caption"
                    className="text-muted mt-1 d-block"
                  >
                    1w
                  </Typography>
                </div>
                <div className="border-bottom pb-3 mb-3">
                  <Typography variant="body2" className="fw-bold">
                    🌟 Generate and Copy Random Secure Passwords with JavaScript
                    🌟
                  </Typography>
                  <Typography variant="body2" className="text-muted">
                    I recently worked on a small JavaScript project to create a
                    random password generator. Here's how it works!
                  </Typography>
                  <div className="d-flex align-items-center mt-2 text-muted small">
                    <span className="me-3">32 ❤️</span>
                    <span className="me-3">20 comments</span>
                    <span>2 reposts</span>
                  </div>
                  <Typography
                    variant="caption"
                    className="text-muted mt-1 d-block"
                  >
                    2w
                  </Typography>
                </div>
                <Button variant="text" className="mt-3 w-100 text-dark">
                  Show all posts →
                </Button>
              </CardContent>
            </Card>
          </Box>
          <Box className="col-12">
            <Card
              className="shadow-sm mt-3 border"
              style={{ backgroundColor: "#FFFFFF", position: "relative" }}
            >
              <CardContent>
                <Box className="d-flex justify-content-between align-items-center mb-3">
                  <Typography variant="h6" className="fw-bold">
                    Experience
                  </Typography>
                  <Box>
                    <IconButton size="small">
                      <AddIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small">
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>

                <div className="d-flex">
                  <img
                    src={xWaveLogo}
                    alt="xWave Logo"
                    className="me-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "4px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <Typography variant="subtitle1" className="fw-bold">
                      Frontend Development Fellow
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-muted"
                      style={{ marginBottom: "4px" }}
                    >
                      xWave • Apprenticeship
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-muted"
                      style={{ marginBottom: "8px" }}
                    >
                      Jan 2024 - Present • 1 yr 1 mo
                    </Typography>
                    <Typography variant="body2" className="text-muted">
                      Khairpur District, Sindh, Pakistan • On-site
                    </Typography>

                    <Typography
                      variant="body2"
                      className="mt-2"
                      style={{ color: "#5f5f5f", lineHeight: "1.5" }}
                    >
                      Currently undertaking a 12-month front-end web development
                      apprenticeship program, gaining in-depth knowledge of
                      HTML5, CSS3, Bootstrap 5, JavaScript, and ReactJS.
                      Designed 3 capstone projects and collaborated in a team
                      environment.{" "}
                      <span style={{ color: "#1976d2", cursor: "pointer" }}>
                        ...see more
                      </span>
                    </Typography>

                    <div className="d-flex align-items-center mt-2">
                      <Typography
                        variant="body2"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          color: "#5f5f5f",
                        }}
                      >
                        <span className="me-1" style={{ fontSize: "14px" }}>
                          &#128204;
                        </span>
                        HTML5, CSS and +6 skills
                      </Typography>
                    </div>
                    <Box className="d-flex align-items-center mt-3">
                      <img
                        src={certificate}
                        alt="Certificate"
                        style={{
                          width: "100px",
                          height: "60px",
                          borderRadius: "4px",
                          objectFit: "cover",
                          marginRight: "8px",
                        }}
                      />
                      <Typography variant="body2" className="fw-bold">
                        xWAVE DEV WAR
                      </Typography>
                    </Box>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Box>
          <Box className="col-12">
            <Card
              className="card shadow-sm mt-3"
              style={{ backgroundColor: "#FFFFFF", position: "relative" }}
            >
              <CardContent>
                <div className="d-flex justify-content-between align-items-center">
                  <Typography variant="subtitle2" className="fw-bold">
                    Education
                  </Typography>
                  <div>
                    <IconButton size="small">
                      <AddIcon />
                    </IconButton>
                    <IconButton size="small">
                      <EditIcon />
                    </IconButton>
                  </div>
                </div>
                <div className="d-flex align-items-start mt-3">
                  <img
                    src={xWaveLogo}
                    alt="College Logo"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "4px",
                      objectFit: "cover",
                      marginRight: "16px",
                    }}
                  />
                  <div>
                    <Typography variant="body2" className="fw-bold">
                      Government Boys Degree College, Pir Jo Goth
                    </Typography>
                    <Typography variant="body2" className="text-muted">
                      Bachelor of Sciences
                    </Typography>
                    <Typography variant="caption" className="text-muted">
                      Jan 2024 - Jan 2026
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Box>
          <Box className="col-12">
            <Card
              className="card shadow-sm mt-3"
              style={{ backgroundColor: "#FFFFFF", position: "relative" }}
            >
              <CardContent>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <Typography variant="h6" className="fw-bold">
                    Projects
                  </Typography>
                  <div>
                    <IconButton size="small">
                      <AddIcon />
                    </IconButton>
                    <IconButton size="small">
                      <EditIcon />
                    </IconButton>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <div>
                    <Typography variant="subtitle1" className="fw-bold">
                      Leganic Website
                    </Typography>
                    <Typography variant="body2" className="text-muted">
                      Oct 2024 - Oct 2024
                    </Typography>
                    <Typography variant="body2" className="mt-1">
                      - Created a responsive e-commerce website using HTML5,
                      CSS3, and JavaScript. Key features include a carousel,
                      add-to-cart functionality, form validation, and
                      sign-up/login functionality with local storage.
                    </Typography>
                    <Box className="d-flex align-items-center">
                      <img
                        src={ProjectOne}
                        alt="Leganic Website"
                        style={{
                          width: "110px",
                          height: "60px",
                          borderRadius: "4px",
                          objectFit: "cover",
                          marginRight: "16px",
                        }}
                      />
                      <Typography className="mt-2 rounded-pill">
                        Capstone Project 3
                      </Typography>
                    </Box>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <div>
                    <Typography variant="subtitle1" className="fw-bold">
                      Business Website
                    </Typography>
                    <Typography variant="body2" className="text-muted">
                      Jul 2024 - Jul 2024
                    </Typography>
                    <Typography variant="body2" className="mt-1">
                      - Invested over 7 days to create a business landing page
                      based on a Figma design, utilising HTML5, CSS3, and
                      Bootstrap 5. Incorporated hover effects, shadowing,
                      positioning, and gradient colours.
                    </Typography>
                    <Typography
                      variant="caption"
                      className="text-muted d-block mt-1"
                    >
                      Associated with xWave
                    </Typography>
                    <Typography
                      variant="outlined"
                      size="small"
                      className="mt-2 rounded-pill"
                    >
                      HTML5, CSS +1 Skill
                    </Typography>
                  </div>
                </div>
                <Box className="d-flex align-items-center">
                  <img
                    src={ProjectTwo}
                    alt="Leganic Website"
                    style={{
                      width: "110px",
                      height: "60px",
                      borderRadius: "4px",
                      objectFit: "cover",
                      marginRight: "16px",
                    }}
                  />
                  <Typography className="mt-2 rounded-pill">
                    Business Website
                  </Typography>
                </Box>
                <Button variant="text" className="mt-3 w-100 text-dark">
                  Show all 4 projects →
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Right Section */}
        <Box className="col-lg-4 col-md-12">
          <Box
            sx={{
              padding: 3,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              backgroundColor: "white",
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Today’s Puzzle Games
            </Typography>
            {[
              {
                img: tangoGameImg,
                title: "Crossclimb",
                desc: "Harmonize the Grid",
              },
              {
                img: queenGameImg,
                title: "Queens",
                desc: "Crown each region",
              },
              {
                img: pinpointGameImg,
                title: "Pinpoint",
                desc: "Guess the Category",
              },
              {
                img: crossClimbGameImg,
                title: "Crossclimb",
                desc: "Unlock a trivia ladder",
              },
            ].map((game, idx) => (
              <Box display="flex" alignItems="center" key={idx}>
                <img
                  src={game.img}
                  alt={game.title}
                  style={{ width: "30px", height: "auto" }}
                />
                <Box ml={3}>
                  <Typography variant="body1" fontWeight="medium">
                    {game.title}
                  </Typography>
                  <Typography>{game.desc}</Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <Card sx={{ borderRadius: 3, boxShadow: 1, marginTop: 3 }}>
            <CardContent sx={{ padding: 0 }}>
              <img
                className="w-100"
                src={HiringImg}
                alt="Hiring"
                style={{ borderRadius: "12px 12px 0 0" }}
              />
              <Box padding={2}>
                <Typography fontWeight="bold" variant="h6">
                  See who's hiring on LinkedIn.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
