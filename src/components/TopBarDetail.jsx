import React, { useState } from "react";
import { Layout, Input, Button, AutoComplete } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

const { Search } = Input;

export default function TopBarDetails() {
  return (
    <Container>
      <div className="logo">
        <Link to={`/`}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Tokopedia.svg"
            width="100px "
          />
        </Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vh 2vw;
  background-color: #18181b;
  color: white;
  text-decoration: none;
  flex-direction: row;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
`;
