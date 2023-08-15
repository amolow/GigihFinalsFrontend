import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ChatDisplay() {
  const { videoId } = useParams();
  const [comments, setComment] = useState([]);

  useEffect(() => {
    axios
      .get(`https://gigihfinalsfrontend.onrender.com/comments/${videoId}`)
      .then((response) => {
        const sortedChatData = response.data.sort((a, b) =>
          a.timestamp < b.timestamp ? 1 : -1
        );
        setComment(sortedChatData);
      })
      .catch((error) => {
        console.error("ERROR", error);
      });
  }, [videoId]);

  return (
    <Container>
      {comments.map((message, index) => (
        <ChatMessage key={index}>
          <Username>{message.username}: </Username>
          <MessageText>{message.comment}</MessageText>
        </ChatMessage>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  font-size: 16px;
`;

const ChatMessage = styled.div`
  margin: 3px 10px;
  word-wrap: break-word;

  padding: 5px;
  color: white;
`;

const Username = styled.span`
  font-weight: bold;
  color: #42b549;
`;

const MessageText = styled.span`
  margin-left: 5px;
`;
