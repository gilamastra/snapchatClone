import React from "react";
import styled from "styled-components";
import { BsPeopleCircle } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { IoChatbox } from "react-icons/io5";
import Chat from "./Chat";
const Chats = () => {
  return (
    <Container>
      <Header>
        <PeopleIcon />
        <SerachIcon />
        <input placeholder="Friends" type="text" />
        <ChatboxIcon />
      </Header>
      <ChatContainer>
        <Chat />
        <Chat />
        <Chat />
      </ChatContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 350px;
  height: 570px;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  background-color: #059ee0;
  padding: 10px 15px 15px 15px;
  display: flex;
  align-items: center;

  input {
    background-color: transparent;
    border: 0;
    outline: 0;
    flex: 1;
    color: white;
    ::placeholder {
      color: white;
    }
  }
`;
const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-shadow: 1px -7px 7px -6px rgba(0, 0, 0, 1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
  background-color: white;
  top: -15px;
`;
const PeopleIcon = styled(BsPeopleCircle)`
  font-size: 34px;
  color: white;
  padding: 0 5px;
`;
const SerachIcon = styled(AiOutlineSearch)`
  font-size: 24px;
  color: white;
`;
const ChatboxIcon = styled(IoChatbox)`
  font-size: 24px;
  color: white;
`;
export default Chats;
