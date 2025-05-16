import { Container } from "./styles";
import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
import instagramIcon from "../../assets/instagram.svg";
import logo from "../../assets2/llight-1.png";

export const Footer: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <p>
            Powered By: <strong>SHUFCO.org</strong>
          </p>
          <p>©2025 All Rights Reserved.</p>
        </div>
      </div>
    </Container>
  );
};
