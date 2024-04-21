import React, { useEffect, useState } from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { List, Github } from "react-bootstrap-icons";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-right">
          <button className="hamburger">
            <List className="hamburger-icon" />
          </button>
          <Github className="github-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
