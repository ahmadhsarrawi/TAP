import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderWrapper = styled.div`
  display: block;
  width:  150px;
  height:  150px;
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  margin: auto;
  border-top: 6px solid #3498db;
  animation: ${spin} 1s linear infinite;
`;

const Loader = ({ size, border }) => {
  return <LoaderWrapper  />;
};

export default Loader;
