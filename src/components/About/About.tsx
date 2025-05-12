import { Container } from "./styles";
import VinayakSingh from "../../assets/VinayakSingh.webp";
import python from "../../assets/python.svg";
import java from "../../assets/java.svg";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import { motion } from "framer-motion";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2>About me</h2>
        </motion.div>

        {[0.1, 0.2, 0.3].map((delay, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true, amount: 0.2 }}
            style={i === 2 ? { marginTop: "2rem", marginBottom: "2rem" } : {}}
          >
            <p>
              {
                [
                  "Hi there! I'm Vinayak, an enthusiastic Software Engineer skilled in web development, machine learning, and scalable software solutions",
                  "I build responsive web applications, fine-tune ML models, and implement robust backend services.",
                  "I also work with CMS platforms like WordPress and Shopify to streamline content management.",
                ][i]
              }
            </p>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="education">
            <h3>Education:</h3>
            <h4>Master of Computer Applications (MCA)</h4>
            <p>
              Vellore Institute of Technology, Chennai | July 2023 - Present
            </p>
            <p>8.09 CGPA</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="experience">
            <h3>Experience:</h3>
            <h4>Software Developer</h4>
            <p>KIWIS AND BROWNIES IT SOLUTIONS | October 2024 - Present</p>
            <p>Bangalore, India</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3>Here are my main skills:</h3>
        </motion.div>

        <div className="hard-skills">
          {[
            { icon: python, alt: "python" },
            { icon: java, alt: "java" },
            { icon: jsIcon, alt: "JavaScript" },
            { icon: reactIcon, alt: "React" },
            { icon: typescriptIcon, alt: "Typescript" },
            { icon: vueIcon, alt: "Vue" },
            { icon: wordpress, alt: "Wordpress" },
            { icon: shopify, alt: "shopify" },
            { icon: htmlIcon, alt: "Html" },
            { icon: cssIcon, alt: "Css" },
            { icon: boostrapIcon, alt: "bootstrap" },
          ].map((item, index) => (
            <div className="hability" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.01 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <img src={item.icon} alt={item.alt} />
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-image">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.21 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img src={VinayakSingh} alt="Vinayak Singh" />
        </motion.div>
      </div>
    </Container>
  );
}
