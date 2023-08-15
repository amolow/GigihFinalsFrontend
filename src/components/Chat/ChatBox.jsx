import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ChatBox() {
  const { videoId } = useParams();
  const [username, setUsername] = useState("");
  const [comment, setMessage] = useState("");

  const handleSubmit = async (event) => {
    console.log("Username:", username);
    console.log("Message:", comment);
    console.log("Video ID:", videoId);
    event.preventDefault();

    try {
      await axios.post("https://gigihfinalsbackend.onrender.com/comments", {
        username,
        comment,
        videoId,
      });
      setUsername("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          color="white"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <Input
          type="text"
          placeholder="Message"
          color="white"
          value={comment}
          onChange={(event) => setMessage(event.target.value)}
        />
        <SubmitButton type="submit">Send</SubmitButton>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #67676b;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #18181b;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
`;
