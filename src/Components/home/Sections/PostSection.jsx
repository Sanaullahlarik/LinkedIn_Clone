import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import ArticleIcon from "@mui/icons-material/Article";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import RepeatIcon from "@mui/icons-material/Repeat";

// Image Imports
import postingImage1 from "../../Assets/image.png";
import postingImage2 from "../../Assets/2d599eff-8fb8-42ee-b792-f4cd3858442d.webp";
import postingImage3 from "../../Assets/React Redux.png";
import postingImage4 from "../../Assets/Maam Misbah.jpeg";
import postingImage5 from "../../Assets/Maam Wardah.jpeg";
import postingImage6 from "../../Assets/Ijaz Liaqat Post.jpeg";
import postingImage7 from "../../Assets/liaqat.jpeg";
import postingImage8 from "../../Assets/Abeera-Post.jpeg";

// Profile Images
import ProfileImage from "../../Assets/Sanaullah.jpg";
import ProfileImage2 from "../../Assets/Passport Pic.jpg";
import ProfileImage3 from "../../Assets/LinkedIn Profile.jpeg";
import ProfileImage4 from "../../Assets/Maam Profile.jpeg";
import ProfileImage5 from "../../Assets/Maam Wardah profile.jpeg";
import ProfileImage6 from "../../Assets/Ijaz Liaqat.jpeg";
import ProfileImage7 from "../../Assets/Abeera.jpeg";

