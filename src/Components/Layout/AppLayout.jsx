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
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import AppsIcon from "@mui/icons-material/Apps";
import CasinoIcon from "@mui/icons-material/Casino";
import NotificationsIcon from "@mui/icons-material/Notifications";

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
      className="py-1"
      position="static"
      style={{ backgroundColor: "#ffffff" }}
    >
      <Toolbar className="container">
        <div className="d-flex align-items-center justifyContent-center">
          <LinkedInIcon style={{ fontSize: "3rem", color: "#0077b5" }} />
        </div>

        <Search className="ms-3 flex-grow-1">
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <Box className="d-flex" style={{ marginLeft: "100px" }}>
          <Box className="text-center mx-2">
            <IconButton color="inherit">
              <Badge color="error" variant="dot">
                <HomeIcon
                  className=""
                  style={{ color: "#000", fontSize: "34px" }}
                />
              </Badge>
            </IconButton>
            <span className="text-dark d-none d-md-block">Home</span>
          </Box>

          <Box className="text-center mx-3">
            <IconButton color="inherit">
                <PeopleIcon style={{ color: "#666", fontSize: "30px" }} />
            </IconButton>
            <span className="text-dark d-none d-md-block">Network</span>
          </Box>
          <Box className="text-center mx-3">
            <IconButton color="inherit">
                <WorkIcon style={{ color: "#666", fontSize: "30px" }} />
            </IconButton>
            <span className="text-dark d-none d-md-block">Jobs</span>
          </Box>
          <Box className="text-center mx-3">
            <IconButton color="inherit">
              <Badge color="error" badgeContent={5}>
                <NotificationsIcon
                  style={{ color: "#666", fontSize: "30px" }}
                />
              </Badge>
            </IconButton>
            <span className="text-dark d-none d-md-block">Notifications</span>
          </Box>

          <Box className="text-center mx-2">
            <IconButton color="inherit">
              <AccountCircle style={{ color: "#666", fontSize: "30px" }} />
            </IconButton>
            <span className="text-dark d-none d-md-block">Me</span>
          </Box>
          <Box></Box>
          <Box className="ms-5">
            <IconButton color="inherit">
              <AppsIcon
                style={{ color: "#666", fontSize: "34px", marginLeft: "12px" }}
              />
            </IconButton>
            <span className="text-dark d-none d-md-block">for Business</span>
          </Box>
          <Box className="ms-5">
            <IconButton color="inherit">
              <CasinoIcon
                style={{ color: "#666", fontSize: "34px", marginLeft: "39px" }}
              />
            </IconButton>
            <span className="text-dark d-none d-md-block">
              Try Sales Navigator
            </span>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
