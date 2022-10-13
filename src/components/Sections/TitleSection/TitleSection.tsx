import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { Section, SubTitle, Title, TitleContainer } from './Elements.styled';
import { TypeAnimation } from 'react-type-animation';

interface TitleScreenProps {
  isVisible?: boolean;
}

const TEXTS = ['I am Frontend Developer!', 'I am Graphic Designer!', 'I am UX/UI Designer!'];

const TitleSection = ({ isVisible }: TitleScreenProps) => {
  const [index, setIndex] = React.useState(0);

  return (
    <Section name="title">
      <TitleContainer as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <SubTitle>I am Bartek Maliszewski</SubTitle>
        <Title fontFamily="Arial">
          <TypeAnimation
            sequence={[
              TEXTS[0],
              2000,
              TEXTS[1],
              2000,
              TEXTS[2],
              2000,
              () => {
                console.log('Done typing!'); // Place optional callbacks anywhere in the array
              }
            ]}
            cursor={true}
            repeat={Infinity}
          />
        </Title>
        <SubTitle>Welcome on My Page</SubTitle>
      </TitleContainer>
    </Section>
  );
};

export default TitleSection;
