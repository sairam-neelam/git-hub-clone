import React, { useEffect, useState } from "react";
import "./Header.css";
import { useSelector } from "react-redux";
import { List, Github, Inbox } from "react-bootstrap-icons";
import { usersDataSelector } from "../../store/Repositories/selectors";

const Header = () => {
  const userDetails = useSelector(usersDataSelector);

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-right">
          <button className="hamburger">
            <List className="hamburger-icon" />
          </button>
          <Github className="github-icon" />
        </div>
        <div className="header-left">
          <button className="inbox">
            <Inbox className="inbox-icon" />
          </button>
          <img src={userDetails?.data?.avatar_url} className="user-avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
