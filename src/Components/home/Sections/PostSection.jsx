import React from "react";
import { Avatar, Box, Button, Card, TextField } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import ArticleIcon from "@mui/icons-material/Article";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import RepeatIcon from "@mui/icons-material/Repeat";
import postingImage1 from "../../../Components/Assets/image.png";
import postingImage2 from "../../Assets/2d599eff-8fb8-42ee-b792-f4cd3858442d.webp";
import postingImage3 from "../../Assets/React Redux.png";
import postingImage4 from "../../Assets/Maam Misbah.jpeg";
import postingImage5 from "../../Assets/Maam Wardah.jpeg";
import postingImage6 from "../../Assets/Ijaz Liaqat Post.jpeg";
import ProfileImage2 from "../../Assets/Passport Pic.jpg";
import ProfileImage from "../../Assets/Sanaullah.png";
import ProfileImage3 from "../../Assets/LinkedIn Profile.jpeg";
import ProfileImage4 from "../../Assets/Maam Profile.jpeg";
import ProfileImage5 from "../../Assets/Maam Wardah profile.jpeg";
import ProfileImage6 from "../../Assets/Ijaz Liaqat.jpeg";

const PostSection = () => {
  const posts = [
    {
      id: 1,
      name: "Sanaullah",
      role: "Frontend Developer | HTML5 | CSS3 | JavaScript | React.js",
      content: "A login form is a fundamental component of many web applications, providing a way for users to access secure areas of an app. React, being a declarative and component-based library, makes it easy to build dynamic, responsive, and reusable login forms.",
      avatar: ProfileImage,
      image: postingImage1,
    },
    {
      id: 2,
      name: "Sultan",
      role: "Frontend Developer | HTML5 | CSS3 | JavaScript | React.js",
      content:
        "React is a popular JavaScript library used for building user interfaces, especially for single-page applications. It allows developers to create reusable components, making the UI modular and easier to maintain.",
      avatar: ProfileImage2,
      image: postingImage2,
    },
    {
      id: 3,
      name: "Akshay Kaushik",
      role: "Frontend Developer | HTML5 | CSS3 | JavaScript | React.js",
      content:
        "Redux is a state management library that helps manage the global state of JavaScript applications in a predictable way. It uses a central store, allowing components to access and update the state consistently.",
      avatar: ProfileImage3,
      image: postingImage3,
    },
    {
      id: 3,
      name: "Wardah Noor",
      role: "Upskilling & Empowering youth via tech skills | LUMS'24 | Acumen Fellow'23",
      content:
        "Yesterday was a wonderful day and it filled me with so much hope for future of Pakistan.Acumen’s founder Jacqueline Novogratz visited xWave and interacted with our students and alumni. She wanted to hear more from me and my personal journey of starting xWave - so I put together a slideshow of pictures and a walk down the memory lane.I have shared my story in bits and pieces with my students before as well but yesterday, I shared many details from my childhood. It’s been years since I spoke about those challenges to anyone. I had almost forgotten how difficult life was.The story not only gave Jacqueline and Acumen’s team context about our work and why we do it but it also gave strength to me and our team & alumni. We went out today and the students shared how it brought tears to their eyes yesterday. They told me the strength that they got from hearing it. We connected over the story and everyone shared their personal struggles.Everyone showed their scars and all of us consider them medals. They are our victory symbols and they are a message to the world that the young people hold the power to change things. Young people have the abilities to turn things around. And I believe this is what we want to see in future’s Pakistan. Our youth leading this country to new heights and contributing to a better world 🌍 More from the visit soon ❤️",
      avatar: ProfileImage5,
      image: postingImage5,
    },
    {
      id: 2,
      name: "Ijaz Liaqat",
      role: "React/Next Js Developer | Building efficient and scalable web applications | Educator",
      content:
        "𝗦𝗸𝗶𝗹𝗹𝘀 𝗬𝗼𝘂 𝗡𝗲𝗲𝗱 𝘁𝗼 𝗕𝗲𝗰𝗼𝗺𝗲 𝗮 𝗙𝗿𝗼𝗻𝘁𝗲𝗻𝗱 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 – 𝗔 𝗥𝗼𝗮𝗱𝗺𝗮𝗽 𝗳𝗼𝗿 𝗕𝗲𝗴𝗶𝗻𝗻𝗲𝗿𝘀 Stepping into Frontend Development can feel overwhelming, but with a clear roadmap, you can navigate your way to success. Here’s a beginner-friendly guide to the essential skills you’ll need: 1. 𝗛𝗧𝗠𝗟 & 𝗖𝗦𝗦: The foundation of any website. Learn how to structure content and style it beautifully.2. 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁: Bring your websites to life with interactivity and dynamic features. 3. 𝗥𝗲𝘀𝗽𝗼𝗻𝘀𝗶𝘃𝗲 𝗗𝗲𝘀𝗶𝗴𝗻: Ensure your website looks great on any device—master tools like Flexbox and CSS Grid.4. 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 𝗖𝗼𝗻𝘁𝗿𝗼𝗹 (𝗚𝗶𝘁 & 𝗚𝗶𝘁𝗛𝘂𝗯): Collaborate with others and keep track of your code changes. 5. 𝗙𝗿𝗮𝗺𝗲𝘄𝗼𝗿𝗸𝘀 & 𝗟𝗶𝗯𝗿𝗮𝗿𝗶𝗲𝘀: Start with basics, then explore React, Angular, or Vue to build advanced UIs. 6. 𝗗𝗲𝗯𝘂𝗴𝗴𝗶𝗻𝗴 & 𝗧𝗲𝘀𝘁𝗶𝗻𝗴: Learn to identify and fix issues efficiently. 7. 𝗦𝗼𝗳𝘁 𝗦𝗸𝗶𝗹𝗹𝘀: Communication and problem-solving are just as important as technical expertise.💡 Tip: Start small, build projects, and gradually expand your skillset. Each step brings you closer to becoming a confident developer If you’re on this journey and need help or resources, feel free to connect with me. I’d love to guide you!",
      avatar: ProfileImage6,
      image: postingImage6,
    },
    {
      id: 3,
      name: "Misbah Shafi",
      role: "Lead Learning and Development | L&D Strategy | LUMS'23 | xWave | Looking for React.js Developers? Reach out to me.",
      content:
        "I am happy to share that I have graduated from Lahore University of Management Sciences this June with Bachelors in Biology.Coming from Nawan Siddique Wala (my village's name) and graduating from LUMS was nothing short of an adventurous journey in a sea full of sharks.Happy to become the first graduate ever in my family (no one achieved this feat in my last 7 generations). All thanx to my Abba Hazoor and Amman Hazoor for their support and hard work.A big thanx to my friends Verda Batool Urooj Haider Rabiya Naveed Wardah Noor Sabahat Kashif Sajila Fatima Reema Hajat Hira Ibrahim for their support. Shukria dosto! Tmhary bagher safar guzar to jata lkn thora ziyada mushkil ho jana tha :)",
      avatar: ProfileImage4,
      image: postingImage4,
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          p: 3,
          border: "1px solid",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Avatar src={ProfileImage} />
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Start a post"
            sx={{
              borderRadius: 20,
              "& .MuiOutlinedInput-root": {
                borderRadius: 20,
              },
            }}
          />
        </Box>

        <Box className="d-flex flex-wrap justify-content-evenly">
          <Button
            color="black"
            startIcon={<VideoCallIcon style={{ color: "green" }} />}
          >
            Video
          </Button>
          <Button
            color="black"
            startIcon={<PhotoCameraIcon style={{ color: "blue" }} />}
          >
            Photo
          </Button>
          <Button
            color="black"
            startIcon={<ArticleIcon style={{ color: "orange" }} />}
          >
            {" "}
            article
          </Button>
        </Box>
      </Box>

      <hr />

      {posts.map((post) => (
        <Card key={post.id} className="mb-3 p-3">
          <div className="d-flex align-items-center">
            <Avatar src={post.avatar} alt="User" className="me-2" />
            <div>
              <h6>{post.name}</h6>
              <p className="text-muted">{post.role}</p>
            </div>
          </div>
          <p className="mt-3">{post.content}</p>
          {post.image && (
            <img
              src={post.image}
              alt="Post"
              style={{ width: "100%", borderRadius: "10px" }}
              className="mt-3"
            />
          )}
          <Box className="d-flex flex-wrap justify-content-between mt-2">
            <Button
              variant="text"
              startIcon={<ThumbUpIcon />}
              className="text-muted"
            >
              Like
            </Button>
            <Button
              variant="text"
              startIcon={<CommentIcon />}
              className="text-muted"
            >
              Comment
            </Button>
            <Button
              variant="text"
              startIcon={<ShareIcon />}
              className="text-muted"
            >
              Share
            </Button>
            <Button
              variant="text"
              startIcon={<RepeatIcon />}
              className="text-muted"
            >
              Repost
            </Button>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default PostSection;
