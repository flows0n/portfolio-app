import React from 'react';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 36px;
`;

const Icon = styled.a`
  all: unset;
  display: block;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  height: fit-content;
  &:hover,
  &:active {
    scale: 1.5;
  }
`;

const SocialLinks = () => {
  return (
    <Container>
      <Icon href="https://github.com/flows0n/" target="_blank" rel="noreferrer noopener">
        <FiGithub size={32} />
      </Icon>
      <Icon>
        <FiLinkedin size={32} />
      </Icon>
      <Icon href="mailto:b.maliszewki@outlook.com">
        <FiMail size={32} />
      </Icon>
    </Container>
  );
};

export default SocialLinks;
