import { Container } from "./styles";
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
