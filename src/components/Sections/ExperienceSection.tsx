import React from 'react';
import styled from 'styled-components';
import Section from '../shared/Section';
import WorkPlace from '../shared/WorkPlace';

const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: 600px;
  gap: 24px;
`;

const workPlaces = [
  {
    name: 'SoftMaker',
    position: 'React/NEXT.js Front-End Developer',
    years: 'December 2022 - now'
  },
  {
    name: 'LBPro',
    position: 'Junior React Front-End Developer',
    years: 'March 2022 - January 2023'
  },
  {
    name: 'LBPro',
    position: 'Software Quality Assurance Tester',
    years: 'March 2021 - February 2022'
  }
];

const ExperienceSection = () => {
  return (
    <Section name="experience">
      <Container>
        <Title>My Experience</Title>
        {workPlaces.map((place) => (
          <WorkPlace
            key={place.name}
            name={place.name}
            position={place.position}
            years={place.years}
          />
        ))}
      </Container>
    </Section>
  );
};

export default ExperienceSection;
