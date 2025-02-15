import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Button,
  Box,
  Avatar,
  AvatarGroup,
} from "@mui/material";
import {
  Close,
} from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MyProfile from "../../Assets/Sanaullah.jpg";
import JobsImg1 from "../../Assets/spiralyze_logo.jpeg";
import JobSimg2 from "../../Assets/wizdaa_logo.jpeg";
import JobsImg3 from "../../Assets/daily_tech_sol_logo.jpeg";
import JobsImg4 from "../../Assets/ibex.jpeg";
import JobsImg5 from "../../Assets/hybrid_mediaworks_logo.jpeg";
import JobsImg6 from "../../Assets/aagco_logo.jpeg";
import JobsImg7 from "../../Assets/pakistan_hirings_logo.jpeg";
import JobsImg8 from "../../Assets/turingcom_logo.jpeg";
import JobsImg9 from "../../Assets/time_doctor_logo.jpeg";
import JobsImg10 from "../../Assets/soum_sa_logo.jpeg";
import JobsImg11 from "../../Assets/motive_inc_logo.jpeg";
import JobsImg12 from "../../Assets/contoursoftware_logo.jpeg";
import JobsImg13 from "../../Assets/reliabilityacademy_logo.jpeg";
import JobsImg14 from "../../Assets/afiniti_com_logo.jpeg";
import JobsImg15 from "../../Assets/tekrevol_logo.jpeg";
import JobsImg16 from "../../Assets/nymcard_logo.jpeg";
import JobsImg17 from "../../Assets/kalpayfinancials_logo.jpeg";
import JobsImg18 from "../../Assets/veripark_logo.jpeg";
import JobsImg19 from "../../Assets/azure.jpeg";
import JobsImg20 from "../../Assets/solutioninn_logo.jpeg";
import Avatar1 from "../../Assets/syed ommer.jpeg";
import Avatar2 from "../../Assets/mudassir.png";

