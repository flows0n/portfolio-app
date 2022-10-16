import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
const Text = styled.span`
  width: 90%;
  font-size: 1em;
  font-weight: 200;
  text-align: center;
  border-top: 2px solid ${({ theme }) => theme.text2};
  padding: 16px 0px 8px;
`;

const Footer = () => {
  const today = new Date();
  return (
    <Container>
      <Text>Copyright © {today.getFullYear()} | Created by Me</Text>
    </Container>
  );
};

export default Footer;
