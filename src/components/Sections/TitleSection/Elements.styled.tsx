import styled from 'styled-components';
import * as Scroll from 'react-scroll';

export const Section = styled(Scroll.Element)`
  display: flex;
  flex-flow: row nowrap;
  gap: auto 5px;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 600;
`;

export const SubTitle = styled.h3`
  font-size: 1.5em;
  font-weight: 200;
`;
