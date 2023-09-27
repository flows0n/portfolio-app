import React from 'react';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import styled from 'styled-components';
import strings from '../../assets/constants/strings.json';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 36px;
  color: ${({ theme }) => theme.secondary};
  @media only screen and (max-width: 960px) {
    justify-content: center;
  }
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
      <Icon href={strings.socialLinks.github} target="_blank" rel="noreferrer noopener">
        <FiGithub size={32} />
      </Icon>
      <Icon href={strings.socialLinks.linkedIn} target="_blank" rel="noreferrer noopener">
        <FiLinkedin size={32} />
      </Icon>
      <Icon href={strings.socialLinks.email}>
        <FiMail size={32} />
      </Icon>
    </Container>
  );
};

export default SocialLinks;
