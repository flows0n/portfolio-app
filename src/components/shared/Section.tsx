import styled from 'styled-components';
import * as Scroll from 'react-scroll';

const Section = styled(Scroll.Element)`
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  gap: auto 5px;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default Section;
