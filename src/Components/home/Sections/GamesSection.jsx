import React from "react";
import { Box, Typography, Card as MuiCard, CardContent } from "@mui/material";
import tangoGameImg from "../../../Components/Assets/tango-img.svg";
import queenGameImg from "../../../Components/Assets/queen.svg";
import pinpointGameImg from "../../../Components/Assets/pinpoint.svg";
import crossClimbGameImg from "../../../Components/Assets/crossClimb.svg";
import HiringImg from "../../Assets/HiringImage.png";

const GamesSection = () => {
  return (
    <div>
      <Box>
        <Box className="p-3 d-flex rounded-2 flex-column gap-2 bg-white">
          <p>Today’s puzzle games</p>
          <Box>
            <Box className="d-flex">
              <img
                src={tangoGameImg}
                alt="Tango Game"
                style={{ width: "30px", height: "auto" }}
              />
              <Box className="ms-3">
              <Typography variant="body1" className="fw-medium">Crossclimb</Typography>
              <Typography>Harmonize the Grid</Typography>
              </Box>
            </Box>
            <Box className="d-flex my-1">
              <img
                src={queenGameImg}
                alt="Queen Game"
                style={{ width: "30px", height: "auto" }}
              />
              <Box className="ms-3">
              <Typography variant="body1" className="fw-medium">Queens</Typography>
              <Typography>Crown each region</Typography>

              </Box>
            </Box>
            <Box className="d-flex my-1">
              <img
                src={pinpointGameImg}
                alt="Pinpoint Game"
                style={{ width: "30px", height: "auto" }}
              />
              <Box className="ms-3">
              <Typography variant="body1" className="fw-medium">Pinpoint</Typography>
                <Typography>Guess the Category</Typography>
              </Box>
            </Box>
            <Box className="d-flex">
              <img
                src={crossClimbGameImg}
                alt="Cross climb Game"
                style={{ width: "30px", height: "auto" }}
              />
              <Box className="ms-3">
              <Typography variant="body1" className="fw-medium">Crossclimb</Typography>
              <Typography>Unlock a trivia ladder</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <MuiCard className="rounded-3 shadow-black mt-3">
          <CardContent className="p-0">
            <img className="w-100 "
              src={HiringImg}
              alt="Hiring" />
            <Box className="p-2">
              <Typography className="mb-1 fw-bold "
                variant="h6"
              >
                See who's hiring on LinkedIn.
              </Typography>
            </Box>
          </CardContent>
        </MuiCard>
      </Box>
      <Box className="text-align-center my-2">
        <Typography
          variant="body2"
          color="text.secondary"
          className="d-flex flex-wrap justify-content-center gap-2"
          sx={{ fontSize: "12px", lineHeight: 1.5 }}
        >
          {[
            "About",
            "Accessibility",
            "Help Center",
            "Privacy & Terms",
            "Ad Choices",
            "Advertising",
            "Business Services",
            "Get the LinkedIn app",
            "More",
          ].map((link, index) => (
            <span key={index} style={{ cursor: "pointer", color: "#0077b5" }}>
              {link}
            </span>
          ))}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            marginTop: 1,
            display: "block",
            fontSize: "10px",
            color: "text.secondary",
          }}
        >
          LinkedIn Corporation © 2025
        </Typography>
      </Box>
    </div>
  );
};

export default GamesSection;
