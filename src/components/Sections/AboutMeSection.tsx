import React, { useEffect, useState } from 'react';
import Section from '../shared/Section';
import styled from 'styled-components';
import SocialLinks from '../shared/SocialLinks';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import strings from '../../assets/constants/strings.json';
import { motion } from 'framer-motion';

type Font = 'code' | 'ux' | 'normal';

interface TitleProps {
  font: Font;
}

const TitleContainer = styled.div`
  justify-self: right;
  display: flex;
  flex-flow: column nowrap;
  gap: 30px;
  max-width: 500px;
`;

const fontMap = { code: 'Fira Code', ux: 'Oregano', normal: 'Poppins' };

const Title = styled.h1<TitleProps>`
  font-size: 3em;
  font-weight: 400;
  font-family: ${({ font }) => fontMap[font]};
  color: ${({ theme }) => theme.accent};
  z-index: -1;
`;

const SubTitle = styled.h3`
  font-size: 1.5em;
  font-weight: 300;
  white-space: break-spaces;
`;
const Paragraph = styled.span`
  font-size: 1.125em;
  font-weight: 200;
  line-height: 1.25em;
  max-width: 50%;
  min-width: 300px;
`;

const Avatar = styled(motion.img)`
  aspect-ratio: 1/1;
  max-width: 500px;
  width: 100%;
  height: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media only screen and (max-width: 960px) {
    grid-template-columns: 1fr;
  }
  gap: 30px;
  justify-items: center;
  align-items: center;
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
      <Grid>
        <TitleContainer>
          <SubTitle>{strings.aboutMeSection.subtitle}</SubTitle>
          <Title font={font}>
            {text}
            <Cursor cursorStyle="_" />
          </Title>
          <Paragraph>{strings.aboutMeSection.paragraph}</Paragraph>
          <SocialLinks />
        </TitleContainer>
        <Avatar
          initial={{ opacity: 0, scale: 0, rotate: -45 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
          src="./images/avatar.png"
          alt="avatar"
        />
      </Grid>
    </Section>
  );
};

export default AboutMeSection;
