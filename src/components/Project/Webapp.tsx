import { Container } from "./styles";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Images
import address from "../../assets/address-page.png";
import details from "../../assets/itemdetails.png";
import cartdetails from "../../assets/cartdetails.png";
import userdetail from "../../assets/userdetails.png";
import otpconfirm from "../../assets/otp-verificaton.png";
import orderDetails from "../../assets/order-details.png";
import { useTheme } from "../Them/ThemeContext";

type Project = {
  title: string;
  image: string;
};

export function Webapp() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { isDarkMode } = useTheme();

  const projects: Project[] = [
    { title: "Address Confirmation", image: address },
    { title: "Item Details", image: details },
    { title: "Cart Details", image: cartdetails },
    { title: "User Confirmation", image: userdetail },
    { title: "OTP Verification", image: otpconfirm },
    { title: "Order Details", image: orderDetails },
  ];

  const cardStyle: React.CSSProperties = {
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "300px",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    backgroundColor: "#fff",
    border: isDarkMode ? "" : "1px solid gray",
  };

  const headerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#23ce6b",
    padding: "10px",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    borderBottom: isDarkMode ? "1px solid gray" : "1px solid gray",
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
      <h2>Web-App</h2>

      {/* Swiper Section */}
      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        style={{ paddingBottom: "30px" }}
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            style={{ width: "auto", display: "flex", justifyContent: "center" }}
          >
            <motion.article
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
                  // height: "180px",
                  height: "100%",
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
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Popup Dialog */}
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
            <CloseIcon />
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
