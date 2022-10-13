import styled from 'styled-components';
import * as Scroll from 'react-scroll';
import { COLORS } from '../../../theme/Colors';

export const Section = styled(Scroll.Element)`
  display: flex;
  flex-flow: row wrap-reverse;
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

interface ITitle {
  fontFamily: string;
}

export const Title = styled.h1<ITitle>`
  font-size: 2.5em;
  font-weight: 800;
  font-family: ${(props) => props.fontFamily}; ;
`;

export const SubTitle = styled.h3`
  font-size: 1em;
  font-weight: 100;
`;