const defaultPosts = [
  {
    id: 1,
    name: "Sanaullah",
    role: "Frontend Developer",
    content: "A login form is a fundamental component...",
    avatar: ProfileImage,
    image: postingImage1,
  },
  {
    id: 2,
    name: "Sultan",
    role: "Frontend Developer",
    content: "React is a popular JavaScript library...",
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
    id: 4,
    name: "Wardah Noor",
    role: "Upskilling & Empowering youth via tech skills | LUMS'24 | Acumen Fellow'23",
    content:
      "Yesterday was a wonderful day and it filled me with so much hope for future of Pakistan.Acumen’s founder Jacqueline Novogratz visited xWave and interacted with our students and alumni. She wanted to hear more from me and my personal journey of starting xWave - so I put together a slideshow of pictures and a walk down the memory lane.I have shared my story in bits and pieces with my students before as well but yesterday, I shared many details from my childhood. It’s been years since I spoke about those challenges to anyone. I had almost forgotten how difficult life was.The story not only gave Jacqueline and Acumen’s team context about our work and why we do it but it also gave strength to me and our team & alumni. We went out today and the students shared how it brought tears to their eyes yesterday. They told me the strength that they got from hearing it. We connected over the story and everyone shared their personal struggles.Everyone showed their scars and all of us consider them medals. They are our victory symbols and they are a message to the world that the young people hold the power to change things. Young people have the abilities to turn things around. And I believe this is what we want to see in future’s Pakistan. Our youth leading this country to new heights and contributing to a better world 🌍 More from the visit soon ❤",
    avatar: ProfileImage5,
    image: postingImage5,
  },
  {
    id: 5,
    name: "Ijaz Liaqat",
    role: "React/Next Js Developer | Building efficient and scalable web applications | Educator",
    content:
      "𝗦𝗸𝗶𝗹𝗹𝘀 𝗬𝗼𝘂 𝗡𝗲𝗲𝗱 𝘁𝗼 𝗕𝗲𝗰𝗼𝗺𝗲 𝗮 𝗙𝗿𝗼𝗻𝘁𝗲𝗻𝗱 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 – 𝗔 𝗥𝗼𝗮𝗱𝗺𝗮𝗽 𝗳𝗼𝗿 𝗕𝗲𝗴𝗶𝗻𝗻𝗲𝗿𝘀 Stepping into Frontend Development can feel overwhelming, but with a clear roadmap, you can navigate your way to success. Here’s a beginner-friendly guide to the essential skills you’ll need: 1. 𝗛𝗧𝗠𝗟 & 𝗖𝗦𝗦: The foundation of any website. Learn how to structure content and style it beautifully.2. 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁: Bring your websites to life with interactivity and dynamic features. 3. 𝗥𝗲𝘀𝗽𝗼𝗻𝘀𝗶𝘃𝗲 𝗗𝗲𝘀𝗶𝗴𝗻: Ensure your website looks great on any device—master tools like Flexbox and CSS Grid.4. 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 𝗖𝗼𝗻𝘁𝗿𝗼𝗹 (𝗚𝗶𝘁 & 𝗚𝗶𝘁𝗛𝘂𝗯): Collaborate with others and keep track of your code changes. 5. 𝗙𝗿𝗮𝗺𝗲𝘄𝗼𝗿𝗸𝘀 & 𝗟𝗶𝗯𝗿𝗮𝗿𝗶𝗲𝘀: Start with basics, then explore React, Angular, or Vue to build advanced UIs. 6. 𝗗𝗲𝗯𝘂𝗴𝗴𝗶𝗻𝗴 & 𝗧𝗲𝘀𝘁𝗶𝗻𝗴: Learn to identify and fix issues efficiently. 7. 𝗦𝗼𝗳𝘁 𝗦𝗸𝗶𝗹𝗹𝘀: Communication and problem-solving are just as important as technical expertise.💡 Tip: Start small, build projects, and gradually expand your skillset. Each step brings you closer to becoming a confident developer If you’re on this journey and need help or resources, feel free to connect with me. I’d love to guide you!",
    avatar: ProfileImage6,
    image: postingImage6,
  },
  {
    id: 6,
    name: "Misbah Shafi",
    role: "Lead Learning and Development | L&D Strategy | LUMS'23 | xWave | Looking for React.js Developers? Reach out to me.",
    content:
      "I am happy to share that I have graduated from Lahore University of Management Sciences this June with Bachelors in Biology.Coming from Nawan Siddique Wala (my village's name) and graduating from LUMS was nothing short of an adventurous journey in a sea full of sharks.Happy to become the first graduate ever in my family (no one achieved this feat in my last 7 generations). All thanx to my Abba Hazoor and Amman Hazoor for their support and hard work.A big thanx to my friends Verda Batool Urooj Haider Rabiya Naveed Wardah Noor Sabahat Kashif Sajila Fatima Reema Hajat Hira Ibrahim for their support. Shukria dosto! Tmhary bagher safar guzar to jata lkn thora ziyada mushkil ho jana tha :)",
    avatar: ProfileImage4,
    image: postingImage4,
  },
  {
    id: 7,
    name: "Ijaz Liaqat",
    role: "React/Next Js Developer | Building efficient and scalable web applications | Educator",
    content:
      "My journey from Non-tech to Tech person.Embracing Change: Transitioning from education to web development was a bold move, but I embraced the challenge head-on during the COVID-19 pandemic.Learning the Basics: Starting from scratch, I immersed myself in learning the fundamentals of HTML, CSS, and JavaScript, building a solid foundation for my journey ahead.Guidance from IEC: I owe a huge debt of gratitude to the team at Institute of Emerging Careers for their unwavering support. Their comprehensive courses and hands-on approach provided me with the tools and confidence I needed to thrive in the tech industry.Mentors' Support: I leaned on mentors like Muhammad Usama and Syed Ommer Amer , whose expertise and encouragement helped me navigate the complexities of web development with ease.Hands-On ExperiencePutting theory into practice, I embarked on various projects, both within IEC's learning environment and beyond, honing my skills and gaining real-world experience with each endeavor.Continuous GrowthI never stopped learning. Whether it was staying updated on the latest technologies or refining my coding techniques, I remained committed to continuous improvement.Now, with over 2 years of experience, I'm grateful for the journey that has shaped me into the tech professional I am today. Here's to conquering challenges, embracing growth, and seizing every opportunity that comes my way.",
    avatar: ProfileImage6,
    image: postingImage7,
  },
  {
    id: 8,
    name: "Abeera Khan",
    role: "Developing Solutions Scholar | MA Educational Leadership and Management | Educator | Professional Development Services",
    content:
      "Excited to share that I’ve started my Masters in Educational Leadership and Management at the University of Nottingham this September, supported by the UoN Flagship Developing Solutions Scholarship.This milestone wouldn’t have been possible without my family, my formative years at Forman Christian College (A Chartered University), and the incredible experience of working as an educator and change-maker with organizations like Science Fuse, University Of Central Punjab, and xWave in Pakistan. Also some 'silent' mentors, teachers who have written recommendations @Jaffer Hassan, and my former manager Danish Khan's support can not be forgotten. Looking forward to new opportunities in Nottingham and the United Kingdom, continuing my journey as an educator. 🚀#Masters hashtag#EducationalLeadership hashtag#UoN",
    avatar: ProfileImage7,
    image: postingImage8,
  },
];

