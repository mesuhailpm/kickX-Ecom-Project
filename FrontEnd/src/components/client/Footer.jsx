import {
  CopyrightOutlined,
  TwitterOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search } = Input;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-one">
        <div>
          <h2>kick X</h2>
          <div className="socials">
            <div className="social">
              <TwitterOutlined />
            </div>
            <div className="social">
              <TwitterOutlined />
            </div>
            <div className="social">
              <TwitterOutlined />
            </div>
            <div className="social">
              <TwitterOutlined />
            </div>
          </div>
          <p className="sign-up">Sign up for personalized offers</p>
          <Search
            placeholder="Enter your email"
            allowClear
            enterButton={<MailOutlined />}
            style={{ width: 304, margin: "1em 0" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-start",
          }}
        >
          <div>
            <h4 style={{ margin: "1em 0" }}>Links</h4>
            <ul style={{ textDecoration: "none", listStyleType: "none" }}>
              <li style={{ margin: ".75em  0" }}>Home</li>
              <li style={{ margin: ".75em  0" }}>Projects</li>
              <li style={{ margin: ".75em  0" }}>Blog</li>
              <li style={{ margin: ".75em  0" }}>Category</li>
            </ul>
          </div>
          <div>
            <h4 style={{ margin: "1em 0" }}>Features</h4>
            <ul style={{ textDecoration: "none", listStyleType: "none" }}>
              <li style={{ margin: ".75em  0" }}>About Us</li>
              <li style={{ margin: ".75em  0" }}>Instruction</li>
              <li style={{ margin: ".75em  0" }}>Catalog</li>
              <li style={{ margin: ".75em  0" }}>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 style={{ margin: "1em 0" }}>Company</h4>
            <ul style={{ textDecoration: "none", listStyleType: "none" }}>
              <li style={{ margin: ".75em  0" }}>Privacy</li>
              <li style={{ margin: ".75em  0" }}>Terms</li>
              <li style={{ margin: ".75em  0" }}>Security</li>
            </ul>
          </div>
          <div>
            <h4 style={{ margin: "1em 0" }}>Legal & Terms</h4>
            <ul style={{ textDecoration: "none", listStyleType: "none" }}>
              <li style={{ margin: ".75em  0" }}>Privacy</li>
              <li style={{ margin: ".75em  0" }}>Terms</li>
              <li style={{ margin: ".75em  0" }}>Security</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-two">
        <CopyrightOutlined /> <b>kick X</b> {new Date().getFullYear()}. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