const JobsRightSection = () => {
  return (
    <>
    <Box
      className="d-flex justify-content-between flex-column gap-4"
      style={{ maxWidth: "900px" }}
    >
      <Card className="rounded-3 shadow px-5 py-3 d-none d-lg-block">
        <Typography variant="h6" className="fw-bold">
          Job picks for you
        </Typography>
        <Typography variant="body2" color="textSecondary" className="mb-3">
          Based on your profile, preferences, and activity like applies,
          searches, and saves
        </Typography>

        <List>
          <ListItem className="d-flex align-items-centr justify-content-between">
            <Box className="d-flex align-items-center">
              <Box className="me-3">
                <img width="60px" src={JobSimg2} alt="Job Logo" />
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  color="primary"
                  className="fw-bold"
                >
                  Full Stack Developer
                </Typography>
                <Typography variant="body2">
                  Zedcom Corporation · Karachi, Sindh, Pakistan (On-site)
                </Typography>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  className="d-block"
                >
                  Promoted · Easy Apply
                </Typography>
              </Box>
            </Box>
            <Button size="small">
              <Close fontSize="small" />
            </Button>
          </ListItem>
          <hr />
          <ListItem className="d-flex align-items-centr justify-content-between">
            <Box className="d-flex align-items-center">
              <Box className="me-3">
                <img width="60px" src={JobsImg1} alt="Job Logo" />
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  color="primary"
                  className="fw-bold"
                >
                  Frontend Developer
                </Typography>
                <Typography variant="body2">
                  GT Ecom · Pakistan (Remote)
                </Typography>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  className="d-block"
                >
                  4 months ago
                </Typography>
              </Box>
            </Box>
            <Button size="small">
              <Close fontSize="small" />
            </Button>
          </ListItem>
        </List>
        <hr />
        <Box className="d-flex justify-content-center">
          <Button variant="outlined" className="fw-bold">
            Show all <ArrowForwardIcon />
          </Button>
        </Box>
      </Card>
      <Card className="rounded-3 shadow px-5 py-3 d-none d-lg-block">
        <Box className="d-flex justify-content-between align-items-center">
          <Typography variant="h6" className="fw-bold mb-2">
            Recent job searches
          </Typography>
          <Typography variant="body1">Clear</Typography>
        </Box>
        <Box>
          <Typography variant="body1" className="fw-bold">
            student .{" "}
            <span className="text-primary" sx={{ fontSize: "12px" }}>
              136 new
            </span>
          </Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            className="d-block"
          >
            Alert On · Lahore, Punjab, Pakistan · On-site · Remote · Hybrid
          </Typography>
        </Box>
        <hr />
        <Box>
          <Typography variant="body1" className="fw-bold">
            frontend developer intern .{" "}
            <span className="text-primary">158 new</span>
          </Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            className="d-block"
          >
            Pakistan
          </Typography>
        </Box>
      </Card>
      <Card className="rounded-3 shadow mb-2 px-5 py-3 d-none d-lg-block">
        <Box>
          <Typography variant="body1">PREMIUM</Typography>
          <Typography variant="h6" className="fw-bold my-1">
            Jobs where you’re more likely to hear back
          </Typography>
          <Typography variant="body1">
            Based on your chances of hearing back
          </Typography>
        </Box>
        <Box className="mt-3 d-flex">
          <Avatar className="me-3" src={MyProfile} alt="Profile" />
          <Box>
            <Typography variant="body2">
              See the full list of jobs where you’d be a top applicant
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "flex-start", mb: 1 }}
            >
              <AvatarGroup
                spacing="26"
                sx={{
                  justifyContent: "flex-start",
                }}
              >
                <Avatar src={MyProfile} />
                <Avatar src={Avatar1} />
                <Avatar src={Avatar2} />
              </AvatarGroup>
            </Box>
            <Button size="small" variant="outlined">
              Try Premium for PKR0
            </Button>
            <Typography variant="body2">
              1-month free trial. We’ll send you a reminder 7 days before your
              trial ends.
            </Typography>
          </Box>
        </Box>
        <hr />
        <Box className="mt-3 d-flex ">
          <img width="60px" className="me-3" src={JobsImg1} alt="Jobs" />
          <Box>
            <Typography variant="body1" className="text-primary fw-bold">
              Associate Frontend Engineer (Fresh Graduates)
            </Typography>
            <Typography variant="body2">
              Soft tech Worldwide - Karachi Division, Sindh, Pakistan (On-site)
            </Typography>
            <Typography variant="caption">6 months ago</Typography>
          </Box>
        </Box>
        <Box>
          <hr />
          <Box className="mt-3 d-flex ">
            <img width="60px" className="me-3" src={JobsImg1} alt="Jobs" />
            <Box>
              <Typography variant="body1" className="text-primary fw-bold">
                UI / Front-End Developer
              </Typography>
              <Typography variant="body2">
                Soliton Technologies - Lahore, Punjab, Pakistan (On-site)
              </Typography>
              <Typography variant="caption">1 week ago</Typography>
            </Box>
          </Box>
          <hr />
          <Box className="d-flex justify-content-center">
            <Button variant="outlined" className="fw-bold">
              Show all <ArrowForwardIcon />
            </Button>
          </Box>
        </Box>
      </Card>
      <Card className="rounded-3 shadow px-5 py-3 d-none d-lg-block">
        <CardContent>
          <Typography variant="h6" className="fw-bold">
            Hiring in your network
          </Typography>
          <Typography className="text-secondary" variant="body2">
            Jobs that people in your network are hiring for
          </Typography>
          <hr />
          <Box className="d-flex align-items-start mb-4">
            <Box className="me-3">
              <img width="60" src={JobsImg3} alt="" />
            </Box>
            <Box>
              <Typography
                variant="body1"
                style={{ fontWeight: "bold", color: "#0073b1" }}
              >
                Dotnet Developerr
              </Typography>
              <Typography variant="body2" style={{ color: "#555" }}>
                Daily Tech Sol · Karachi Division, Sindh, Pakistan (On-site)
              </Typography>
              <Typography variant="body2" style={{ color: "#777" }}>
                Karachi Division, Sindh, Pakistan (On-site)
              </Typography>
              <Box
                sx={{ display: "flex", justifyContent: "flex-start", mb: 1 }}
              >
                <AvatarGroup
                  spacing="26"
                  sx={{
                    justifyContent: "flex-start",
                  }}
                >
                  <Avatar alt="Kashif" src={Avatar2} />
                  <Avatar alt="Sanaullah" src={MyProfile} />
                  <Avatar alt="Tabish" src={Avatar1} />
                </AvatarGroup>
              </Box>
              <Typography
                variant="caption"
                style={{ color: "#888", marginTop: "4px" }}
              >
                Viewed Promoted Easy Apply
              </Typography>
            </Box>
            <Button
              size="small"
              style={{
                color: "#555",
                textTransform: "none",
                marginLeft: "auto", // Push the button to the end
              }}
            >
              ✖
            </Button>
          </Box>
          <hr />
          <Box className="d-flex align-items-start mb-4">
            <Box className="me-3">
              <img width="60" src={JobsImg4} alt="" />
            </Box>
            <Box>
              <Typography
                variant="body1"
                style={{ fontWeight: "bold", color: "#0073b1" }}
              >
                Frontend Developer
              </Typography>
              <Typography variant="body2" style={{ color: "#555" }}>
                ibex · Karāchi, Sindh, Pakistan (On-site)
              </Typography>
              <Typography variant="body2" style={{ color: "#777" }}>
                Karāchi, Sindh, Pakistan (On-site)
              </Typography>
              <Box
                sx={{ display: "flex", justifyContent: "flex-start", mb: 1 }}
              >
                <AvatarGroup
                  spacing="26"
                  sx={{
                    justifyContent: "flex-start",
                  }}
                >
                  <Avatar alt="Tabish" src={Avatar1} />
                  <Avatar alt="Kashif" src={Avatar2} />
                  <Avatar alt="Sanaullah" src={MyProfile} />
                </AvatarGroup>
              </Box>
              <Typography
                variant="caption"
                style={{ color: "#888", marginTop: "4px" }}
              >
                Viewed Promoted Easy Apply
              </Typography>
            </Box>
            <Button
              size="small"
              style={{
                color: "#555",
                textTransform: "none",
                marginLeft: "auto",
              }}
            >
              ✖
            </Button>
          </Box>
          <hr />
          <Box className="d-flex align-items-start mb-4">
            <Box className="me-3">
              <img width="60" src={JobsImg5} alt="" />
            </Box>
            <Box>
              <Typography
                variant="body1"
                style={{ fontWeight: "bold", color: "#0073b1" }}
              >
                Full Stack Developer (Laravel+Vue.js)
              </Typography>
              <Typography variant="body2" style={{ color: "#555" }}>
                Hybrid Mediaworks · Islamabad, Islāmābād, Pakistan (On-site)
              </Typography>
              <Typography variant="body2" style={{ color: "#777" }}>
                Islamabad, Islāmābād, Pakistan (On-site)
              </Typography>
              <Box
                sx={{ display: "flex", justifyContent: "flex-start", mb: 1 }}
              >
                <AvatarGroup
                  spacing="26"
                  sx={{
                    justifyContent: "flex-start",
                  }}
                >
                  <Avatar alt="Sanaullah" src={MyProfile} />
                  <Avatar alt="Tabish" src={Avatar1} />
                  <Avatar alt="Kashif" src={Avatar2} />
                </AvatarGroup>
              </Box>
              <Typography
                variant="caption"
                style={{ color: "#888", marginTop: "4px" }}
              >
                Promoted Easy Apply
              </Typography>
            </Box>
            <Button
              size="small"
              style={{
                color: "#555",
                textTransform: "none",
                marginLeft: "auto", // Push the button to the end
              }}
            >
              ✖
            </Button>
          </Box>
          <hr />
          <Box className="d-flex justify-content-center">
            <Button variant="outlined" className="fw-bold">
              Show all <ArrowForwardIcon />
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Card className="rounded-3 shadow mb-2 px-5 py-3 mb-4">
        <Box className="mb-4">
          <Typography variant="h6" className="fw-bold">
            More jobs for you
          </Typography>
          <Typography className="text-secondary" variant="body2">
            Based on your profile, preferences, and activity like applies,
            searches, and saves
          </Typography>
        </Box>
        <Box className="d-flex align-items-start mb-4">
          <Box className="me-3">
            <img width="60" src={JobsImg6} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", color: "#0073b1" }}
            >
              Node.js Developer
            </Typography>
            <Typography variant="body2" style={{ color: "#555" }}>
              AAG · Pakistan (Remote)
            </Typography>
            <Typography variant="body2" style={{ color: "#777" }}>
              Pakistan (Remote)
            </Typography>
            <Typography variant="caption">2 weeks ago</Typography>
          </Box>
          <Button
            size="small"
            style={{
              color: "#555",
              textTransform: "none",
              marginLeft: "auto", // Push the button to the end
            }}
          >
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className="me-3">
            <img width="60" src={JobsImg7} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", color: "#0073b1" }}
            >
              Full Stack Developer
            </Typography>
            <Typography variant="body2" style={{ color: "#555" }}>
              Pakistan Hiring · Karāchi, Sindh, Pakistan
            </Typography>
            <Typography variant="body2" style={{ color: "#777" }}>
              Karāchi, Sindh, Pakistan
            </Typography>
            <Typography
              variant="caption"
              style={{ color: "#888", marginTop: "4px" }}
            >
              3 weeks ago
            </Typography>
          </Box>
          <Button
            size="small"
            style={{
              color: "#555",
              textTransform: "none",
              marginLeft: "auto", // Push the button to the end
            }}
          >
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className="me-3">
            <img width="60" src={JobsImg8} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", color: "#0073b1" }}
            >
              Remote Python Developer
            </Typography>
            <Typography variant="body2" style={{ color: "#555" }}>
              Turing · Pakistan (Remote)
            </Typography>
            <Typography variant="body2" style={{ color: "#777" }}>
              Pakistan (Remote)
            </Typography>
            <Typography
              variant="caption"
              style={{ color: "#888", marginTop: "4px" }}
            >
              Viewed Promoted
            </Typography>
          </Box>
          <Button
            size="small"
            style={{
              color: "#555",
              textTransform: "none",
              marginLeft: "auto", // Push the button to the end
            }}
          >
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className="me-3">
            <img width="60" src={JobsImg9} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", color: "#0073b1" }}
            >
              Full Stack Engineer
            </Typography>
            <Typography variant="body2" style={{ color: "#555" }}>
              Time Doctor · Pakistan (Remote)
            </Typography>
            <Typography variant="body2" style={{ color: "#777" }}>
              Pakistan (Remote)
            </Typography>
            <Typography
              variant="caption"
              style={{ color: "#888", marginTop: "4px" }}
            >
              Viewed Promoted
            </Typography>
          </Box>
          <Button
            size="small"
            style={{
              color: "#555",
              textTransform: "none",
              marginLeft: "auto", // Push the button to the end
            }}
          >
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className="me-3">
            <img width="60" src={JobsImg10} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", color: "#0073b1" }}
            >
              Backend Software Engineer
            </Typography>
            <Typography variant="body2" style={{ color: "#555" }}>
              Soum · Pakistan (Remote)
            </Typography>
            <Typography variant="body2" style={{ color: "#777" }}>
              Pakistan (Remote)
            </Typography>
            <Typography
              variant="caption"
              style={{ color: "#888", marginTop: "4px" }}
            >
              1 month ago Easy Apply
            </Typography>
          </Box>
          <Button
            size="small"
            style={{
              color: "#555",
              textTransform: "none",
              marginLeft: "auto", // Push the button to the end
            }}
          >
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className="me-3">
            <img width="60" src={JobsImg11} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", color: "#0073b1" }}
            >
              Software Engineer, MLOps
            </Typography>
            <Typography variant="body2" style={{ color: "#555" }}>
              Motive · Pakistan (Remote)
            </Typography>
            <Typography variant="body2" style={{ color: "#777" }}>
              Pakistan (Remote)
            </Typography>
            <Typography
              variant="caption"
              style={{ color: "#888", marginTop: "4px" }}
            >
              1 connection works here Promoted
            </Typography>
          </Box>
          <Button
            size="small"
            style={{
              color: "#555",
              textTransform: "none",
              marginLeft: "auto", // Push the button to the end
            }}
          >
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className="me-3">
            <img width="60" src={JobsImg4} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", color: "#0073b1" }}
            >
              Mobile Application Developer
            </Typography>
            <Typography variant="body2" style={{ color: "#555" }}>
              ibex · Lahore, Punjab, Pakistan (On-site)
            </Typography>
            <Typography variant="body2" style={{ color: "#777" }}>
              Lahore, Punjab, Pakistan (On-site)
            </Typography>
            <Typography
              variant="caption"
              style={{ color: "#888", marginTop: "4px" }}
            >
              Promoted Easy Apply
            </Typography>
          </Box>
          <Button
            size="small"
            style={{
              color: "#555",
              textTransform: "none",
              marginLeft: "auto", // Push the button to the end
            }}
          >
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className="me-3">
            <img width="60" src={JobsImg12} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", color: "#0073b1" }}
            >
              Software Developer
            </Typography>
            <Typography variant="body2" style={{ color: "#555" }}>
              Contour Software · Karāchi, Sindh, Pakistan (On-site)
            </Typography>
            <Typography variant="body2" style={{ color: "#777" }}>
              Karāchi, Sindh, Pakistan (On-site)
            </Typography>
            <Typography
              variant="caption"
              style={{ color: "#888", marginTop: "4px" }}
            >
              4 months ago
            </Typography>
          </Box>
          <Button
            size="small"
            style={{
              color: "#555",
              textTransform: "none",
              marginLeft: "auto", // Push the button to the end
            }}
          >
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className="me-3">
            <img width="60" src={JobsImg13} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", color: "#0073b1" }}
            >
              Senior Developer
            </Typography>
            <Typography variant="body2" style={{ color: "#555" }}>
              Reliability Academy · Pakistan (Remote)
            </Typography>
            <Typography variant="body2" style={{ color: "#777" }}>
              Pakistan (Remote)
            </Typography>
            <Typography
              variant="caption"
              style={{ color: "#888", marginTop: "4px" }}
            >
              Promoted
            </Typography>
          </Box>
          <Button
            size="small"
            style={{
              color: "#555",
              textTransform: "none",
              marginLeft: "auto", // Push the button to the end
            }}
          >
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className="me-3">
            <img width="60" src={JobsImg14} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", color: "#0073b1" }}
            >
              Lead Sharepoint and MS365 Engineer
            </Typography>
            <Typography variant="body2" style={{ color: "#555" }}>
              Afiniti · Karachi Division, Sindh, Pakistan (Hybrid)
            </Typography>
            <Typography variant="body2" style={{ color: "#777" }}>
              Karachi Division, Sindh, Pakistan (Hybrid)
            </Typography>
            <Typography
              variant="caption"
              style={{ color: "#888", marginTop: "4px" }}
            >
              Promoted
            </Typography>
          </Box>
          <Button
            size="small"
            style={{
              color: "#555",
              textTransform: "none",
              marginLeft: "auto", // Push the button to the end
            }}
          >
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className="me-3">
            <img width="60" src={JobsImg15} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", color: "#0073b1" }}
            >
              React Native Developer
            </Typography>
            <Typography variant="body2" style={{ color: "#555" }}>
              TekRevol · Karāchi, Sindh, Pakistan (On-site)
            </Typography>
            <Typography variant="body2" style={{ color: "#777" }}>
              Karāchi, Sindh, Pakistan (On-site)
            </Typography>
            <Typography
              variant="caption"
              style={{ color: "#888", marginTop: "4px" }}
            >
              1 connection works here Viewed Easy Apply
            </Typography>
          </Box>
          <Button
            size="small"
            style={{
              color: "#555",
              textTransform: "none",
              marginLeft: "auto", // Push the button to the end
            }}
          >
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className="me-3">
            <img width="60" src={JobsImg16} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", color: "#0073b1" }}
            >
              Android Developer
            </Typography>
            <Typography variant="body2" style={{ color: "#555" }}>
              NymCard · Karāchi, Sindh, Pakistan (On-site)
            </Typography>
            <Typography variant="body2" style={{ color: "#777" }}>
              Karāchi, Sindh, Pakistan (On-site)
            </Typography>
            <Typography
              variant="caption"
              style={{ color: "#888", marginTop: "4px" }}
            >
              3 months ago
            </Typography>
          </Box>
          <Button
            size="small"
            style={{
              color: "#555",
              textTransform: "none",
              marginLeft: "auto", // Push the button to the end
            }}
          >
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className="me-3">
            <img width="60" src={JobsImg17} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", color: "#0073b1" }}
            >
              Senior Blockchain Developer
            </Typography>
            <Typography variant="body2" style={{ color: "#555" }}>
              KalPay · Lahore, Punjab, Pakistan (Hybrid)
            </Typography>
            <Typography variant="body2" style={{ color: "#777" }}>
              Lahore, Punjab, Pakistan (Hybrid)
            </Typography>
            <Typography
              variant="caption"
              style={{ color: "#888", marginTop: "4px" }}
            >
              Applicant review time is typically 1 day 2 weeks ago Easy Apply
            </Typography>
          </Box>
          <Button
            size="small"
            style={{
              color: "#555",
              textTransform: "none",
              marginLeft: "auto", // Push the button to the end
            }}
          >
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className="me-3">
            <img width="60" src={JobsImg18} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", color: "#0073b1" }}
            >
              Senior Software Developer .NET + Angular
            </Typography>
            <Typography variant="body2" style={{ color: "#555" }}>
              VeriPark · Pakistan (Remote)
            </Typography>
            <Typography variant="body2" style={{ color: "#777" }}>
              Pakistan (On-site)
            </Typography>
            <Typography
              variant="caption"
              style={{ color: "#888", marginTop: "4px" }}
            >
              Promoted
            </Typography>
          </Box>
          <Button
            size="small"
            style={{
              color: "#555",
              textTransform: "none",
              marginLeft: "auto", // Push the button to the end
            }}
          >
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className="me-3">
            <img width="60" src={JobsImg19} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", color: "#0073b1" }}
            >
              Software EngineerFULL TIME
            </Typography>
            <Typography variant="body2" style={{ color: "#555" }}>
              SolutionInn · Lahore, Punjab, Pakistan (On-site)
            </Typography>
            <Typography variant="body2" style={{ color: "#777" }}>
              Lahore, Punjab, Pakistan (On-site)
            </Typography>
            <Typography
              variant="caption"
              style={{ color: "#888", marginTop: "4px" }}
            >
              Viewed
            </Typography>
          </Box>
          <Button
            size="small"
            style={{
              color: "#555",
              textTransform: "none",
              marginLeft: "auto", // Push the button to the end
            }}
          >
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className="me-3">
            <img width="60" src={JobsImg20} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", color: "#0073b1" }}
            >
              React Native Developer
            </Typography>
            <Typography variant="body2" style={{ color: "#555" }}>
              TekRevol · Karāchi, Sindh, Pakistan (On-site)
            </Typography>
            <Typography variant="body2" style={{ color: "#777" }}>
              Karāchi, Sindh, Pakistan (On-site)
            </Typography>
            <Typography
              variant="caption"
              style={{ color: "#888", marginTop: "4px" }}
            >
              1 connection works here Viewed Easy Apply
            </Typography>
          </Box>
          <Button
            size="small"
            style={{
              color: "#555",
              textTransform: "none",
              marginLeft: "auto",
            }}
          >
            ✖
          </Button>
        </Box>
      </Card>
    </Box>
  </>

  )
}

export default JobsRightSection;