const PostSection = () => {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");
    return savedPosts ? JSON.parse(savedPosts) : defaultPosts;
  });

  const [open, setOpen] = useState(false);
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostImage, setNewPostImage] = useState("");

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const handleClose = () => {
    setOpen(false);
    setNewPostContent("");
    setNewPostImage("");
  };

  const handlePost = () => {
    if (newPostContent.trim()) {
      const newPost = {
        id: Date.now(),
        name: "Sanaullah",
        role: "Frontend Developer | HTML5 | CSS3 | JavaScript | React.js",
        content: newPostContent,
        avatar: ProfileImage,
        image: newPostImage,
      };
      setPosts([newPost, ...posts]);
      handleClose();
    }
  };

  return (
    <Box>
      {/* Post Input Section */}
      <Box className="p-3 border rounded-2 d-flex flex-column gap-2 bg-white">
        <Box className="d-flex align-items-center gap-2">
          <Avatar src={ProfileImage} />
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Start a post"
            onClick={() => setOpen(true)}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 8 } }}
          />
        </Box>

        <Box className="d-flex flex-wrap justify-content-evenly">
          <Button
            color="black"
            startIcon={<VideoCallIcon className="text-success" />}
          >
            Video
          </Button>
          <Button
            className="text-dark"
            startIcon={<PhotoCameraIcon style={{ color: "blue" }} />}
          >
            Photo
          </Button>
          <Button
            color="black"
            startIcon={<ArticleIcon className="text-warning" />}
          >
            Article
          </Button>
        </Box>
      </Box>

      <hr />

      {/* Posts List */}
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

          {/* Action Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 1,
            }}
          >
            <Button className="text-primary" startIcon={<ThumbUpIcon />}>
              Like
            </Button>
            <Button className="text-primary" startIcon={<CommentIcon />}>
              Comment
            </Button>
            <Button className="text-primary" startIcon={<ShareIcon />}>
              Share
            </Button>
            <Button className="text-primary" startIcon={<RepeatIcon />}>
              Repost
            </Button>
          </Box>
        </Card>
      ))}

      {/* Modal */}
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
        <Box
          className="position-absolute top-50 start-50 translate-middle bg-white shadow-lg p-4 rounded"
          style={{
            width: "90%",
            maxWidth: "800px",
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Create a Post
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="What do you want to talk about?"
            variant="outlined"
            className="mt-2"
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
          />

          {/* Image Upload */}
          <input
            type="file"
            accept="image/*"
            className="mt-2"
            onChange={(e) =>
              setNewPostImage(URL.createObjectURL(e.target.files[0]))
            }
          />

          <Box className="d-flex justify-content-end mt-3">
            <Button variant="outlined" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              className="ms-3"
              onClick={handlePost}
            >
              Post
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default PostSection;
