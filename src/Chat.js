import React from "react";
import styled from "styled-components";
import { BsPeopleCircle } from "react-icons/bs";

const Chat = () => {
  return (
    <Container>
      <PeopleIcon />
      <PeopleContainer>
        <p>Giovani</p>
        <span>18 Minutes ago</span>
      </PeopleContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin: 5px;
`;
const PeopleIcon = styled(BsPeopleCircle)`
  font-size: 50px;
  color: #ccc;
  padding: 0 5px;
`;
const PeopleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #555;
  p {
    font-size: 16px;
    font-weight: bold;
    line-height: 0.9;
  }
  span {
    font-size: 13px;
  }
`;
export default Chat;
