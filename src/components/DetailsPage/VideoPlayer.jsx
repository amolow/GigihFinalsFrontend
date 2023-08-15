import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import YouTube from "react-youtube";

export default function VideoPlayer() {
  const { videoId } = useParams();
  const [video, setVideo] = useState({});

  useEffect(() => {
    axios
      .get(`https://gigihfinalsfrontend.onrender.com/${videoId}`)
      .then((response) => {
        setVideo(response.data);
      })
      .catch((error) => {
        console.error("ERROR!", error);
      });
  }, [videoId]);

  return (
    <VideoContainer>
      <YouTube
        videoId={getVideoIdFromUrl(video.vidUrl)}
        opts={{ width: "800", height: "450" }}
      />
    </VideoContainer>
  );
}

const VideoContainer = styled.div`
  background-color: black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

function getVideoIdFromUrl(url) {
  const match = url && url.match(/[?&]v=([^&]+)/);
  return match ? match[1] : null;
}
