import React from "react";
import "./header.css";
import NetflixLogo from "../../assets/imags/NetflixLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import { FiSearch } from "react-icons/fi";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <div>
      <div className="header_outer_container">
        <div className="header_container">
          <div className="header_left">
            <ul>
              <li>
                <img src={NetflixLogo} alt="Netflix logo" width="100" />
              </li>
              <li>Netflix</li>
              <li>home</li>
              <li>TVshows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>Mylist</li>
              <li>Browse by Languages</li>
            </ul>
          </div>
          <div className="header_right">
            <ul>
              <li>
                <searchIcon />
                <FiSearch />
              </li>
              <li>
                <NotificationsNoneIcon />
              </li>
              <li>
                <AccountBoxIcon />
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
