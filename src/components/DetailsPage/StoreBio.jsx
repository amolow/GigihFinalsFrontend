import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Avatar } from "antd";

export default function StoreBio() {
  const { videoId } = useParams();
  const [video, setVideo] = useState({});

  useEffect(() => {
    axios
      .get(`https://gigihfinalsbackend.onrender.com/videos/${videoId}`)
      .then((response) => {
        setVideo(response.data);
      })
      .catch((error) => {
        console.error("ErrorR!", error);
      });
  }, [videoId]);

  return (
    <Container>
      <Logo>
        <Avatar size={64} src={video.storeAvatar} />
      </Logo>
      <Content>
        <h3>{video.title}</h3>
        <p>{video.store}</p>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 1vh 5vw;
  width: 60vw;
  display: flex;
  flex-direction: row;
  word-wrap: word-break;
  align-items: center;
  gap: 20px;
`;

const Logo = styled.div``;

const Content = styled.div`
color:white;
margin-top:-30px
  display: flex;
  flex-direction: column;
`;
