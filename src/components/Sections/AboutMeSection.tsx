import React, { useEffect, useState } from 'react';
import Section from '../shared/Section';
import styled from 'styled-components';
import SocialLinks from '../shared/SocialLinks';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import strings from '../../assets/constants/strings.json';

type Font = 'code' | 'ux';

interface TitleProps {
  font: Font;
}

const TitleContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 15px;
  max-width: 60vw;
  min-width: 300px;
`;

const Title = styled.h1<TitleProps>`
  font-size: 3em;
  font-weight: 400;
  font-family: ${({ font }) => (font === 'code' ? 'Fira Code' : 'Oregano')};
  color: ${({ theme }) => theme.accent};
  z-index: -1;
`;

const SubTitle = styled.h3`
  font-size: 1.5em;
  font-weight: 300;
`;
const Paragraph = styled.span`
  font-size: 1.125em;
  font-weight: 200;
  line-height: 1.25em;
  max-width: 50%;
  min-width: 300px;
`;

const AboutMeSection = () => {
  const [font, setFont] = useState<Font>('code');
  const [text, count] = useTypewriter({
    words: strings.aboutMeSection.title,
    loop: false,
    typeSpeed: 100,
    deleteSpeed: 80
  });

  useEffect(() => {
    if (Number(count) % 2 === 0) setFont('ux');
    else setFont('code');
  }, [count]);

  return (
    <Section name="aboutMe">
      <TitleContainer>
        <SubTitle>{strings.aboutMeSection.subtitle}</SubTitle>
        <Title font={font}>
          {text}
          <Cursor cursorStyle="_" />
        </Title>
        <Paragraph>{strings.aboutMeSection.paragraph}</Paragraph>
        <SocialLinks />
      </TitleContainer>
    </Section>
  );
};

export default AboutMeSection;
