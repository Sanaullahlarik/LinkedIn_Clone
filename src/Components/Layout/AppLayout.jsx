import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import SearchIcon from "@mui/icons-material/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import { Avatar, Box} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import AppsIcon from "@mui/icons-material/Apps";
import CasinoIcon from "@mui/icons-material/Casino";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ProfilePicture from "../Assets/Sanaullah.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#eef3f8",
  "&:hover": {
    backgroundColor: alpha("#eef3f8", 0.9),
  },
  width: "100%",
  maxWidth: "280px",
  display: "flex",
  alignItems: "center",
  padding: "0 10px",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

const SearchIconWrapper = styled("div")(() => ({
  height: "100%",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#666",
}));

const StyledInputBase = styled(InputBase)(() => ({
  color: "#000",
  fontSize: "0.875rem",
  "& .MuiInputBase-input": {
    padding: "8px 55px",
    width: "100%",
  },
}));

export default function LinkedInHeader() {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#ffffff",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar className="container d-flex justify-content-between align-items-center py-1">
        <div className="d-flex align-items-center">
          <Box>
            <LinkedInIcon
              className="d-none d-sm-block"
              style={{ fontSize: "2.5rem", color: "#0077b5" }}
            />
          </Box>
          <Box className="d-block d-sm-none">
            <Avatar alt="Sanaullah" src={ProfilePicture} />
          </Box>
          <Search className="" style={{ flexGrow: 1, maxWidth: "400px" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ "label": "search" }}
            />
          </Search>
        </div>

        <Box className="d-flex align-items-center" style={{ gap: "30px" }}>
          <Box className="d-flex flex-column align-items-center text-center d-none d-md-block">
            <IconButton color="inherit">
              <Badge color="error" variant="dot">
                <HomeIcon style={{ color: "#000", fontSize: "30px" }} />
              </Badge>
            </IconButton>
            <span
              className="text-dark d-none d-md-block"
              style={{ fontSize: "12px" }}
            >
              Home
            </span>
          </Box>

          <Box className="d-flex flex-column align-items-center text-center d-none d-md-block">
            <IconButton color="inherit">
              <PeopleIcon style={{ color: "#666", fontSize: "30px" }} />
            </IconButton>
            <span
              className="text-dark d-none d-md-block"
              style={{ fontSize: "12px" }}
            >
              Network
            </span>
          </Box>

          <Box className="d-flex flex-column align-items-center text-center d-none d-md-block">
            <IconButton color="inherit">
              <WorkIcon style={{ color: "#666", fontSize: "30px" }} />
            </IconButton>
            <span
              className="text-dark d-none d-md-block"
              style={{ fontSize: "12px" }}
            >
              Jobs
            </span>
          </Box>
          <Box className="d-flex flex-column align-items-center text-center">
            <IconButton color="inherit">
              <MessageIcon style={{ color: "#666", fontSize: "30px" }} />
            </IconButton>
            <span className="text-dark d-none d-md-block" style={{ fontSize: "0.75rem" }}>
                Messaging
              </span>
          </Box>
          <Box className="d-flex flex-column align-items-center text-center d-none d-md-block">
            <IconButton color="inherit">
              <Badge color="error" badgeContent={5}>
                <NotificationsIcon
                  style={{ color: "#666", fontSize: "30px" }}
                />
              </Badge>
            </IconButton>
            <span
              className="text-dark d-none d-md-block"
              style={{ fontSize: "12px" }}
            >
              Notifications
            </span>
          </Box>
          <Box className="d-flex flex-column align-items-center text-center d-none d-md-block">
            <IconButton>
              <Avatar
                alt="Sanaullah"
                src={ProfilePicture}
                sx={{ width: 30, height: 30 }}
              />
            </IconButton>
            <span
              className="text-dark d-none d-md-block"
              style={{ fontSize: "12px" }}
            >
              Me
            </span>
          </Box>

          <Box className="d-flex flex-column align-items-center text-center d-none d-lg-block">
            <IconButton color="inherit">
              <AppsIcon style={{ color: "#666", fontSize: "30px" }} />
            </IconButton>
            <span
              className="text-dark d-none d-md-block"
              style={{ fontSize: "12px" }}
            >
              For Business
            </span>
          </Box>

          <Box className="d-flex flex-column align-items-center text-center d-none d-lg-block">
            <IconButton color="inherit">
              <CasinoIcon style={{ color: "#666", fontSize: "30px" }} />
            </IconButton>
            <span
              className="text-dark d-none d-md-block"
              style={{ fontSize: "12px" }}
            >
              Try Sales Navigator
            </span>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
