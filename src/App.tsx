import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Tabs from "./components/Tabs/Tabs";
import {
  Book,
  JournalBookmarkFill,
  LayoutSidebar,
  Star,
  Box,
} from "react-bootstrap-icons";
import Repositories from "./components/Repositories/Repositories";
import { useSelector } from "react-redux";
import { userReposDataSelector } from "./store/Repositories/selectors";

function App() {
  const userRepoDetails = useSelector(userReposDataSelector);

  const tabs = [
    {
      id: 1,
      title: (
        <span className="tab-header">
          <Book />
          <span className="tab-title">Overview</span>
        </span>
      ),
      content: <div>Content of Tab 1</div>,
      width: 100,
      disabled: true,
    },
    {
      id: 2,
      title: (
        <span className="tab-header">
          <JournalBookmarkFill />
          <span className="tab-title">Repositories</span>
          <span className="chip">{userRepoDetails?.data.length}</span>
        </span>
      ),
      content: <Repositories />,
      width: 150,
      disabled: false,
    },
    {
      id: 3,
      title: (
        <span className="tab-header">
          <LayoutSidebar />
          <span className="tab-title">Projects</span>
        </span>
      ),
      content: <div>Content of Tab 3</div>,
      width: 100,
      disabled: true,
    },
    {
      id: 4,
      title: (
        <span className="tab-header">
          <Box />
          <span className="tab-title">Packages</span>
        </span>
      ),
      content: <div>Content of Tab 4</div>,
      width: 100,
      disabled: true,
    },
    {
      id: 5,
      title: (
        <span className="tab-header">
          <Star />
          <span className="tab-title">Stars</span>
        </span>
      ),
      content: <div>Content of Tab 5</div>,
      width: 100,
      disabled: true,
    },
  ];

  return (
    <div className="App">
      <Header />
      <div className="main-page">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

export default App;
