import styled from 'styled-components';
import * as Scroll from 'react-scroll';

const Section = styled(Scroll.Element)`
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  gap: 32px;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 68px 30px;
`;

export default Section;
