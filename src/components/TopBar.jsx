import React, { useState } from "react";
import { Layout, Input, Button, AutoComplete } from "antd";
import styled from "styled-components";

const { Search } = Input;

export default function TopBar({ videos, setSearchResults }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const handleSubmit = (e) => e.preventDefault();
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();

    if (!searchTerm) {
      setSearchResults(videos);
      return;
    }

    const resultsArray = videos.filter((video) =>
      video.title.toLowerCase().includes(searchTerm)
    );

    setSearchResults(resultsArray);
  };

  return (
    <Container>
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Tokopedia.svg"
          width="100px "
        />
      </div>
      <form className="search" onSubmit={handleSubmit}>
        <Search
          placeholder="Search..."
          onChange={handleSearchChange}
          style={{ width: "40vw" }}
        />
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vh 2vw;
  background-color: #18181b;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
`;
