import React from 'react';
import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0%, 20%, 80%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
`;

const LoadingWrapper = styled.div`
  display: block;
  margin: 0 auto;
  position: relative;
  width: 5rem;
  height: 5rem;
`;

const LoadingElement = styled.div<{ position: number; positionTop: number; positionLeft: number }>`
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: ${({ theme }) => theme.colors.brand.default};
  border-radius: 50%;
  animation: ${loading} 1.2s linear infinite;
  animation-delay: ${({ position }) => `-${position * 0.1}s`};
  top: ${({ positionTop }) => `${positionTop}px`};
  left: ${({ positionLeft }) => `${positionLeft}px`};
`;

export const Loader = () => {
  return (
    <LoadingWrapper>
      <LoadingElement position={0} positionTop={37} positionLeft={66} />
      <LoadingElement position={1} positionTop={22} positionLeft={62} />
      <LoadingElement position={2} positionTop={11} positionLeft={52} />
      <LoadingElement position={3} positionTop={7} positionLeft={37} />
      <LoadingElement position={4} positionTop={11} positionLeft={22} />
      <LoadingElement position={5} positionTop={22} positionLeft={11} />
      <LoadingElement position={6} positionTop={37} positionLeft={7} />
      <LoadingElement position={7} positionTop={52} positionLeft={11} />
      <LoadingElement position={8} positionTop={62} positionLeft={22} />
      <LoadingElement position={9} positionTop={66} positionLeft={37} />
      <LoadingElement position={10} positionTop={62} positionLeft={52} />
      <LoadingElement position={11} positionTop={52} positionLeft={62} />
    </LoadingWrapper>
  );
};

export default Loader;
