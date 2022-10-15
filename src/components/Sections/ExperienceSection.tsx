import React from 'react';
import styled from 'styled-components';
import Section from '../shared/Section';

const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 600;
`;

const ExperienceSection = () => {
  return (
    <Section name="experience">
      <Title>experience</Title>
    </Section>
  );
};

export default ExperienceSection;
