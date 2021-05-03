import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setCameraImage } from "./features/counter/cameraSlice";
import { useHistory } from "react-router";
import { BsCircle } from "react-icons/bs";
const WebcamCapture = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const webcamRef = useRef("");
  const videoConstraints = {
    width: 568,
    height: 924,
    facingMode: "user",
  };
  const capture = () => {
    dispatch(setCameraImage(webcamRef.current.getScreenshot()));
    history.push("/preview");
  };
  return (
    <Container>
      <WebcamComponent
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      ></WebcamComponent>
      <CircleIcon onClick={capture}>Capture photo</CircleIcon>
    </Container>
  );
};

const WebcamComponent = styled(Webcam)`
  width: 350px;
  height: 600px;
`;
const Container = styled.div`
  display: flex;
  position: relative;
`;
const CircleIcon = styled(BsCircle)`
  position: absolute;
  font-size: 45px;
  left: 50%;
  cursor: pointer;
  bottom: 30px;
  color: red;
  transform: translate(-50%, 0);
`;
export default WebcamCapture;
