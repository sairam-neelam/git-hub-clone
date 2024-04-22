import React, { useEffect, useState } from "react";
import "./RepoList.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userReposDataSelector } from "../../store/Repositories/selectors";
import {
  Star,
  Diagram2,
  CardChecklist,
  CaretDownFill,
} from "react-bootstrap-icons";

const RepoList = () => {
  const dispatch = useDispatch();
  const repoDetails = useSelector(userReposDataSelector);

  useEffect(() => {
    console.log(repoDetails);
  }, [repoDetails]);

  const getDate = (timestamp: string | number | Date) => {
    const date = new Date(timestamp);

    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    const year = date.getFullYear();

    const shortDate = `${month} ${day}, ${year}`;
    return shortDate;
  };

  return (
    <div className="repo-list-container">
      <div className="repo-inner-container">
        <div className="search-container">
          <input className="search-input" placeholder="Find a repository..." />
        </div>

        <div className="list-container">
          {repoDetails?.data?.map((repo) => (
            <div key={repo?.id} className="repo-card">
              <div className="repo-left-container">
                <div>
                  <span className="repo-name">{repo?.name}</span>{" "}
                  <span className="repo-status">
                    {repo?.private ? "Private" : "Public"}
                  </span>
                </div>
                <div className="description">{repo?.description}</div>
                <div className="meta-data">
                  {repo?.language && (
                    <span className="language">
                      <span
                        className={`language-color ${repo?.language}`}
                      ></span>
                      {repo?.language}
                    </span>
                  )}
                  {repo?.stargazers_count != null &&
                    repo?.stargazers_count > 0 && (
                      <span className="star-count">
                        <Star className="icon" /> {repo?.stargazers_count}
                      </span>
                    )}
                  {repo?.forks_count != null && repo?.forks_count > 0 && (
                    <span className="star-count">
                      <Diagram2 className="icon" /> {repo?.forks_count}
                    </span>
                  )}
                  {repo?.license != null && (
                    <span className="star-count">
                      <CardChecklist className="icon" /> {repo?.license?.name}
                    </span>
                  )}
                  <span>Updated at {getDate(repo?.updated_at)}</span>
                </div>
              </div>
              <div className="repo-right-container">
                <div className="star-btn">
                  <span className="star-part">
                    <Star className="star-icon" /> Star
                  </span>
                  <span className="caret-part">
                    <CaretDownFill />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepoList;
