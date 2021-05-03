import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectCameraImage } from "./features/counter/cameraSlice";
import { AiOutlineClose } from "react-icons/ai";
import { useHistory } from "react-router";
import { storage } from "./firebase";
const Preview = () => {
  const webCamImage = useSelector(selectCameraImage);
  const history = useHistory();

  const sendImage = () => {
    console.log(webCamImage);
    storage
      .child("images/")
      .put(webCamImage, "base64")
      .then(function (snapshot) {
        console.log("Uploaded a base64 string!");
      });
  };
  useEffect(() => {
    if (!webCamImage) {
      history.push("/");
    }
  }, []);
  return (
    <Container>
      <CloseIcon
        onClick={() => {
          history.push("/");
        }}
      />
      <img src={webCamImage} alt="" />
      <ButtonClose
        onClick={() => {
          sendImage();
        }}
      >
        Send Now
      </ButtonClose>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  img {
    width: 350px;
    height: 570px;
  }
`;
const CloseIcon = styled(AiOutlineClose)`
  position: absolute;
  top: 5px;
  left: 5px;
  color: white;
  cursor: pointer;
  font-size: 30px;
`;
const ButtonClose = styled.button`
  position: absolute;
  height: 35px;
  border: 0;
  cursor: pointer;
  background-color: #fefc01;
  font-weight: bold;
  border-radius: 30px;
  width: 120px;
  right: 15px;
  outline: 0;

  bottom: 15px;
`;
export default Preview;
