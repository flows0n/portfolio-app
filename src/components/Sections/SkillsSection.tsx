import React from 'react';
import styled from 'styled-components';
import * as Scroll from 'react-scroll';

const Section = styled(Scroll.Element)`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
  gap: 15px;
`;

const Card = styled.div`
  width: 80vw;
  height: 500px;
  background-color: ${({ theme }) => theme.nav};
  border-radius: 32px;
`;

const SkillsSection = () => {
  return (
    <Section name="skills">
      <Card />
      <Card />
      <Card />
    </Section>
  );
};

export default SkillsSection;
