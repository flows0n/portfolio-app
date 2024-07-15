import React from 'react';
import styled from 'styled-components';
import Section from '../shared/Section';
import Tabs from '../shared/Tabs';

const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 600;
`;

const SkillsSection = () => {
  return (
    <Section name="skills">
      <Tabs
        tabs={[
          { label: 'Coding', content: <Title>Work in progress 😉</Title> },
          { label: 'Designing', content: <Title>Work in progress 😉</Title> },
          { label: 'Project Management', content: <Title>Work in progress 😉</Title> }
        ]}
      />
    </Section>
  );
};

export default SkillsSection;
