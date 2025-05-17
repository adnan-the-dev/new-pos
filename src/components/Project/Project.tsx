import { Container } from "./styles";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
} from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Images
import kitchen from "../../assets/kitchen.png";
import delivery from "../../assets/delivery.png";
import dashboard from "../../assets/dashboard.png";
import multioutlet from "../../assets/mulitoutlet.png";
import inventory from "../../assets/inventery.png";
import pnlReport from "../../assets/pnl-report.png";
import { useTheme } from "../Them/ThemeContext";

type ProjectItem = {
  title: string;
  image: string;
};

export function Project() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const { isDarkMode } = useTheme();
  const projects: ProjectItem[] = [
    { title: "Kitchen Display System", image: kitchen },
    { title: "Inventory Management", image: inventory },
    { title: "Delivery Monitor", image: delivery },
    { title: "Dashboard", image: dashboard },
    { title: "Multi-outlet System", image: multioutlet },
    { title: "Accounts and PNL Reports", image: pnlReport },
  ];

  const cardStyle = {
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

  const headerStyle = {
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
      <h2>Point Of Sale</h2>

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

      {/* Image Dialog */}
      <Dialog
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        maxWidth="md"
        fullWidth
      >
        <DialogContent sx={{ position: "relative", p: 0 }}>
          {selectedProject && (
            <Box>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{ width: "100%", height: "auto", display: "block" }}
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
