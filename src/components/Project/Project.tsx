// import { Container } from "./styles";
// import githubIcon from "../../assets/github.svg";
// // import DownloadApp from '../../assets/download.webp'
// import externalLink from "../../assets/external-link.svg";
// import ScrollAnimation from "react-animate-on-scroll";
// import kitchen from "../../assets/kitchen.png";
// import delivery from "../../assets/delivery.png";
// import dashboard from "../../assets/dashboard.png";
// import multioutlet from "../../assets/mulitoutlet.png";
// import inventory from "../../assets/inventery.png";
// import pnlReport from "../../assets/pnl-report.png";
// import { useState } from "react";

// export function Project() {
//   const [showPopup, setShowPopup] = useState(false);
//   return (
//     <Container id="project">
//       <h2>My Projects</h2>
//       <div
//         className="projects"
//         onClick={() => setShowPopup(true)}
//         style={{ cursor: "pointer" }}
//       >
//         <ScrollAnimation animateIn="flipInX">
//           <div
//             className="project"
//             style={{
//               borderRadius: "12px",
//               overflow: "hidden",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//               width: "100%", // makes it responsive
//               maxWidth: "400px", // optional: limits card width
//               height: "300px", // fixed height for consistency
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <header
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 color: "#23ce6b",
//                 padding: "10px",
//                 backgroundColor: "#f4f4f4",
//                 borderRadius:'10px'
//               }}
//             >
//               <h3 style={{ margin: 0 }}>Kitchen Display System</h3>
//             </header>

//             <div style={{ flex: 1, overflow: "hidden" }}>
//               <img
//                 src={kitchen}
//                 alt="Kitchen System"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover", // Use 'contain' if you want to see the full image
//                   display: "block",
//                 borderRadius:'10px'

//                 }}
//               />
//             </div>
//           </div>
//         </ScrollAnimation>

//         <ScrollAnimation animateIn="flipInX">
//           <div
//             className="project"
//             style={{
//               borderRadius: "12px",
//               overflow: "hidden",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//               width: "100%", // makes it responsive
//               maxWidth: "400px", // optional: limits card width
//               height: "300px", // fixed height for consistency
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <header
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 color: "#23ce6b",
//                 padding: "10px",
//                 backgroundColor: "#f4f4f4",
//                 borderRadius:'10px'
//               }}
//             >
//               <div>
//                 <h3 style={{ margin: 0 }}>Inventory management </h3>
//               </div>
//             </header>
//             <div style={{ flex: 1, overflow: "hidden" }}>
//               <img
//                 src={inventory}
//                 alt="Hellos"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover", // Use 'contain' if you want to see the full image
//                   display: "block",
//                 borderRadius:'10px'

//                 }}
//               />
//             </div>
//           </div>
//         </ScrollAnimation>

//         <ScrollAnimation animateIn="flipInX">
//           <div
//             className="project"
//             style={{
//               borderRadius: "12px",
//               overflow: "hidden",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//               width: "100%", // makes it responsive
//               maxWidth: "400px", // optional: limits card width
//               height: "300px", // fixed height for consistency
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <header
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 color: "#23ce6b",
//                 padding: "10px",
//                 backgroundColor: "#f4f4f4",
//                 borderRadius:'10px'
//               }}
//             >
//               <div>
//                 <h3 style={{ margin: 0 }}>Delivery monitor </h3>
//               </div>
//             </header>
//             <div style={{ flex: 1, overflow: "hidden" }}>
//               <img
//                 src={delivery}
//                 alt="Hellos"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover", // Use 'contain' if you want to see the full image
//                   display: "block",
//                 borderRadius:'10px'

//                 }}
//               />
//             </div>
//           </div>
//         </ScrollAnimation>

//         <ScrollAnimation animateIn="flipInX">
//           <div
//             className="project"
//             style={{
//               borderRadius: "12px",
//               overflow: "hidden",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//               width: "100%", // makes it responsive
//               maxWidth: "400px", // optional: limits card width
//               height: "300px", // fixed height for consistency
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <header
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 color: "#23ce6b",
//                 padding: "10px",
//                 backgroundColor: "#f4f4f4",
//                 borderRadius:'10px'
//               }}
//             >
//               <div>
//                 <h3 style={{ margin: 0 }}>Dashboard</h3>
//               </div>
//             </header>
//             <div style={{ flex: 1, overflow: "hidden" }}>
//               <img
//                 src={dashboard}
//                 alt="Hellos"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover", // Use 'contain' if you want to see the full image
//                   display: "block",
//                 borderRadius:'10px'

//                 }}
//               />
//             </div>
//           </div>
//         </ScrollAnimation>

//         <ScrollAnimation animateIn="flipInX">
//           <div
//             className="project"
//             style={{
//               borderRadius: "12px",
//               overflow: "hidden",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//               width: "100%", // makes it responsive
//               maxWidth: "400px", // optional: limits card width
//               height: "300px", // fixed height for consistency
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <header
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 color: "#23ce6b",
//                 padding: "10px",
//                 backgroundColor: "#f4f4f4",
//                 borderRadius:'10px'
//               }}
//             >
//               <div>
//                 <h3 style={{ margin: 0 }}>Multi-outlet system</h3>
//               </div>
//             </header>
//             <div style={{ flex: 1, overflow: "hidden" }}>
//               <img
//                 src={multioutlet}
//                 alt="Hellos"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover", // Use 'contain' if you want to see the full image
//                   display: "block",
//                 borderRadius:'10px'

//                 }}
//               />
//             </div>
//           </div>
//         </ScrollAnimation>

//         <ScrollAnimation animateIn="flipInX">
//           <div
//             className="project"
//             style={{
//               borderRadius: "12px",
//               overflow: "hidden",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//               width: "100%", // makes it responsive
//               maxWidth: "400px", // optional: limits card width
//               height: "300px", // fixed height for consistency
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <header
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 color: "#23ce6b",
//                 padding: "10px",
//                 backgroundColor: "#f4f4f4",
//                 borderRadius:'10px'
//               }}
//             >
//               <div>
//                 <h3 style={{ margin: 0 }}>Accounts and PNL reports</h3>
//               </div>
//             </header>
//             <div style={{ flex: 1, overflow: "hidden" }}>
//               <img
//                 src={pnlReport}
//                 alt="Hellos"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover", // Use 'contain' if you want to see the full image
//                   display: "block",
//                 borderRadius:'10px'

//                 }}
//               />
//             </div>
//           </div>
//         </ScrollAnimation>
//       </div>
//     </Container>
//   );
// }

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
