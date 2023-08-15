import styled from "styled-components";

import ChatDisplay from "./ChatDisplay";
import ChatBox from "./ChatBox";

export default function Chat() {
  return (
    <Container>
      <ChatDisplay />
      <ChatBox />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 500px;
  border-left: 2px solid #313034;
  background-color: #18181b;
`;
