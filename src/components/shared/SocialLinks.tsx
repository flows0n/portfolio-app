import React from 'react';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import styled from 'styled-components';
import useMobileView from '../../hooks/useMobileView';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 36px;
`;

const Icon = styled.a`
  all: unset;
  display: block;
  transition: all ease-in-out 0.2s;
  &:hover,
  &:active {
    scale: 1.2;
  }
`;

const SocialLinks = () => {
  const isMobile = useMobileView();
  return (
    <Container>
      <Icon href="https://github.com/flows0n/" target="_blank" rel="noreferrer noopener">
        <FiGithub size={isMobile ? 42 : 24} />
      </Icon>
      <Icon>
        <FiLinkedin size={isMobile ? 42 : 24} />
      </Icon>
      <Icon href="mailto:b.maliszewki@outlook.com">
        <FiMail size={isMobile ? 42 : 24} />
      </Icon>
    </Container>
  );
};

export default SocialLinks;
