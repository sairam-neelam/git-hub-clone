import React, { useEffect, useState } from "react";
import "./Repositories.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  fetchUserDetailsRequest,
  fetchUserReposRequest,
} from "../../store/Repositories/action";
import { usersDataSelector } from "../../store/Repositories/selectors";
import UserProfile from "../UserProfile/UserProfile";
import RepoList from "../RepoList/RepoList";

const Repositories = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector(usersDataSelector);

  useEffect(() => {
    dispatch(fetchUserDetailsRequest());
    dispatch(fetchUserReposRequest());
  }, []);

  useEffect(() => {
    console.log(userDetails);
  }, [userDetails]);

  return (
    <div className="tab-main-container">
      <div className="tab-container">
        <UserProfile />
        <RepoList />
      </div>
    </div>
  );
};

export default Repositories;
