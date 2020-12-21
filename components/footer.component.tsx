import { HeartFilled } from "@ant-design/icons";
import { Button } from "antd";
/***********************
  Footer Component
 ***********************/

const Footer = (props) => {
  return (
    <section id="footer">
      <div className="container">
        Made with ♥️ by{" "}
        <a
          href="https://twitter.com/Hero_Sony"
          style={{ color: "white" }}
          target="_blank"
        >
          Herosony
        </a>
      </div>
    </section>
  );
};

export default Footer;
