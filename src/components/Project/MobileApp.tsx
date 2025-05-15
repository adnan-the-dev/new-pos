import { Container } from "./styles";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Typography
} from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

// Images
import loacationDetail from "../../assets/location.png";
import home from "../../assets/home.png";
import cartSection from "../../assets/cart.png";
import userInfo from "../../assets/user-info.png";
import orderSummary from "../../assets/order-summary.png";
import userProfile from "../../assets/profile.png";

type Project = {
  title: string;
  image: string;
};

export function MobileApp() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    { title: "Current Location Details", image: loacationDetail },
    { title: "Home Page", image: home },
    { title: "Cart Details", image: cartSection },
    { title: "User Details", image: userInfo },
    { title: "Order Status", image: orderSummary },
    { title: "User Profile", image: userProfile },
  ];

  const cardStyle: React.CSSProperties = {
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
  };

  const headerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#23ce6b",
    padding: "10px",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
  };

  const motionVariants = {
    hidden: { opacity: 0, y: 50, rotateY: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Container id="project">
      <h2>Mobile-App</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <motion.article
            key={index}
            className="project"
            style={cardStyle}
            variants={motionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            onClick={() => setSelectedProject(project)}
          >
            <header style={headerStyle}>
              <h3 style={{ margin: 0 }}>{project.title}</h3>
            </header>
            <div
              style={{
                height: "180px",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f9f9f9",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
                loading="lazy"
              />
            </div>
          </motion.article>
        ))}
      </div>

      {/* MUI Dialog Popup */}
      <Dialog
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        maxWidth="md"
        fullWidth
      >
        <DialogContent sx={{ position: "relative", p: 0 }}>
          <IconButton
            onClick={() => setSelectedProject(null)}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              backgroundColor: "white",
              zIndex: 1,
            }}
          >
            {/* <CloseIcon /> */}
          </IconButton>
          {selectedProject && (
            <Box>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{
                  width: "100%",
                  maxHeight: "500px",
                  objectFit: "contain",
                  display: "block",
                  margin: "0 auto",
                  backgroundColor: "#f9f9f9",
                }}
              />
              <Box sx={{ p: 2 }}>
                <Typography variant="h4">{selectedProject.title}</Typography>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Container>
  );
}
