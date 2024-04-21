import React, { useEffect, useState } from "react";
import "./RepoList.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userReposDataSelector } from "../../store/Repositories/selectors";

const RepoList = () => {
  const dispatch = useDispatch();
  const repoDetails = useSelector(userReposDataSelector);

  useEffect(() => {
    console.log(repoDetails);
  }, [repoDetails]);

  return (
    <div>
      <div>Repo</div>
    </div>
  );
};

export default RepoList;
