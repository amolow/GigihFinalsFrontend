import React from "react";
import styled from "styled-components";

import VideosList from "./VideosList";
import TopBar from "../TopBar";
import { getVideos } from "./VideosList";
import { useState, useEffect } from "react";

export default function Channels() {
  const [videos, setVideos] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    getVideos()
      .then((json) => {
        setVideos(json);
        return json;
      })
      .then((json) => {
        setSearchResult(json);
      });
  }, []);

  return (
    <Container>
      <div className="all">
        <div className="nav">
          <TopBar videos={videos} setSearchResults={setSearchResult} />
        </div>
        <div className="content">
          <VideosList searchResults={searchResult} />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: max;
  max-width: 100vw;
  background-color: #18181b;

  .nav {
    border-bottom: 2px solid black;
    height: 10%;
  }
`;
