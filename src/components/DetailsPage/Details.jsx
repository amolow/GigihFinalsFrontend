import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import VideoPlayer from "./VideoPlayer";
import ProductList from "./ProductList";
import Chat from "../Chat/Chat";
import TopBar from "../TopBarDetail";
import StoreBio from "./StoreBio";

export default function Details() {
  const { videoId } = useParams();
  const [video, setVideo] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://gigihfinalsfrontend.onrender.com/videos/${videoId}`)
      .then((response) => {
        setVideo(response.data);
      })
      .catch((error) => {
        console.error("Error!!", error);
      });

    axios
      .get(`https://gigihfinalsfrontend.onrender.com/products/${videoId}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error!!", error);
      });
  }, [videoId]);

  return (
    <Container>
      <div className="nav">
        <TopBar />
      </div>
      <div className="main-body">
        <VideoPlayer />
        <Chat />
      </div>
      <div className="body">
        <StoreBio />
        <ProductList />
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: #18181b;
  max-width: 100vw;
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  height: 100%;
  flex-direction: column;
  .nav {
    border-bottom: 2px solid black;

    height: 10%;
  }
  .main-body {
    background-color: purple;
    display: flex;
    flex-wrap: nowrap;
    height: 75vh;
    flex-direction: row;
    justify-content: end;
  }
  .body {
    background-color: #0e0e10;
  }
`;
