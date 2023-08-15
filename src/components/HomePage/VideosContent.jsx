import { Link } from "react-router-dom";
import styled from "styled-components";

const VideoContent = ({ video }) => {
  return (
    <Link key={video._id} to={`/video/${video._id}`}>
      <VideoCard key={video._id}>
        <VideoImage src={video.imgUrl} alt={video.title} />
        <VideoTitle>{video.title}</VideoTitle>
      </VideoCard>
    </Link>
  );
};

export default VideoContent;

const VideoCard = styled.div`
  border: 1px solid #67676b;
  border-radius: 8px;
  width: 200px;
  box-sizing: border-box;
  color: white;
  text-decoration: none;
`;

const VideoImage = styled.img`
  width: 100%;
  height: auto;
`;

const VideoTitle = styled.h3`
  font-size: 16px;
  margin-top: 10px;
`;
