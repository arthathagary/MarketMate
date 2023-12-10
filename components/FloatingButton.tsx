"use client"
import React from 'react';
import styled from 'styled-components';

interface FloatingButtonProps {
  // onClick: () => void;
  children?: React.ReactNode;
}

const FloatingButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const FloatingButton: React.FC<FloatingButtonProps> = ({ children }) => {
  return (
    <FloatingButtonContainer>
      {children}
    </FloatingButtonContainer>
  );
};

export default FloatingButton;
