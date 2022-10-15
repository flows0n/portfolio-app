import React from 'react';
import styled from 'styled-components';
import Section from '../shared/Section';

const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 600;
`;

const MyProjectsSection = () => {
  return (
    <Section name="myProjects">
      <Title>myProjects</Title>
    </Section>
  );
};

export default MyProjectsSection;
