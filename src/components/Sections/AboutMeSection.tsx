import React, { useEffect, useState } from 'react';
import Section from '../shared/Section';
import styled from 'styled-components';
import SocialLinks from '../shared/SocialLinks';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

type Font = 'code' | 'ux';

interface TitleProps {
  font: Font;
}

const TitleContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
  width: 80%;
`;

const Title = styled.h1<TitleProps>`
  font-size: 2.5em;
  font-weight: 600;
  font-family: ${({ font }) => (font === 'code' ? '' : 'Times New Roman')};
  z-index: -1;
`;

const SubTitle = styled.h3`
  font-size: 1.5em;
  font-weight: 200;
`;

const AboutMeSection = () => {
  const strings = ['I am Frontend Developer!', 'I am UX/UI Designer!'];
  const [font, setFont] = useState<Font>('code');
  const [text, count] = useTypewriter({
    words: strings,
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
        <SubTitle>I am Bartek Maliszewski.</SubTitle>
        <Title font={font}>
          {text}
          <Cursor cursorStyle="_" />
        </Title>
        <SubTitle>Welcome on My Page!</SubTitle>
        <SocialLinks />
      </TitleContainer>
    </Section>
  );
};

export default AboutMeSection;
