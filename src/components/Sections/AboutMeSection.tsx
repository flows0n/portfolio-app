import React from 'react';
import Section from '../shared/Section';
import styled from 'styled-components';

const TitleContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 600;
`;

const SubTitle = styled.h3`
  font-size: 1.5em;
  font-weight: 200;
`;

const AboutMeSection = () => {
  return (
    <Section name="aboutMe">
      <TitleContainer>
        <SubTitle>I am Bartek Maliszewski</SubTitle>
        <Title>I am Frontend Developer!, I am Graphic Designer!, I am UX/UI Designer!</Title>
        <SubTitle>Welcome on My Page</SubTitle>
      </TitleContainer>
    </Section>
  );
};

export default AboutMeSection;
