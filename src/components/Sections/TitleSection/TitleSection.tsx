import React from 'react';
import { Section, SubTitle, Title, TitleContainer } from './Elements.styled';

const TitleSection = () => {
  return (
    <Section name="title">
      <TitleContainer>
        <SubTitle>I am Bartek Maliszewski</SubTitle>
        <Title>I am Frontend Developer!, I am Graphic Designer!, I am UX/UI Designer!</Title>
        <SubTitle>Welcome on My Page</SubTitle>
      </TitleContainer>
    </Section>
  );
};

export default TitleSection;
