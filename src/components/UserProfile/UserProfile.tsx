import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { usersDataSelector } from "../../store/Repositories/selectors";
import { People, Building, GeoAlt, Envelope } from "react-bootstrap-icons";

const UserProfile = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector(usersDataSelector);

  useEffect(() => {
    console.log(userDetails);
  }, [userDetails]);

  return (
    <div className="user-profile-sidebar">
      <div className="name-details">
        <img src={userDetails?.data?.avatar_url} className="user-image" />
        <div className="name-container">
          <span className="user-name">{userDetails?.data?.name}</span>
          <span className="login-name">{userDetails?.data?.login}</span>
        </div>
      </div>
      <span className="bio">{userDetails?.data?.bio}</span>
      <button className="edit-profile-btn">Edit Profile</button>
      <div className="follower-details">
        <People />
        <span>
          <span className="count">&nbsp;{userDetails?.data?.followers}</span>{" "}
          followers
        </span>
        <span>&nbsp;&#x2022;</span>
        <span>
          <span className="count">&nbsp;{userDetails?.data?.following}</span>{" "}
          following
        </span>
      </div>
      <div className="prof-info">
        <span className="detail">
          <Building className="detail-logo" />{" "}
          <span>{userDetails?.data?.company}</span>
        </span>
        <span className="detail">
          <GeoAlt className="detail-logo" />{" "}
          <span>{userDetails?.data?.location}</span>
        </span>
        <span className="detail">
          <Envelope className="detail-logo" />{" "}
          <span>supreetsingh.247@gmail.com</span>
        </span>
      </div>
    </div>
  );
};

export default UserProfile;
