import React from "react";
import {
  Avatar,
  Box,
  Card,
  Typography,
  Divider,
  CardContent,
} from "@mui/material";
import ProfilePicture from "../../../Components/Assets/Sanaullah.png";
import CoverPhoto from "../../../Components/Assets/banner.png";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import AddIcon from "@mui/icons-material/Add";

const AboutSection = () => {
  return (
    <>
      <Card>
        <CardContent sx={{ padding: 0 }}>
          {/* Cover Photo */}
          <Box
            sx={{
              height: "100px",
              backgroundColor: "#ddd",
              backgroundImage: `url(${CoverPhoto})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "16px 0",
              marginTop: "-30px",
            }}
          >
            <Avatar
              sx={{
                width: 80,
                height: 80,
                marginBottom: "16px",
                border: "3px solid #fff",
              }}
              src={ProfilePicture}
              alt="Profile Picture"
            />
            <Typography variant="h6" className="fw-bold">
              Sanaullah Larik
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Frontend Developer
            </Typography>
            <Box>
              <Divider className="my-2 w-100" />
              <Typography variant="body2" className="fw-bold">
                Profile viewers: <span style={{ color: "#0077b5" }}>75</span>
              </Typography>
              <Typography variant="body2" className="fw-bold">
                Post impressions: <span style={{ color: "#0077b5" }}>998</span>
              </Typography>
            </Box>
          </Box>
          <Divider className="my-2 w-100" />
          <Typography className="ms-3" variant="body2">
            Enhance lead quality width Sales Nav
          </Typography>
          <Typography variant="body2" className="fw-bold ms-3">
            Try Now For PKR 0
          </Typography>
          <Typography variant="body2" className="fw-bold ms-3">
            Post impressions: <span style={{ color: "#0077b5" }}>998</span>
          </Typography>
          <Divider className="my-2 w-100" />
          <Typography variant="body2" className="fw-bold ms-3">
            <BookmarkIcon /> Saved Items
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default AboutSection;
