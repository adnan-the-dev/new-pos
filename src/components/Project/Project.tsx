import { Container } from "./styles";
import { motion } from "framer-motion";
import { useState } from "react";

// Images
import kitchen from "../../assets/kitchen.png";
import delivery from "../../assets/delivery.png";
import dashboard from "../../assets/dashboard.png";
import multioutlet from "../../assets/mulitoutlet.png";
import inventory from "../../assets/inventery.png";
import pnlReport from "../../assets/pnl-report.png";

export function Project() {
  const [showPopup, setShowPopup] = useState(false);

  const projects = [
    { title: "Kitchen Display System", image: kitchen },
    { title: "Inventory Management", image: inventory },
    { title: "Delivery Monitor", image: delivery },
    { title: "Dashboard", image: dashboard },
    { title: "Multi-outlet System", image: multioutlet },
    { title: "Accounts and PNL Reports", image: pnlReport },
    { title: "Accounts and PNL Reports", image: pnlReport },
  ];

  const cardStyle = {
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

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#23ce6b",
    padding: "10px",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
  };

  // const imageStyle = {
  //   width: "100%",
  //   height: "100%",
  //   objectFit: "cover",
  //   display: "block",
  //   borderRadius: "10px",
  // };

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
      <h2>My Projects</h2>
      <div className="projects" onClick={() => setShowPopup(true)}>
        {projects.map((project, index) => (
          <motion.article
            key={index}
            className="project"
            style={cardStyle}
            variants={motionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <header style={headerStyle}>
              <h3 style={{ margin: 0 }}>{project.title}</h3>
            </header>
            <div style={{ flex: 1, overflow: "hidden" }}>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "10px",
                }}
                loading="lazy"
              />
            </div>
          </motion.article>
        ))}
      </div>
    </Container>
  );
}
