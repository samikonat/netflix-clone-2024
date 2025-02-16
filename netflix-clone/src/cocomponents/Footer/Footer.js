import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
const Footer = () => {
  return (
    <footer>
      <div className="icon-class">
        <FacebookIcon />
        <InstagramIcon />
        <YouTubeIcon />
        <XIcon />
      </div>
      <div className="outer_container">
        <div className="data-container">
          <div>
            <ul>
              <li>Audio Decsription</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Gift Card</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="service_code">
        <p>Service Code</p>
      </div>
      <div className="copywrite_class">&copy; 1997 - 2024 Netflix, Inc.</div>
    </footer>
  );
};

export default Footer;
