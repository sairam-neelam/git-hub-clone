import React, { useEffect, useState } from "react";
import "./RepoList.css";
import { useSelector } from "react-redux";
import { userReposDataSelector } from "../../store/Repositories/selectors";
import {
  Star,
  Diagram2,
  CardChecklist,
  CaretDownFill,
  JournalBookmarkFill,
} from "react-bootstrap-icons";
import DropdownButton from "../DropdownButton/DropdownButton";
import { languageOptions, sortOptions, typesOptions } from "./constants";
import { Repo } from "../../store/Repositories/types";

const RepoList = () => {
  const repoDetails = useSelector(userReposDataSelector);
  const [repoList, setRepoList] = useState<Repo[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedTypeOption, setSelectedTypeOption] = useState("All");
  const [selectedLanguageOption, setSelectedLanguageOption] = useState("All");
  const [selectedSortOption, setSelectedSortOption] = useState("Last Updated");

  useEffect(() => {
    if (repoDetails.data.length > 0) {
      setRepoList(repoDetails?.data);
    }
  }, [repoDetails]);

  useEffect(() => {
    console.log(selectedTypeOption);
    let searchList = repoDetails?.data?.filter((el) =>
      el.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    let typeList = filterByType(selectedTypeOption, searchList);
    let languageList = filterByLanguage(selectedLanguageOption, typeList);
    let sortedList = sortList(selectedSortOption, languageList);
    setRepoList([...sortedList]);
  }, [
    searchInput,
    selectedTypeOption,
    selectedLanguageOption,
    selectedSortOption,
  ]);

  const filterByType = (type: string, list: Repo[]) => {
    if (type == "ALL") {
      return list;
    } else if (type == "Public") {
      let tempList = list.filter((el) => !el.private);
      return tempList;
    } else if (type == "Private") {
      let tempList = list.filter((el) => el.private);
      return tempList;
    } else if (type == "Archived") {
      let tempList = list.filter((el) => el.archived);
      return tempList;
    } else if (type == "Mirror") {
      let tempList = list.filter((el) => !el.mirror_url);
      return tempList;
    } else if (type == "Templates") {
      let tempList = list.filter((el) => el.is_template);
      return tempList;
    }

    return list;
  };

  const filterByLanguage = (language: string, list: Repo[]) => {
    if (language == "All") {
      return list;
    } else {
      let languageList = list.filter((el) => el.language == language);
      return languageList;
    }
  };

  const sortList = (type: string, list: Repo[]) => {
    if (type == "Name") {
      let sortedOptions = list.sort((a, b) => a.name.localeCompare(b.name));
      return sortedOptions;
    } else if (type == "Stars") {
      let sortedOptions = list.sort(
        (a, b) => a.stargazers_count - b.stargazers_count
      );
      return sortedOptions;
    } else {
      return list;
    }
  };

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
          <button className="new-btn new-btn-large">
            <JournalBookmarkFill className="new-btn-icon" />
            New
          </button>
          <div className="search-input-div">
            <input
              className="search-input"
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Find a repository..."
            />
          </div>

          <div className="action-btn-container">
            <DropdownButton
              className="type-dropdown"
              options={typesOptions}
              btnName="Types"
              setSelectedOption={setSelectedTypeOption}
              selectedOption={selectedTypeOption}
            />
            <DropdownButton
              className="language-dropdown"
              options={languageOptions}
              btnName="Language"
              setSelectedOption={setSelectedLanguageOption}
              selectedOption={selectedLanguageOption}
            />
            <DropdownButton
              className="sort-dropdown"
              options={sortOptions}
              btnName="Sort"
              setSelectedOption={setSelectedSortOption}
              selectedOption={selectedSortOption}
            />
            <button className="new-btn new-btn-small">
              <JournalBookmarkFill className="new-btn-icon" />
              New
            </button>
          </div>
        </div>

        <div className="list-container">
          {repoList?.map((repo) => (
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
