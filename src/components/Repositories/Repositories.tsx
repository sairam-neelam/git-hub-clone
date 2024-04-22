import React, { useEffect } from "react";
import "./Repositories.css";
import { useDispatch } from "react-redux";
import {
  fetchUserDetailsRequest,
  fetchUserReposRequest,
} from "../../store/Repositories/action";
import UserProfile from "../UserProfile/UserProfile";
import RepoList from "../RepoList/RepoList";

const Repositories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserDetailsRequest());
    dispatch(fetchUserReposRequest());
  }, []);

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
