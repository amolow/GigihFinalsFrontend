import styled from "styled-components";
import axios from "axios";
import VideoContent from "./VideosContent";

const VideosList = ({ searchResults }) => {
  //map array to the list as video content yang di import
  const results = searchResults.map((video) => (
    <VideoContent key={video.id} video={video} />
  ));

  //check if theres no matching results, print no results
  const content = results?.length ? (
    results
  ) : (
    <p style={{ color: "white" }}>No results</p>
  );
  return <Container>{content}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

export const getVideos = async () => {
  const response = await axios.get("http://localhost:4000/videos");
  return response.data;
};

export default VideosList;